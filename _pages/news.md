---
layout: ampere-page
title: News
permalink: /news/
description: Announcements, awards, and updates from the AMPERE Lab.
nav: false
nav_order: 5
---

<style>
  .ap-wrap .news { max-width: 900px; }
  .ap-wrap .news table { margin: 0; }
  .ap-wrap .news tr { border-bottom: 1px solid rgba(0, 0, 0, 0.08); }
  .ap-wrap .news tr:last-child { border-bottom: none; }
  .ap-wrap .news th,
  .ap-wrap .news td {
    font-size: 18px;
    line-height: 1.6;
    padding: 0.9rem 0;
    color: var(--color-text-secondary);
    vertical-align: top;
  }
  .ap-wrap .news th {
    width: 150px !important;
    padding-right: 1.5rem;
    font-weight: 600;
    color: var(--color-text-tertiary);
    white-space: nowrap;
  }
  @media (max-width: 560px) {
    .ap-wrap .news tr { display: block; padding: 0.75rem 0; }
    .ap-wrap .news th,
    .ap-wrap .news td { display: block; width: auto !important; padding: 0; }
  }
</style>

{% include news.liquid %}
