---
layout: ampere-page
permalink: /research/
title: Research
description:
nav: true
nav_order: 2
visit_us: true
---

<style>
  .rp-vision {
    margin: 0 0 3.5rem;
    font-size: 18px;
    line-height: 1.65;
    color: var(--color-text-secondary);
    max-width: none;
  }
  .rp-vision p { margin-bottom: 1rem; }

  /* ── Shared section header ── */
  .rp-label {
    font-size: 15px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
    color: var(--amp-gold); margin-bottom: 0.6rem;
  }
  .rp-heading {
    font-family: var(--font-heading); font-size: 28px; font-weight: 800; letter-spacing: -0.01em;
    color: var(--color-text-primary); margin-bottom: 0.85rem; line-height: 1.2;
  }
  .rp-subhead {
    font-size: 18px; line-height: 1.65; color: var(--color-text-secondary);
    max-width: none; margin-bottom: 2.5rem;
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
    border-radius: 12px;
    padding: 1.5rem 1.35rem;
    display: flex; flex-direction: column;
  }
  .rp-theme-icon {
    width: 96px; height: 96px; border-radius: 12px;
    background: #0C2340;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.1rem;
  }
  .rp-theme-icon i { font-size: 52px; color: var(--amp-gold); }
  .rp-theme-card h3 {
    font-size: 19px; font-weight: 700; line-height: 1.3;
    color: var(--color-text-primary); margin-bottom: 0.6rem;
  }
  .rp-theme-card p {
    font-size: 17px; line-height: 1.65; color: var(--color-text-secondary);
    margin-bottom: 1.1rem; flex-grow: 1;
  }
  /* ── How We Work / process ── */
  .rp-process-box {
    background: #0C2340;
    border-radius: 12px;
    padding: 2.75rem 2.5rem;
  }
  .rp-process-box .rp-label { color: var(--amp-gold); }
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
    width: 76px; height: 76px; border-radius: 12px;
    background: rgba(255,255,255,0.07);
    border: 0.5px solid rgba(255,255,255,0.18);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.1rem;
  }
  .rp-process-icon i { font-size: 40px; color: var(--amp-gold); }
  .rp-process-step h4 {
    font-size: 19px; font-weight: 700; color: #fff; margin-bottom: 0.5rem;
  }
  .rp-process-step p {
    font-size: 15.5px; line-height: 1.6; color: rgba(255,255,255,0.65); margin: 0;
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
    border-radius: 12px;
    padding: 1.5rem 1.1rem;
    text-align: center;
  }
  .rp-app-card i {
    font-size: 50px; color: #0C2340; margin-bottom: 0.85rem; display: inline-block;
  }
  .rp-app-card h3 {
    font-size: 19px; font-weight: 700; color: var(--color-text-primary);
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
</div>

<style>
  /* ── On-this-page links ── */
  .rp-jump {
    display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem;
    margin: -2rem 0 2.5rem;
  }
  .rp-jump-label {
    font-size: 14px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
    color: var(--color-text-tertiary); margin-right: 0.25rem;
  }
  .rp-jump a {
    font-size: 15px; font-weight: 600; color: var(--amp-link);
    border: 1px solid var(--color-border-secondary); border-radius: 999px;
    padding: 0.3rem 0.9rem; text-decoration: none;
  }
  .rp-jump a:hover { border-color: var(--nd-gold); color: var(--amp-gold); text-decoration: none; }
  .rp-block[id] { scroll-margin-top: calc(var(--amp-nav-height) + 3px); }
  @media (max-width: 767.98px) {
    .rp-block[id] { scroll-margin-top: calc(var(--amp-nav-height) + 53px); }
  }
</style>

<nav class="rp-jump" aria-label="On this page">
  <span class="rp-jump-label">On this page</span>
  <a href="#themes">Themes</a>
  <a href="#facilities">Facilities</a>
  <a href="#how-we-work">How We Work</a>
  <a href="#applications">Applications</a>
  <a href="#sponsors">Sponsors</a>
</nav>

<!-- ── Research photo slideshow ── -->
<div class="rp-block" style="border-top: none; padding-top: 0;">
  <div class="rp-slideshow" id="rp-slideshow">
    <img class="rp-slide active" src="/assets/img/research-slideshow/1.jpg" alt="Block diagram of an electric drive: controller, power electronic drive, and electric machine linking electrical and mechanical ports">
    <img class="rp-slide" src="/assets/img/research-slideshow/2.jpg" alt="Cutaway of an integrated axial-flux motor and radial piston pump sharing one hydraulic flow path">
    <img class="rp-slide" src="/assets/img/research-slideshow/3.jpg" alt="Additively manufactured stator core with red insulation coating">
    <img class="rp-slide" src="/assets/img/research-slideshow/4.jpg" alt="Wound axial-flux stator with copper coils around a central bearing hub">
    <img class="rp-slide" src="/assets/img/research-slideshow/5.jpg" alt="Wound stator submerged in red impregnation varnish">
    <img class="rp-slide" src="/assets/img/research-slideshow/6.jpg" alt="Hilbert-curve laminated stator design and the printed metal stator">
    <img class="rp-slide" src="/assets/img/research-slideshow/7.jpg" alt="Sparks from laser powder bed fusion during metal 3D printing">
    <img class="rp-slide" src="/assets/img/research-slideshow/8.png" alt="Simulated magnetic flux in a conventional stator compared with a Hilbert stator">
    <img class="rp-slide" src="/assets/img/research-slideshow/9.png" alt="Efficiency map comparing an additively manufactured stator with a baseline stator over speed and torque">
    <img class="rp-slide" src="/assets/img/research-slideshow/11.png" alt="Control block diagram for a seven-phase machine with separate current regulators for each harmonic sequence">
    <img class="rp-slide" src="/assets/img/research-slideshow/12.jpg" alt="Hand-wound concentrated-coil stator held in the lab">
    <img class="rp-slide" src="/assets/img/research-slideshow/13.jpg" alt="Axial-flux machine prototype mounted on a test stand with torque sensor">
    <img class="rp-slide" src="/assets/img/research-slideshow/14.jpg" alt="Toroidal inductor wound with paired wires and a thermocouple">
    <img class="rp-slide" src="/assets/img/research-slideshow/15.jpg" alt="LCC-CCL and LCC-CL wireless charging circuits with Pareto fronts from design optimization">
    <img class="rp-slide" src="/assets/img/research-slideshow/16.jpg" alt="Multi-phase inverter test setup with gate driver boards and phase cables">

    <div class="rp-slideshow-dots">
      <span class="rp-dot active"></span><span class="rp-dot"></span><span class="rp-dot"></span>
      <span class="rp-dot"></span><span class="rp-dot"></span><span class="rp-dot"></span>
      <span class="rp-dot"></span><span class="rp-dot"></span><span class="rp-dot"></span>
      <span class="rp-dot"></span><span class="rp-dot"></span><span class="rp-dot"></span>
      <span class="rp-dot"></span><span class="rp-dot"></span><span class="rp-dot"></span>
    </div>

  </div>
</div>

<!-- ── Research Themes ── -->
<div class="rp-block" id="themes">
  <div class="rp-label">Research</div>
  <div class="rp-heading">Research Themes</div>
  <div class="rp-theme-grid">

   <div class="rp-theme-card">
      <div class="rp-theme-icon"><i class="ti ti-device-desktop-analytics"></i></div>
      <h3>Integrated Electro-Mechanical Systems</h3>
      <p>Co-design and optimization of magnetics, power electronics, thermal systems, and mechanical loads.</p>
    </div>

    <div class="rp-theme-card">
      <div class="rp-theme-icon"><i class="ti ti-bulb"></i></div>
      <h3>Invent New Topologies</h3>
      <p>Developing unconventional electric machine and power converter topologies for higher performance and lower critical material dependence.</p>
    </div>

    <div class="rp-theme-card">
      <div class="rp-theme-icon"><i class="ti ti-brain"></i></div>
      <h3>AI-Accelerated Design</h3>
      <p>Using physics-informed machine learning and optimization to accelerate discovery and improve system performance.</p>
    </div>

    <div class="rp-theme-card">
      <div class="rp-theme-icon"><i class="ti ti-tool"></i></div>
      <h3>Build the Future</h3>
      <p>Leveraging advanced manufacturing and novel materials to realize next-generation electro-mechanical systems.</p>
    </div>

    <div class="rp-theme-card">
      <div class="rp-theme-icon"><i class="ti ti-target-arrow"></i></div>
      <h3>Intelligent Operation</h3>
      <p>Creating systems that sense, adapt, diagnose, and optimize themselves in real time.</p>
    </div>

  </div>
</div>

<style>
  /* ── Facilities ── */
  .rp-fac-stats {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.1rem;
  }
  .rp-fac-stat {
    background: #0C2340; border-radius: 12px; padding: 1.35rem 1.5rem;
  }
  .rp-fac-stat strong {
    display: block; font-family: var(--font-heading); font-size: 34px; font-weight: 800;
    line-height: 1.1; color: var(--amp-gold); letter-spacing: -0.01em;
  }
  @media (max-width: 420px) { .rp-fac-stat strong { font-size: 28px; } }
  .rp-fac-stat span { display: block; font-size: 16px; line-height: 1.45; color: rgba(255,255,255,0.78); margin-top: 0.35rem; }
  .rp-fac-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
  @media (max-width: 900px) {
    .rp-fac-stats, .rp-fac-grid { grid-template-columns: 1fr; }
  }
  .rp-fac-card {
    background: var(--color-background-primary);
    border: 0.5px solid var(--color-border-tertiary);
    border-radius: 12px; padding: 1.5rem 1.4rem;
  }
  .rp-fac-card-head { display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1rem; }
  .rp-fac-icon {
    width: 52px; height: 52px; flex-shrink: 0; border-radius: 10px; background: #0C2340;
    display: flex; align-items: center; justify-content: center;
  }
  .rp-fac-icon i { font-size: 30px; color: var(--amp-gold); }
  .rp-fac-card h3 { font-size: 19px; font-weight: 700; line-height: 1.3; color: var(--color-text-primary); margin: 0; }
  .rp-fac-card ul { list-style: none; padding: 0; margin: 0; }
  .rp-fac-card li {
    position: relative; padding-left: 1.1rem; margin-bottom: 0.65rem;
    font-size: 16.5px; line-height: 1.55; color: var(--color-text-secondary);
  }
  .rp-fac-card li:last-child { margin-bottom: 0; }
  .rp-fac-card li::before {
    content: ""; position: absolute; left: 0; top: 0.62em;
    width: 6px; height: 6px; border-radius: 50%; background: var(--nd-gold);
  }
  .rp-fac-card a { color: var(--amp-link); }
  html[data-theme='dark'] .rp-fac-stat { background: #14305a; }
</style>

<!-- ── Facilities ── -->
<div class="rp-block" id="facilities">
  <div class="rp-label">Facilities</div>
  <div class="rp-heading">Built to Build and Test</div>
  <p class="rp-subhead">Our lab and campus partners support every step, from simulation to megawatt-scale testing.</p>

  <div class="rp-fac-stats">
    <div class="rp-fac-stat"><strong>~1,000 sq ft</strong><span>of dedicated lab space</span></div>
    <div class="rp-fac-stat"><strong>6+ workbenches</strong><span>each with single- and three-phase power</span></div>
    <div class="rp-fac-stat"><strong>Up to 5 MW</strong><span>electric machine and drive testing</span></div>
  </div>

  <div class="rp-fac-grid">
    <div class="rp-fac-card">
      <div class="rp-fac-card-head">
        <div class="rp-fac-icon"><i class="ti ti-activity"></i></div>
        <h3>Testing &amp; Measurement</h3>
      </div>
      <ul>
        <li>Multi-phase power measurement</li>
        <li>Multi-axis, non-contact dynamometer for linear and rotary machines</li>
        <li>Magnetic materials characterization</li>
        <li>High-power machine and drive testing up to 5 MW at <a href="https://powerpropulsion.nd.edu/facilities-and-capabilities/ignition-park-test-facility/test-cell-1/" target="_blank" rel="noopener">Notre Dame Power and Propulsion</a></li>
      </ul>
    </div>
    <div class="rp-fac-card">
      <div class="rp-fac-card-head">
        <div class="rp-fac-icon"><i class="ti ti-tool"></i></div>
        <h3>Prototyping</h3>
      </div>
      <ul>
        <li>Machine shop, 3D printers, and laser cutters at the <a href="https://engineering.nd.edu/departments-programs/engineering-innovation-hub-at-notre-dame/" target="_blank" rel="noopener">Engineering Innovation Hub</a></li>
        <li>In-lab soldering and electronics assembly</li>
        <li>Partnerships with regional manufacturers</li>
      </ul>
    </div>
    <div class="rp-fac-card">
      <div class="rp-fac-card-head">
        <div class="rp-fac-icon"><i class="ti ti-cpu"></i></div>
        <h3>Computing</h3>
      </div>
      <ul>
        <li>Dedicated servers with multi-core processors and GPUs</li>
        <li>Engineering software for finite element analysis (FEA) and hardware development</li>
      </ul>
    </div>
  </div>
</div>

<style>
  .rp-slideshow {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9; /* fallback until JS measures the How We Work box */
    border-radius: 12px;
    overflow: hidden;
    background: #0C2340;
  }
  .rp-slide {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  .rp-slide.active { opacity: 1; }
  .rp-slideshow-dots {
    position: absolute;
    bottom: 16px;
    left: 0; right: 0;
    display: flex;
    justify-content: center;
    gap: 8px;
    z-index: 2;
  }
  .rp-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: rgba(255,255,255,0.4);
    transition: background 0.25s ease, transform 0.25s ease;
  }
  .rp-dot.active {
    background: #C99700;
    transform: scale(1.3);
  }
</style>

<script>
  (function () {
    var slides = document.querySelectorAll('#rp-slideshow .rp-slide');
    var dots = document.querySelectorAll('#rp-slideshow .rp-dot');
    var current = 0;
    if (!slides.length) return;

    // Match the slideshow's height to the "How We Work" navy box height
    var slideshow = document.getElementById('rp-slideshow');
    var processBox = document.querySelector('.rp-process-box');
    function syncHeight() {
      if (!slideshow || !processBox) return;
      var h = processBox.offsetHeight;
      if (h > 0) {
        slideshow.style.aspectRatio = 'auto';
        slideshow.style.height = h + 'px';
      }
    }
    syncHeight();
    window.addEventListener('resize', syncHeight);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(syncHeight);
    }
    window.addEventListener('load', syncHeight);

    setInterval(function () {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }, 4000);
  })();
</script>

<!-- ── How We Work / process ── -->
<div class="rp-block" id="how-we-work">
  <div class="rp-process-box">
    <div class="rp-label">How We Work</div>
    <div class="rp-heading">From Concept to Hardware</div>
    <p class="rp-subhead">We develop technology from first principles through to tested, validated prototypes.</p>

    <div class="rp-process-row">
      <div class="rp-process-step">
        <div class="rp-process-icon"><i class="ti ti-stack-2"></i></div>
        <h4>Design &amp; Optimize</h4>
        <p>FEA, analytical models, AI-assisted topology and parameter optimization</p>
      </div>
      <div class="rp-process-step">
        <div class="rp-process-icon"><i class="ti ti-tool"></i></div>
        <h4>Build</h4>
        <p>Additive manufacturing, winding, assembly, novel materials fabrication</p>
      </div>
      <div class="rp-process-step">
        <div class="rp-process-icon"><i class="ti ti-activity"></i></div>
        <h4>Test &amp; Validate</h4>
        <p>Dynamometer testing, thermal characterization, HIL, high-speed data acquisition</p>
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
<div class="rp-block" id="applications">
  <div class="rp-label">Applications</div>
  <div class="rp-heading">Across the Power Spectrum</div>
  <p class="rp-subhead">Our technologies touch applications from milliwatts to megawatts — anywhere electro-mechanical performance matters.</p>

  <div class="rp-app-grid">
    <div class="rp-app-card"><i class="ti ti-heartbeat"></i><h3>Artificial Heart</h3><p>Medical</p></div>
    <div class="rp-app-card"><i class="ti ti-cpu"></i><h3>Chip Fabrication</h3><p>Semiconductor</p></div>
    <div class="rp-app-card"><i class="ti ti-drone"></i><h3>UAVs &amp; Drones</h3><p>Air mobility</p></div>
    <div class="rp-app-card"><i class="ti ti-robot"></i><h3>Robotics</h3><p>Automation</p></div>
    <div class="rp-app-card"><i class="ti ti-car"></i><h3>Electric Vehicles</h3><p>Transport</p></div>
    <div class="rp-app-card"><i class="ti ti-air-conditioning"></i><h3>HVAC Systems</h3><p>Buildings</p></div>
    <div class="rp-app-card"><i class="ti ti-tractor"></i><h3>Off-Highway</h3><p>Industrial</p></div>
    <div class="rp-app-card"><i class="ti ti-anchor"></i><h3>Marine Systems</h3><p>Maritime</p></div>
    <div class="rp-app-card"><i class="ti ti-wind"></i><h3>Wind Energy</h3><p>Renewables</p></div>
    <div class="rp-app-card"><i class="ti ti-rocket"></i><h3>Aerospace</h3><p>Aviation &amp; Space</p></div>
  </div>
</div>

<!-- Sponsors (logos shared with the homepage: _includes/sponsors.liquid) -->
<div class="rp-block" id="sponsors">
  <div class="rp-label">Sponsors &amp; Partners</div>
  <div class="rp-heading">Thanks to</div>
  {% include sponsors.liquid %}
</div>
