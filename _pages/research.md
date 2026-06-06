---
layout: ampere-page
permalink: /research/
title: Research
nav: true
nav_order: 2
---

<style>
  .rp-vision {
    margin: 0 0 3rem;
    font-size: 20px;
    line-height: 1.8;
    color: var(--color-text-secondary);
  }
  .rp-vision p { margin-bottom: 1rem; }

  .rp-thrust {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    padding: 3rem 0;
    border-top: 1px solid var(--color-border-tertiary);
  }
  .rp-thrust:last-child { border-bottom: 1px solid var(--color-border-tertiary); }
  .rp-thrust.reverse .rp-graphic { order: 2; }
  .rp-thrust.reverse .rp-content { order: 1; }

  @media (max-width: 768px) {
    .rp-thrust { grid-template-columns: 1fr; gap: 1.5rem; }
    .rp-thrust.reverse .rp-graphic { order: 1; }
    .rp-thrust.reverse .rp-content { order: 2; }
  }

  .rp-graphic img {
    width: 100%;
    border-radius: 10px;
    border: 0.5px solid var(--color-border-tertiary);
    box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  }

  .rp-number {
    display: inline-block;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #C99700;
    margin-bottom: 0.5rem;
  }
  .rp-title {
    font-family: 'DM Serif Display', serif;
    font-size: 28px;
    font-weight: 400;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
    line-height: 1.25;
  }
  .rp-desc {
    font-size: 20px;
    line-height: 1.75;
    color: var(--color-text-secondary);
    margin-bottom: 1.25rem;
  }
  .rp-highlights {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .rp-highlights li {
    font-size: 19px;
    line-height: 1.6;
    color: var(--color-text-secondary);
    padding-left: 1.1rem;
    position: relative;
  }
  .rp-highlights li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #185FA5;
    font-weight: 600;
  }
</style>

<div class="rp-vision">
  <p>
    The electrification of transportation, aerospace, and industry demands electric machines and energy conversion systems that are more powerful, more efficient, and more sustainable than anything that exists today. Meeting this challenge requires rethinking the machine, the drive, and the control — together, from first principles.
  </p>
  <p>
    At AMPERE, our research spans <strong>five tightly interconnected thrusts</strong> — from unconventional machine architectures and advanced materials to integrated power electronics, AI-accelerated design, and physics-informed autonomy — all aimed at achieving step-change improvements over the state of the art.
  </p>
</div>

<!-- ── Thrust 1 ─────────────────────────────────────── -->
<div class="rp-thrust">
  <div class="rp-graphic">
    <img src="{{ '/assets/img/research/Thrust1.png' | relative_url }}"
         alt="Advanced electric machine design showing multi-harmonic, axial flux, transverse flux, and magnetically geared topologies">
  </div>
  <div class="rp-content">
    <span class="rp-number">Research Thrust 01</span>
    <div class="rp-title">Advanced Electric Machine Design</div>
    <p class="rp-desc">
      We develop unconventional electromagnetic machine topologies that transcend the limitations of traditional radial-flux machines. By exploiting multiple spatial harmonics for torque, force, and levitation — and by exploring axial-flux, transverse-flux, and magnetically geared architectures — we achieve higher performance with fewer or no rare-earth materials.
    </p>
    <ul class="rp-highlights">
      <li>Multi-harmonic machines with independent torque, force, and levitation control</li>
      <li>Axial-flux machines for high torque density and short axial length</li>
      <li>Magnetically geared machines combining gears and electromagnetics</li>
      <li>Rare-earth-free and reduced-rare-earth machine designs</li>
    </ul>
  </div>
</div>

