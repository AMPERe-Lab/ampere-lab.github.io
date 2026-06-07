---
layout: ampere-page
permalink: /people/
title: People
description:
nav: true
nav_order: 3
---

<style>
  .pp-tile-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.1rem;
    margin: 1.25rem 0 2.5rem;
  }
  @media (max-width: 900px) { .pp-tile-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .pp-tile-grid { grid-template-columns: 1fr; } }

  .pp-tile {
    display: block;
    background: var(--color-background-primary);
    border: 0.5px solid var(--color-border-tertiary);
    border-radius: 10px;
    padding: 1.5rem 1.35rem;
    text-decoration: none;
    text-align: center;
    transition: box-shadow 0.15s ease, transform 0.15s ease, border-color 0.15s ease;
  }
  .pp-tile:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    transform: translateY(-2px);
    border-color: #C99700;
  }
  .pp-tile-avatar {
    width: 92px; height: 92px; border-radius: 50%;
    background: #e9edf2;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 1rem;
  }
  .pp-tile-avatar i { font-size: 48px; color: #9aa7b6; }
  .pp-tile.pp-tile-open .pp-tile-avatar {
    background: #0C2340;
  }
  .pp-tile.pp-tile-open .pp-tile-avatar i { color: #C99700; }
  .pp-tile h3 {
    font-size: 17px; font-weight: 600; color: var(--color-text-primary);
    margin: 0 0 0.3rem;
  }
  .pp-tile p {
    font-size: 14px; line-height: 1.5; color: var(--color-text-secondary); margin: 0;
  }
  .pp-tile .pp-tile-link {
    display: inline-block; margin-top: 0.6rem; font-size: 13px; font-weight: 600; color: #185FA5;
  }

  /* ── Group Leader card ── */
  .pp-leader-card {
    display: flex;
    gap: 2.25rem;
    align-items: flex-start;
    background: var(--color-background-primary);
    border: 0.5px solid var(--color-border-tertiary);
    border-radius: 14px;
    padding: 2rem;
    margin: 1.25rem 0 2.5rem;
    transition: box-shadow 0.15s ease, border-color 0.15s ease;
  }
  .pp-leader-card:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    border-color: #C99700;
  }
  @media (max-width: 700px) {
    .pp-leader-card { flex-direction: column; align-items: center; text-align: center; }
  }
  .pp-leader-photo {
    width: 168px; height: 168px; flex-shrink: 0;
    border-radius: 16px; object-fit: cover;
    border: 3px solid #0C2340;
  }
  .pp-leader-card h3 {
    font-family: 'DM Serif Display', serif; font-size: 26px; font-weight: 400;
    color: var(--color-text-primary); margin: 0 0 0.2rem; line-height: 1.2;
  }
  .pp-leader-role {
    font-size: 14.5px; font-weight: 600; letter-spacing: 0.5px;
    color: #C99700; text-transform: uppercase; margin: 0 0 0.9rem;
  }
  .pp-leader-links {
    display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 1.1rem;
  }
  @media (max-width: 700px) { .pp-leader-links { justify-content: center; } }
  .pp-leader-links a {
    display: inline-flex; align-items: center; gap: 0.4rem;
    font-size: 13px; font-weight: 600; color: #185FA5;
    background: var(--color-background-secondary, rgba(24,95,165,0.08));
    border: 0.5px solid var(--color-border-tertiary);
    border-radius: 999px; padding: 0.4rem 0.95rem;
    text-decoration: none; transition: border-color 0.15s ease, color 0.15s ease;
  }
  .pp-leader-links a:hover { border-color: #C99700; color: #C99700; }
  .pp-leader-links a i { font-size: 16px; }
  .pp-leader-card p {
    font-size: 17px; line-height: 1.7; color: var(--color-text-secondary); margin: 0;
  }
</style>

## Principal Investigator

<div class="pp-leader-card">
  <img class="pp-leader-photo" src="/assets/img/prof_pic.png" alt="Prof. Nishanth Gadiyar">
  <div>
    <h3>Nishanth Gadiyar</h3>
    <p class="pp-leader-role">Assistant Professor &middot; Department of Electrical Engineering &middot; University of Notre Dame</p>
    <div class="pp-leader-links">
      <a href="https://ngadiyar93.github.io" target="_blank"><i class="ti ti-world"></i> Personal Website</a>
    </div>
    <p>
      Dr. Gadiyar received his Ph.D. in Electrical Engineering from the University of Wisconsin-Madison in 2023. Prior to joining Notre Dame, he was an R&D Staff Member and held the Alvin M. Weinberg <a href="https://www.ornl.gov/careers/distinguished-fellowships" target="_blank">Distinguished Staff Fellowship</a> at the Oak Ridge National Laboratory (2024-2026), and worked in the industry at the GE Aerospace Research Center (2023-2024), and the Mitsubishi Electric Research Laboratories (2021).
      He is a Senior Member of the IEEE and since 2025, serves as an Associate Editor of the IEEE Transactions on Industry Applications, and the IEEE Transactions on Transportation Electrification.
    </p>
  </div>
</div>

---

## Postdoctoral Researchers

<div class="pp-tile-grid">
  <a class="pp-tile" href="/join/postdocs/">
    <div class="pp-tile-avatar"><i class="ti ti-user"></i></div>
    <h3>This could be you</h3>
    <p>Postdoctoral position open</p>
    <span class="pp-tile-link">See opportunities →</span>
  </a>
  <a class="pp-tile" href="/join/postdocs/">
    <div class="pp-tile-avatar"><i class="ti ti-user"></i></div>
    <h3>This could be you</h3>
    <p>Postdoctoral position open</p>
    <span class="pp-tile-link">See opportunities →</span>
  </a>
  <a class="pp-tile" href="/join/postdocs/">
    <div class="pp-tile-avatar"><i class="ti ti-user"></i></div>
    <h3>This could be you</h3>
    <p>Postdoctoral position open</p>
    <span class="pp-tile-link">See opportunities →</span>
  </a>
</div>

---

## Graduate Students

<div class="pp-tile-grid">
  <a class="pp-tile" href="/join/graduate-students/">
    <div class="pp-tile-avatar"><i class="ti ti-user"></i></div>
    <h3>This could be you</h3>
    <p>PhD position open — Fall 2026</p>
    <span class="pp-tile-link">See opportunities →</span>
  </a>
  <a class="pp-tile" href="/join/graduate-students/">
    <div class="pp-tile-avatar"><i class="ti ti-user"></i></div>
    <h3>This could be you</h3>
    <p>PhD position open — Fall 2026</p>
    <span class="pp-tile-link">See opportunities →</span>
  </a>
  <a class="pp-tile" href="/join/graduate-students/">
    <div class="pp-tile-avatar"><i class="ti ti-user"></i></div>
    <h3>This could be you</h3>
    <p>PhD position open — Fall 2026</p>
    <span class="pp-tile-link">See opportunities →</span>
  </a>
  <a class="pp-tile" href="/join/graduate-students/">
    <div class="pp-tile-avatar"><i class="ti ti-user"></i></div>
    <h3>This could be you</h3>
    <p>PhD position open — Fall 2026</p>
    <span class="pp-tile-link">See opportunities →</span>
  </a>
</div>

---

## Undergraduate Students

<div class="pp-tile-grid">
  <a class="pp-tile" href="/join/undergraduate-students/">
    <div class="pp-tile-avatar"><i class="ti ti-user"></i></div>
    <h3>This could be you</h3>
    <p>Undergraduate research opportunity open</p>
    <span class="pp-tile-link">See opportunities →</span>
  </a>
  <a class="pp-tile" href="/join/undergraduate-students/">
    <div class="pp-tile-avatar"><i class="ti ti-user"></i></div>
    <h3>This could be you</h3>
    <p>Undergraduate research opportunity open</p>
    <span class="pp-tile-link">See opportunities →</span>
  </a>
  <a class="pp-tile" href="/join/undergraduate-students/">
    <div class="pp-tile-avatar"><i class="ti ti-user"></i></div>
    <h3>This could be you</h3>
    <p>Undergraduate research opportunity open</p>
    <span class="pp-tile-link">See opportunities →</span>
  </a>
</div>

<!--
  ── Adding a real member ──
  When a real member joins, replace one of the placeholder tiles above with:

  <a class="pp-tile pp-tile-open" href="/people/<slug>/">
    <div class="pp-tile-avatar"><img src="/assets/img/people/<slug>.jpg" alt="<Name>" style="width:100%; height:100%; object-fit:cover; border-radius:50%;"></div>
    <h3><Name></h3>
    <p><Role / research focus></p>
    <span class="pp-tile-link">View profile →</span>
  </a>

  ...and create a profile page at _pages/people-<slug>.md (layout: ampere-page, permalink: /people/<slug>/, nav: false)
  containing their bio, Google Scholar, email, LinkedIn, and personal website links — following the format
  used for the Group Leader above.
-->
