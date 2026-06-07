---
layout: ampere-page
permalink: /join/
title: Join Us
description:
nav: true
nav_order: 6
---

<style>
  .ju-tile-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.1rem;
    margin: 0.5rem 0 3rem;
  }
  @media (max-width: 900px) { .ju-tile-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .ju-tile-grid { grid-template-columns: 1fr; } }

  .ju-tile {
    display: block;
    background: var(--color-background-primary);
    border: 0.5px solid var(--color-border-tertiary);
    border-radius: 10px;
    padding: 1.5rem 1.35rem;
    text-decoration: none;
    transition: box-shadow 0.15s ease, transform 0.15s ease, border-color 0.15s ease;
  }
  .ju-tile:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    transform: translateY(-2px);
    border-color: #C99700;
  }
  .ju-tile-icon {
    width: 92px; height: 92px; border-radius: 20px;
    background: #0C2340;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1rem;
  }
  .ju-tile-icon i { font-size: 48px; color: #C99700; }
  .ju-tile h3 {
    font-size: 19px; font-weight: 600; color: var(--color-text-primary);
    margin: 0 0 0.35rem;
  }
  .ju-tile p {
    font-size: 15px; line-height: 1.55; color: var(--color-text-secondary); margin: 0;
  }
  .ju-tile .ju-tile-link {
    display: inline-block; margin-top: 0.75rem; font-size: 14px; font-weight: 600; color: #185FA5;
  }
</style>

We are always looking to recruit motivated and passionate members to join our team. 
Prospective students, postdoctoral researchers, and visiting scholars please review the instructions below and fill this [form](www.google.com).

<div class="ju-tile-grid">

  <a class="ju-tile" href="/join/graduate-students/">
    <div class="ju-tile-icon"><i class="ti ti-school"></i></div>
    <h3>Graduate Students</h3>
    <p>MS / PhD openings starting Fall 2026</p>
    <span class="ju-tile-link">Learn more →</span>
  </a>

  <a class="ju-tile" href="/join/undergraduate-students/">
    <div class="ju-tile-icon"><i class="ti ti-backpack"></i></div>
    <h3>Undergrad Students</h3>
    <p>Research opportunities for Notre Dame and visiting undergraduates.</p>
    <span class="ju-tile-link">Learn more →</span>
  </a>

  <a class="ju-tile" href="/join/postdocs/">
    <div class="ju-tile-icon"><i class="ti ti-flask"></i></div>
    <h3>Post-doc Researchers</h3>
    <p>Postdoctoral positions and fellowship hosting opportunities.</p>
    <span class="ju-tile-link">Learn more →</span>
  </a>

  <a class="ju-tile" href="/join/visiting-scholars/">
    <div class="ju-tile-icon"><i class="ti ti-world"></i></div>
    <h3>Visiting Scholars</h3>
    <p>Hosting visiting researchers and graduate students for short- and long-term collaboration.</p>
    <span class="ju-tile-link">Learn more →</span>
  </a>

</div>
