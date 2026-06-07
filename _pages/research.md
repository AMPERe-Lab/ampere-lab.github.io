---
layout: ampere-page
permalink: /research/
title: Research
description:
nav: true
nav_order: 2
---

<style>
  .rp-vision {
    margin: 0 0 3.5rem;
    font-size: 20px;
    line-height: 1.8;
    color: var(--color-text-secondary);
    max-width: 880px;
  }
  .rp-vision p { margin-bottom: 1rem; }

  /* ── Shared section header ── */
  .rp-label {
    font-size: 17px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
    color: #C99700; margin-bottom: 0.6rem;
  }
  .rp-heading {
    font-family: 'DM Serif Display', serif; font-size: 35px; font-weight: 400;
    color: var(--color-text-primary); margin-bottom: 0.85rem; line-height: 1.2;
  }
  .rp-subhead {
    font-size: 20px; line-height: 1.7; color: var(--color-text-secondary);
    max-width: 760px; margin-bottom: 2.5rem;
  }
  .rp-block { padding: 3.5rem 0; border-top: 1px solid var(--color-border-tertiary); }

  /* ── Five Research Themes ── */
  .rp-theme-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.1rem;
  }
  @media (max-width: 1100px) { .rp-theme-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px)  { .rp-theme-grid { grid-template-columns: 1fr; } }

  .rp-theme-card {
    background: var(--color-background-primary);
    border: 0.5px solid var(--color-border-tertiary);
    border-radius: 10px;
    padding: 1.5rem 1.35rem;
    display: flex; flex-direction: column;
  }
  .rp-theme-num {
    font-size: 13px; font-weight: 700; letter-spacing: 1.5px;
    color: #C99700; margin-bottom: 0.9rem;
  }
  .rp-theme-icon {
    width: 48px; height: 48px; border-radius: 10px;
    background: #0C2340;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.1rem;
  }
  .rp-theme-icon i { font-size: 26px; color: #C99700; }
  .rp-theme-card h3 {
    font-size: 21px; font-weight: 600; line-height: 1.3;
    color: var(--color-text-primary); margin-bottom: 0.6rem;
  }
  .rp-theme-card p {
    font-size: 17px; line-height: 1.65; color: var(--color-text-secondary);
    margin-bottom: 1.1rem; flex-grow: 1;
  }
  .rp-theme-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .rp-theme-tag {
    font-size: 13px; padding: 4px 11px;
    background: var(--color-background-secondary);
    border: 0.5px solid var(--color-border-secondary);
    border-radius: 14px;
    color: var(--color-text-secondary);
  }

  /* ── How We Work / process ── */
  .rp-process-box {
    background: #0C2340;
    border-radius: 14px;
    padding: 2.75rem 2.5rem;
  }
  .rp-process-box .rp-label { color: #C99700; }
  .rp-process-box .rp-heading { color: #fff; }
  .rp-process-box .rp-subhead { color: rgba(255,255,255,0.68); }

  .rp-process-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    align-items: start;
    position: relative;
  }
  @media (max-width: 900px) { .rp-process-row { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 540px) { .rp-process-row { grid-template-columns: 1fr; } }

  .rp-process-step { position: relative; }
  .rp-process-icon {
    width: 56px; height: 56px; border-radius: 12px;
    background: rgba(255,255,255,0.07);
    border: 0.5px solid rgba(255,255,255,0.18);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.1rem;
  }
  .rp-process-icon i { font-size: 28px; color: #C99700; }
  .rp-process-step h4 {
    font-size: 19px; font-weight: 600; color: #fff; margin-bottom: 0.5rem;
  }
  .rp-process-step p {
    font-size: 15.5px; line-height: 1.6; color: rgba(255,255,255,0.65); margin: 0;
  }
  .rp-process-arrow {
    display: none;
    position: absolute; top: 26px; right: -1.05rem;
    font-size: 20px; color: rgba(255,255,255,0.35);
  }
  @media (min-width: 901px) {
    .rp-process-step:not(:last-child) .rp-process-arrow { display: block; }
  }

  /* ── Applications spectrum ── */
  .rp-app-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }
  @media (max-width: 900px) { .rp-app-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 560px) { .rp-app-grid { grid-template-columns: repeat(2, 1fr); } }

  .rp-app-card {
    background: var(--color-background-primary);
    border: 0.5px solid var(--color-border-tertiary);
    border-radius: 10px;
    padding: 1.5rem 1.1rem;
    text-align: center;
  }
  .rp-app-card i {
    font-size: 34px; color: #0C2340; margin-bottom: 0.85rem; display: inline-block;
  }
  .rp-app-card h3 {
    font-size: 17px; font-weight: 600; color: var(--color-text-primary);
    margin-bottom: 0.2rem; line-height: 1.3;
  }
  .rp-app-card p {
    font-size: 12.5px; letter-spacing: 1.5px; text-transform: uppercase;
    color: #185FA5; margin: 0; font-weight: 600;
  }
</style>

<div class="rp-vision">
  <p>
    The electrification of transportation, aerospace, and industry demands electric machines and energy conversion systems that are more powerful, more efficient, and more sustainable than anything that exists today. Meeting this challenge requires rethinking the machine, the drive, and the control — together, from first principles.
  </p>
  <p>
    AMPERE Lab invents next-generation electro-mechanical systems through machine innovation, AI-assisted design, advanced manufacturing, and integrated system optimization — pursuing systems that are more efficient, more affordable, more intelligent, and less dependent on critical materials.
  </p>
</div>

<!-- ── Five Research Themes ── -->
<div class="rp-block">
  <div class="rp-label">Research</div>
  <div class="rp-heading">Five Research Themes</div>
  <p class="rp-subhead">From fundamental machine theory to intelligent operational systems, our work spans the full electro-mechanical technology stack.</p>

  <div class="rp-theme-grid">

    <div class="rp-theme-card">
      <span class="rp-theme-num">01</span>
      <div class="rp-theme-icon"><i class="ti ti-bulb"></i></div>
      <h3>Invent New Machines</h3>
      <p>Developing unconventional electric machine topologies for higher performance and lower critical material dependence.</p>
      <div class="rp-theme-tags">
        <span class="rp-theme-tag">Multi-harmonic</span>
        <span class="rp-theme-tag">Axial flux</span>
        <span class="rp-theme-tag">Transverse flux</span>
        <span class="rp-theme-tag">Magnetically geared</span>
        <span class="rp-theme-tag">Rare-earth-lean</span>
      </div>
    </div>

    <div class="rp-theme-card">
      <span class="rp-theme-num">02</span>
      <div class="rp-theme-icon"><i class="ti ti-brain"></i></div>
      <h3>AI-Accelerated Design</h3>
      <p>Using physics-informed machine learning and optimization to accelerate discovery and improve system performance.</p>
      <div class="rp-theme-tags">
        <span class="rp-theme-tag">Topology opt.</span>
        <span class="rp-theme-tag">Surrogate models</span>
        <span class="rp-theme-tag">Generative design</span>
        <span class="rp-theme-tag">Multi-objective</span>
        <span class="rp-theme-tag">Physics-informed AI</span>
      </div>
    </div>

    <div class="rp-theme-card">
      <span class="rp-theme-num">03</span>
      <div class="rp-theme-icon"><i class="ti ti-tool"></i></div>
      <h3>Build the Impossible</h3>
      <p>Leveraging advanced manufacturing and novel materials to realize next-generation electro-mechanical systems.</p>
      <div class="rp-theme-tags">
        <span class="rp-theme-tag">Additive manufacturing</span>
        <span class="rp-theme-tag">Novel magnetic materials</span>
        <span class="rp-theme-tag">Embedded cooling</span>
        <span class="rp-theme-tag">Advanced fabrication</span>
      </div>
    </div>

    <div class="rp-theme-card">
      <span class="rp-theme-num">04</span>
      <div class="rp-theme-icon"><i class="ti ti-device-desktop-analytics"></i></div>
      <h3>Integrated Electro-Mechanical Systems</h3>
      <p>Co-designing machines, power electronics, thermal systems, and mechanical loads as a unified whole.</p>
      <div class="rp-theme-tags">
        <span class="rp-theme-tag">Integrated drives</span>
        <span class="rp-theme-tag">Electro-hydraulic</span>
        <span class="rp-theme-tag">Aerospace electrification</span>
        <span class="rp-theme-tag">Vehicle electrification</span>
        <span class="rp-theme-tag">Energy conversion</span>
      </div>
    </div>

    <div class="rp-theme-card">
      <span class="rp-theme-num">05</span>
      <div class="rp-theme-icon"><i class="ti ti-target-arrow"></i></div>
      <h3>Intelligent Operation</h3>
      <p>Creating systems that sense, adapt, diagnose, and optimize themselves autonomously in real time.</p>
      <div class="rp-theme-tags">
        <span class="rp-theme-tag">Diagnostics</span>
        <span class="rp-theme-tag">Digital twins</span>
        <span class="rp-theme-tag">Control systems</span>
        <span class="rp-theme-tag">Health monitoring</span>
        <span class="rp-theme-tag">Autonomous operation</span>
      </div>
    </div>

  </div>
</div>

<!-- ── How We Work / process ── -->
<div class="rp-block">
  <div class="rp-process-box">
    <div class="rp-label">How We Work</div>
    <div class="rp-heading">From Concept to Hardware</div>
    <p class="rp-subhead">We develop technology from first principles through to tested, validated prototypes — the full stack.</p>

    <div class="rp-process-row">
      <div class="rp-process-step">
        <div class="rp-process-icon"><i class="ti ti-stack-2"></i></div>
        <h4>Design &amp; Optimize</h4>
        <p>FEA, analytical models, AI-assisted topology and parameter optimization</p>
        <span class="rp-process-arrow">→</span>
      </div>
      <div class="rp-process-step">
        <div class="rp-process-icon"><i class="ti ti-tool"></i></div>
        <h4>Build</h4>
        <p>Additive manufacturing, winding, assembly, novel materials fabrication</p>
        <span class="rp-process-arrow">→</span>
      </div>
      <div class="rp-process-step">
        <div class="rp-process-icon"><i class="ti ti-activity"></i></div>
        <h4>Test &amp; Validate</h4>
        <p>Dynamometer testing, thermal characterization, HIL, high-speed data acquisition</p>
        <span class="rp-process-arrow">→</span>
      </div>
      <div class="rp-process-step">
        <div class="rp-process-icon"><i class="ti ti-circle-check"></i></div>
        <h4>Deploy</h4>
        <p>Technology transfer, spin-out partnerships, publications, open datasets</p>
      </div>
    </div>
  </div>
</div>

<!-- ── Applications spectrum ── -->
<div class="rp-block">
  <div class="rp-label">Applications</div>
  <div class="rp-heading">Across the Power Spectrum</div>
  <p class="rp-subhead">Our technologies touch applications from milliwatts to megawatts — anywhere electro-mechanical performance matters.</p>

  <div class="rp-app-grid">
    <div class="rp-app-card"><i class="ti ti-heartbeat"></i><h3>Artificial Heart</h3><p>Medical</p></div>
    <div class="rp-app-card"><i class="ti ti-cpu"></i><h3>Chip Fabrication</h3><p>Semiconductor</p></div>
    <div class="rp-app-card"><i class="ti ti-drone"></i><h3>UAVs &amp; Drones</h3><p>Aerospace</p></div>
    <div class="rp-app-card"><i class="ti ti-robot"></i><h3>Robotics</h3><p>Automation</p></div>
    <div class="rp-app-card"><i class="ti ti-car"></i><h3>Electric Vehicles</h3><p>Transport</p></div>
    <div class="rp-app-card"><i class="ti ti-air-conditioning"></i><h3>HVAC Systems</h3><p>Buildings</p></div>
    <div class="rp-app-card"><i class="ti ti-tractor"></i><h3>Off-Highway</h3><p>Industrial</p></div>
    <div class="rp-app-card"><i class="ti ti-anchor"></i><h3>Marine Systems</h3><p>Maritime</p></div>
    <div class="rp-app-card"><i class="ti ti-wind"></i><h3>Wind Energy</h3><p>Renewables</p></div>
    <div class="rp-app-card"><i class="ti ti-rocket"></i><h3>Aerospace</h3><p>Aviation</p></div>
  </div>
</div>
