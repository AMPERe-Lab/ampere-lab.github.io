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
  .rp-theme-icon {
    width: 96px; height: 96px; border-radius: 16px;
    background: #0C2340;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.1rem;
  }
  .rp-theme-icon i { font-size: 52px; color: #C99700; }
  .rp-theme-card h3 {
    font-size: 21px; font-weight: 600; line-height: 1.3;
    color: var(--color-text-primary); margin-bottom: 0.6rem;
  }
  .rp-theme-card p {
    font-size: 17px; line-height: 1.65; color: var(--color-text-secondary);
    margin-bottom: 1.1rem; flex-grow: 1;
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
    width: 76px; height: 76px; border-radius: 14px;
    background: rgba(255,255,255,0.07);
    border: 0.5px solid rgba(255,255,255,0.18);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.1rem;
  }
  .rp-process-icon i { font-size: 40px; color: #C99700; }
  .rp-process-step h4 {
    font-size: 19px; font-weight: 600; color: #fff; margin-bottom: 0.5rem;
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
    border-radius: 10px;
    padding: 1.5rem 1.1rem;
    text-align: center;
  }
  .rp-app-card i {
    font-size: 50px; color: #0C2340; margin-bottom: 0.85rem; display: inline-block;
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
</div>

<!-- ── Research photo slideshow ── -->
<div class="rp-block" style="border-top: none; padding-top: 0;">
  <div class="rp-slideshow" id="rp-slideshow">
    <img class="rp-slide active" src="/assets/img/research-slideshow/1.jpg" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/2.jpg" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/3.jpg" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/4.jpg" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/5.jpg" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/6.jpg" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/7.jpg" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/8.png" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/9.png" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/11.png" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/12.jpg" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/13.jpg" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/14.jpg" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/15.jpg" alt="">
    <img class="rp-slide" src="/assets/img/research-slideshow/16.jpg" alt="">

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
<div class="rp-block">
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
  .rp-slideshow {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9; /* fallback until JS measures the How We Work box */
    border-radius: 14px;
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
<div class="rp-block">
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
<div class="rp-block">
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
