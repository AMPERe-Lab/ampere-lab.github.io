---
layout: ampere-page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 4
---

{::nomarkdown}

<style>
  .pub-scholar-card p {
    font-size: 18px;
    line-height: 1.65;
    color: var(--color-text-secondary);
    max-width: none;
    margin-bottom: 1.5rem;
  }
  .pub-scholar-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.65rem 1.5rem;
    border: 1px solid var(--color-border-secondary);
    border-bottom: 3px solid #C99700;
    border-radius: 999px;
    background: var(--color-background-primary);
    text-decoration: none;
    transition: box-shadow 0.15s ease, transform 0.15s ease;
  }
  .pub-scholar-btn:hover {
    box-shadow: 0 4px 14px rgba(0,0,0,0.08);
    transform: translateY(-1px);
  }
  .pub-scholar-btn .pub-scholar-text {
    font-family: var(--font-body);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.2px;
  }
  .pub-scholar-btn .pub-g  { color: #4285F4; }
  .pub-scholar-btn .pub-o1 { color: #EA4335; }
  .pub-scholar-btn .pub-o2 { color: #FBBC05; }
  .pub-scholar-btn .pub-g2 { color: #4285F4; }
  .pub-scholar-btn .pub-l  { color: #34A853; }
  .pub-scholar-btn .pub-e  { color: #EA4335; }
  .pub-scholar-btn i {
    font-size: 18px;
    color: var(--color-text-tertiary);
  }

  /* ── Filters: search box, topic chips, type chips ── */
  .pub-tools {
    margin: 2.25rem 0 0.5rem;
  }
  .pub-search {
    width: 100%;
    max-width: 560px;
    padding: 0.7rem 1rem;
    font-size: 17px;
    border: 1px solid rgba(12, 35, 64, 0.2);
    border-radius: 8px;
    background: var(--color-background-primary, #fff);
    color: var(--color-text-primary);
    margin-bottom: 1rem;
  }
  .pub-search:focus {
    outline: none;
    border-color: #c99700;
    box-shadow: 0 0 0 3px rgba(201, 151, 0, 0.18);
  }
  .pub-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  .pub-chip {
    font-family: var(--font-heading);
    font-size: 15px;
    font-weight: 600;
    padding: 0.4rem 0.95rem;
    border-radius: 999px;
    border: 1px solid rgba(12, 35, 64, 0.18);
    background: #f1f3f6;
    color: #0c2340;
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease;
  }
  .pub-chip:hover {
    border-color: #c99700;
  }
  .pub-chip.is-active {
    background: #0c2340;
    border-color: #0c2340;
    color: #fff;
  }
  .pub-chip .pub-n {
    font-weight: 500;
    opacity: 0.7;
    margin-left: 0.25rem;
    color: inherit;
  }
  .pub-count {
    font-size: 15px !important;
    color: var(--color-text-tertiary) !important;
    margin: 0.25rem 0 0;
  }
  .pub-empty {
    display: none;
    margin-top: 2rem;
  }

  /* ── Paper list ── */
  .pub-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem;
    max-width: 1000px;
  }
  .pub-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0.4rem 0.9rem;
    align-items: baseline;
    padding: 0.85rem 0;
    border-bottom: 1px solid rgba(12, 35, 64, 0.08);
  }
  .pub-item:last-child {
    border-bottom: none;
  }
  .pub-badge {
    font-family: var(--font-heading);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 0.2rem 0.55rem;
    border-radius: 4px;
    white-space: nowrap;
    min-width: 6.5rem;
    text-align: center;
  }
  .pub-badge-journal { background: #0c2340; color: #fff; }
  .pub-badge-conference { background: rgba(201, 151, 0, 0.18); color: #5c4500; }
  .pub-badge-patent { background: rgba(24, 95, 165, 0.12); color: #185fa5; }
  .pub-badge-other { background: rgba(12, 35, 64, 0.07); color: #494e52; }
  .ap-wrap .pub-cite {
    font-size: 17px;
    line-height: 1.55;
    color: var(--color-text-secondary);
  }
  .ap-wrap .pub-cite b {
    color: var(--color-text-primary);
    font-weight: 700;
  }
  .pub-cite .pub-title {
    color: var(--color-text-primary);
  }
  .pub-cite .pub-venue {
    font-style: italic;
    color: inherit;
  }
  .pub-actions {
    display: flex;
    gap: 0.4rem;
    white-space: nowrap;
  }
  .pub-actions button,
  .pub-actions a {
    font-size: 13px;
    font-weight: 600;
    padding: 0.2rem 0.6rem;
    border: 1px solid rgba(12, 35, 64, 0.18);
    border-radius: 4px;
    background: transparent;
    color: #185fa5;
    text-decoration: none;
    cursor: pointer;
  }
  .pub-actions button:hover,
  .pub-actions a:hover {
    border-color: #c99700;
    text-decoration: none;
  }
  @media (max-width: 700px) {
    .pub-item {
      grid-template-columns: 1fr;
    }
    .pub-badge {
      justify-self: start;
      min-width: 0;
    }
  }
  html[data-theme='dark'] .pub-chip { background: rgba(255,255,255,0.06); color: #f1f1ef; border-color: rgba(255,255,255,0.18); }
  html[data-theme='dark'] .pub-chip.is-active { background: #c99700; border-color: #c99700; color: #0c2340; }
  html[data-theme='dark'] .pub-item { border-color: rgba(255,255,255,0.1); }
  html[data-theme='dark'] .pub-badge-conference { color: #f1d27a; }
  html[data-theme='dark'] .pub-badge-other { color: #c8cbce; background: rgba(255,255,255,0.08); }
</style>

<div class="pub-scholar-card">
  <p>
    For the most up-to-date list of publications and patents, please visit Prof. Gadiyar's Google Scholar page via the button below.
  </p>
  <a class="pub-scholar-btn" href="https://scholar.google.com/citations?user=CPd0z5gAAAAJ" target="_blank" rel="noopener">
    <span class="pub-scholar-text">
      <span class="pub-g">G</span><span class="pub-o1">o</span><span class="pub-o2">o</span><span class="pub-g2">g</span><span class="pub-l">l</span><span class="pub-e">e</span> Scholar
    </span>
    <i class="ti ti-external-link"></i>
  </a>
</div>

{% assign pubs = site.data.publications.papers %}
{% assign types = 'journal:Journals,conference:Conferences,patent:Patents,other:Other' | split: ',' %}

<div class="pub-tools">
  <input class="pub-search" id="pub-search" type="search" placeholder="Search papers by keyword, author, or venue…" aria-label="Search publications">
  <div class="pub-chips" role="group" aria-label="Filter by topic">
    <button type="button" class="pub-chip is-active" data-group="topic" data-value="all">All topics</button>
    {% for t in site.data.publications.topics %}
      {% assign n = pubs | where: 'topic', t.key | size %}
      <button type="button" class="pub-chip" data-group="topic" data-value="{{ t.key }}">{{ t.label }}<span class="pub-n">{{ n }}</span></button>
    {% endfor %}
  </div>
  <div class="pub-chips" role="group" aria-label="Filter by type">
    <button type="button" class="pub-chip is-active" data-group="type" data-value="all">All types</button>
    {% for ty in types %}
      {% assign kv = ty | split: ':' %}
      {% assign n = pubs | where: 'type', kv[0] | size %}
      <button type="button" class="pub-chip" data-group="type" data-value="{{ kv[0] }}">{{ kv[1] }}<span class="pub-n">{{ n }}</span></button>
    {% endfor %}
  </div>
  <p class="pub-count" id="pub-count" aria-live="polite">{{ pubs | size }} publications</p>
</div>

{% for t in site.data.publications.topics %}
{% assign list = pubs | where: 'topic', t.key | sort: 'year' | reverse %}

  <section class="pub-topic" data-topic="{{ t.key }}">
    <h2>{{ t.title }}</h2>
    <ol class="pub-list">
      {% for p in list %}
        <li class="pub-item" data-type="{{ p.type }}">
          <span class="pub-badge pub-badge-{{ p.type }}">{% case p.type %}{% when 'journal' %}Journal{% when 'conference' %}Conference{% when 'patent' %}Patent{% else %}Other{% endcase %}</span>
          <span class="pub-cite">{{ p.authors }}, “<span class="pub-title">{{ p.title }}</span>,” <span class="pub-venue">{{ p.venue }}</span>, {{ p.year }}.</span>
          <span class="pub-actions">
            <button type="button" class="pub-copy" aria-label="Copy citation">Copy</button>
            <a class="pub-find" href="https://scholar.google.com/scholar?q={{ p.title | url_encode }}" target="_blank" rel="noopener" aria-label="Find this paper on Google Scholar">Find ↗</a>
          </span>
        </li>
      {% endfor %}
    </ol>
  </section>
{% endfor %}

<p class="pub-empty" id="pub-empty">No papers match your search.</p>

<script>
  // Filter publications by topic, type, and search text; copy citations to the clipboard.
  (function () {
    var state = { topic: 'all', type: 'all', q: '' };
    var items = Array.prototype.slice.call(document.querySelectorAll('.pub-item'));
    var sections = Array.prototype.slice.call(document.querySelectorAll('.pub-topic'));
    var count = document.getElementById('pub-count');
    var empty = document.getElementById('pub-empty');

    function apply() {
      var shown = 0;
      sections.forEach(function (sec) {
        var topicOk = state.topic === 'all' || sec.getAttribute('data-topic') === state.topic;
        var visible = 0;
        sec.querySelectorAll('.pub-item').forEach(function (li) {
          var typeOk = state.type === 'all' || li.getAttribute('data-type') === state.type;
          var textOk = !state.q || li.textContent.toLowerCase().indexOf(state.q) !== -1;
          var ok = topicOk && typeOk && textOk;
          li.style.display = ok ? '' : 'none';
          if (ok) visible++;
        });
        sec.style.display = visible ? '' : 'none';
        shown += visible;
      });
      count.textContent = shown + (shown === 1 ? ' publication' : ' publications');
      empty.style.display = shown ? 'none' : 'block';
    }

    document.querySelectorAll('.pub-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var group = chip.getAttribute('data-group');
        state[group] = chip.getAttribute('data-value');
        document.querySelectorAll('.pub-chip[data-group="' + group + '"]').forEach(function (c) {
          c.classList.toggle('is-active', c === chip);
        });
        apply();
      });
    });

    document.getElementById('pub-search').addEventListener('input', function (e) {
      state.q = e.target.value.trim().toLowerCase();
      apply();
    });

    document.querySelectorAll('.pub-copy').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var text = btn.closest('.pub-item').querySelector('.pub-cite').textContent.replace(/\s+/g, ' ').trim();
        var done = function () {
          btn.textContent = 'Copied';
          setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () {});
        }
      });
    });
  })();
</script>

{:/nomarkdown}
