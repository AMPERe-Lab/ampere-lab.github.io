// Weekly publications updater.
//
// Fetches Prof. Gadiyar's works from OpenAlex (by ORCID), finds any that are not yet in
// _data/publications.yml, and appends them with a best-guess topic and type. The GitHub
// workflow then opens a pull request so a person can review the additions before they go live.
//
// Usage:  node .github/scripts/update-publications.mjs            (writes changes)
//         node .github/scripts/update-publications.mjs --dry-run  (prints only)
// No dependencies; needs Node 18+ (built-in fetch).

import fs from "node:fs";

const ORCID = "0000-0003-4826-7524";
// OpenAlex author profile ("FNU Nishanth", also Nishanth Gadiyar). Filtering by this ID finds more papers
// than the ORCID filter, because OpenAlex has not linked the ORCID to every paper.
const OPENALEX_AUTHOR = "A5034423437";
const FROM_DATE = "2019-01-01";
const DATA_FILE = process.env.DATA_FILE || "_data/publications.yml";
const SUMMARY_FILE = process.env.SUMMARY_FILE || "publications-update.md";
const DRY_RUN = process.argv.includes("--dry-run");

// Names under which Prof. Gadiyar has published (shown in bold).
const PI_NAME = /gadiyar|nishanth/i;

// Topic guesses from title keywords, checked in order. Keys must match "topics" in the data file.
const TOPIC_RULES = [
  ["am", /additive|additively|3d[- ]print|printed|lattice|multi-material/i],
  ["multiharmonic", /harmonic|multiphase winding|brushless excitation|airgap field/i],
  ["integrated", /hydraulic|off-highway|pump|valve|ring motor|integrated load/i],
  ["axialflux", /axial[- ]flux|thermal/i],
  ["ai", /neural|machine learning|artificial intelligence|\bai\b|optimi[sz]ation|gear selection|digital twin/i],
  ["pe", /inverter|converter|wireless|inductive|power transfer|data cent|grid|battery|charg/i],
];
const DEFAULT_TOPIC = "integrated";

const SURNAME_PARTICLES = new Set(["van", "de", "der", "den", "von", "la", "le", "da", "di", "du", "del", "dos"]);

// ---------- helpers ----------

const normalize = (s) =>
  String(s)
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

// Similarity of two normalized titles (Dice coefficient on word bigrams), 0..1.
function similarity(a, b) {
  const grams = (s) => {
    const w = s.split(" ");
    const g = new Map();
    for (let i = 0; i < w.length - 1; i++) {
      const k = w[i] + " " + w[i + 1];
      g.set(k, (g.get(k) || 0) + 1);
    }
    return g;
  };
  const A = grams(a);
  const B = grams(b);
  let inter = 0;
  let total = 0;
  for (const [k, n] of A) {
    inter += Math.min(n, B.get(k) || 0);
    total += n;
  }
  for (const n of B.values()) total += n;
  return total ? (2 * inter) / total : a === b ? 1 : 0;
}

// "Eric L. Severson" -> "E. L. Severson"; "James D. Van de Ven" -> "J. D. Van de Ven"; "Shi-Uk Chung" -> "S.-U. Chung"
function shortName(full) {
  const tokens = String(full).replace(/\s+/g, " ").trim().split(" ");
  if (tokens.length === 1) return tokens[0];
  let i = tokens.length - 1;
  while (i > 1 && SURNAME_PARTICLES.has(tokens[i - 1].toLowerCase())) i--;
  const surname = tokens.slice(i).join(" ");
  const initials = tokens
    .slice(0, i)
    .map((t) =>
      t
        .split("-")
        .map((p) => (p ? p[0].toUpperCase() + "." : ""))
        .join("-")
    )
    .join(" ");
  return `${initials} ${surname}`;
}