<!-- ── Thrust 2 ─────────────────────────────────────── -->
<div class="rp-thrust reverse">
  <div class="rp-graphic">
    <img src="{{ '/assets/img/research/Thrust2.png' | relative_url }}"
         alt="Advanced materials, topology optimization, and additive manufacturing for electric machines">
  </div>
  <div class="rp-content">
    <span class="rp-number">Research Thrust 02</span>
    <div class="rp-title">Materials, Manufacturing, and Topology Optimization</div>
    <p class="rp-desc">
      We advance the materials and manufacturing techniques that make next-generation electrified systems possible. From AI-guided topology optimization and soft magnetic composites to additive manufacturing and multi-material structures, we push the boundaries of what can be built — enabling complex 3D flux paths, lightweight structures, and sustainable production.
    </p>
    <ul class="rp-highlights">
      <li>AI-guided topology optimization for machine geometry and material layout</li>
      <li>Advanced magnetic materials: high-silicon steel and soft magnetic composites</li>
      <li>Additive manufactured stators with complex geometries</li>
      <li>Multi-material rotor structures for higher power density</li>
    </ul>
  </div>
</div>

<!-- ── Thrust 3 ─────────────────────────────────────── -->
<div class="rp-thrust">
  <div class="rp-graphic">
    <img src="{{ '/assets/img/research/Thrust3.png' | relative_url }}"
         alt="Power electronics and integrated energy conversion system combining machine, converter, and thermal management">
  </div>
  <div class="rp-content">
    <span class="rp-number">Research Thrust 03</span>
    <div class="rp-title">Power Electronics and Integrated Energy Conversion</div>
    <p class="rp-desc">
      We design electric machines, power electronics, and mechanical loads as a single integrated energy conversion system rather than separate components. This approach — including novel hydraulic integration concepts — eliminates redundant components, increases power density, reduces thermal management requirements, and improves overall system reliability and cost.
    </p>
    <ul class="rp-highlights">
      <li>Machine–converter co-design for maximum system power density</li>
      <li>Hydraulic integration to eliminate redundant mechanical components</li>
      <li>Thermal co-design for compact, high-performance packaging</li>
      <li>Reduced rare-earth material requirements through systems-level optimization</li>
    </ul>
  </div>
</div>

<!-- ── Thrust 4 ─────────────────────────────────────── -->
<div class="rp-thrust reverse">
  <div class="rp-graphic">
    <img src="{{ '/assets/img/research/Thrust4.png' | relative_url }}"
         alt="Multi-physics modeling and AI-accelerated design framework for electric machines">
  </div>
  <div class="rp-content">
    <span class="rp-number">Research Thrust 04</span>
    <div class="rp-title">Multi-Physics Modeling and AI-Accelerated Design</div>
    <p class="rp-desc">
      Designing next-generation machines requires accurate, coupled models spanning electromagnetic, thermal, structural, and fluid domains — and the ability to search vast design spaces rapidly. We combine high-fidelity multi-physics simulation with AI/ML surrogate models, optimization algorithms, and closed-loop design frameworks to reach optimal designs faster and with greater confidence.
    </p>
    <ul class="rp-highlights">
      <li>Coupled FEA across electromagnetic, thermal, structural, and fluid domains</li>
      <li>Surrogate modeling and neural networks for rapid design space exploration</li>
      <li>AI/ML-accelerated optimization (SA/BO) with uncertainty quantification</li>
      <li>Closed-loop design framework from problem definition to validated prototype</li>
    </ul>
  </div>
</div>

<!-- ── Thrust 5 ─────────────────────────────────────── -->
<div class="rp-thrust">
  <div class="rp-graphic">
    <img src="{{ '/assets/img/research/Thrust5.png' | relative_url }}"
         alt="Physics-informed control, diagnostics, and autonomy for electrical machines and energy systems">
  </div>
  <div class="rp-content">
    <span class="rp-number">Research Thrust 05</span>
    <div class="rp-title">Physics-Informed Control, Diagnostics, and Autonomy</div>
    <p class="rp-desc">
      We close the loop between physics, data, and intelligence to create resilient, self-aware electric drive systems. By embedding physical models directly into state estimators, controllers, and diagnostic algorithms — and by fusing multi-modal sensor data — we enable autonomous adaptation, early fault detection, and reliable operation across the full life of the machine.
    </p>
    <ul class="rp-highlights">
      <li>Physics-informed state estimation and observer design</li>
      <li>Diagnostics and prognostics for early fault detection and prediction</li>
      <li>Autonomy and adaptation for self-tuning, reconfiguration, and fault tolerance</li>
      <li>Multi-modal sensing: voltage, current, vibration, temperature, magnetic flux</li>
    </ul>
  </div>
</div>