function joinAuthors(names) {
  if (names.length <= 1) return names.join("");
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

function guessType(work) {
  const src = work.primary_location?.source;
  const venue = src?.display_name || "";
  if (work.type === "dissertation") return "other";
  if (work.type === "preprint" || src?.type === "repository") return "other";
  if (src?.type === "conference" || /conference|congress|symposium|expo|proceedings|workshop/i.test(venue)) return "conference";
  if (src?.type === "journal") return "journal";
  return "other";
}

function guessTopic(title, venue) {
  const text = `${title} ${venue}`;
  for (const [key, re] of TOPIC_RULES) if (re.test(text)) return key;
  return DEFAULT_TOPIC;
}

const yamlString = (s) => '"' + String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';

// Tell the GitHub workflow how many papers were added (step output "added").
function setOutput(n) {
  if (process.env.GITHUB_OUTPUT)
    fs.appendFileSync(
      process.env.GITHUB_OUTPUT,
      `added=${n}
`
    );
}

// ---------- main ----------

async function fetchWorks() {
  const works = [];
  let cursor = "*";
  while (cursor) {
    const url =
      `https://api.openalex.org/works?filter=authorships.author.id:${OPENALEX_AUTHOR},from_publication_date:${FROM_DATE}` +
      `&per-page=100&cursor=${encodeURIComponent(cursor)}`;
    const res = await fetch(url, { headers: { "User-Agent": "ampere-lab-website-publications-updater" } });
    if (!res.ok) throw new Error(`OpenAlex request failed: ${res.status} ${res.statusText}`);
    const page = await res.json();
    works.push(...page.results);
    cursor = page.results.length ? page.meta.next_cursor : null;
  }
  return works;
}

const KEEP_TYPES = new Set(["article", "conference-paper", "preprint", "dissertation", "book-chapter", "review", "report", "proceedings-article"]);

async function main() {
  const yml = fs.readFileSync(DATA_FILE, "utf8");
  const existingTitles = [...yml.matchAll(/^\s*title:\s*(.+)$/gm)].map((m) => normalize(m[1].replace(/^["']|["']$/g, "")));
  const known = (title) => {
    const t = normalize(title);
    return existingTitles.some((e) => e === t || similarity(e, t) >= 0.85);
  };

  const works = (await fetchWorks()).filter((w) => w.display_name && KEEP_TYPES.has(w.type));
  // Prefer published versions over preprints when OpenAlex lists both.
  const rank = { journal: 0, conference: 1, other: 2 };
  works.sort((a, b) => rank[guessType(a)] - rank[guessType(b)]);

  const added = [];
  for (const w of works) {
    const title = w.display_name.replace(/<[^>]+>/g, "").trim();
    if (known(title) || added.some((a) => similarity(normalize(a.title), normalize(title)) >= 0.85)) continue;
    const venue = w.primary_location?.source?.display_name || (w.type === "dissertation" ? "Ph.D. dissertation" : "Unknown venue");
    const authors = joinAuthors(
      (w.authorships || []).map((a) => {
        const name = shortName(a.raw_author_name || a.author?.display_name || ""); // name as printed on the paper
        const isPI =
          (a.author?.id || "").endsWith(OPENALEX_AUTHOR) || (a.author?.orcid || "").endsWith(ORCID) || PI_NAME.test(a.author?.display_name || "");
        return isPI ? "<b>N. Gadiyar</b>" : name; // always the current name, whatever the paper prints
      })
    );
    added.push({ topic: guessTopic(title, venue), type: guessType(w), year: w.publication_year, authors, title, venue, doi: w.doi });
  }

  if (!added.length) {
    console.log(`No new publications found (${works.length} works checked).`);
    setOutput(0);
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  let block = `\n  # ── Added automatically from OpenAlex on ${today}: check topic and type before merging ──\n`;
  for (const p of added) {
    block += `  - topic: ${p.topic}\n    type: ${p.type}\n    year: ${p.year}\n`;
    block += `    authors: ${yamlString(p.authors)}\n    title: ${yamlString(p.title)}\n    venue: ${yamlString(p.venue)}\n`;
  }

  let summary = `Found **${added.length}** new publication(s) on OpenAlex that are not yet on the website.\n\n`;
  summary += `Please check each **topic** and **type** guess in \`${DATA_FILE}\` (edit this branch if needed), then merge to publish.\n\n`;
  summary += `| Year | Type | Topic (guess) | Title | Venue |\n|---|---|---|---|---|\n`;
  for (const p of added) {
    const t = p.doi ? `[${p.title}](${p.doi})` : p.title;
    summary += `| ${p.year} | ${p.type} | ${p.topic} | ${t.replace(/\|/g, "\\|")} | ${p.venue.replace(/\|/g, "\\|")} |\n`;
  }
  summary += `\nTopic keys: integrated, am, multiharmonic, axialflux, ai, pe. Types: journal, conference, patent, other.\n`;

  console.log(summary);
  if (DRY_RUN) return;
  fs.writeFileSync(DATA_FILE, yml.replace(/\s*$/, "\n") + block);
  fs.writeFileSync(SUMMARY_FILE, summary);
  setOutput(added.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
