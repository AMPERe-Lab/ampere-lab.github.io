---
layout: page
permalink: /research/
title: Research
nav: true
nav_order: 2
---

<style>
  .rp-vision {
    max-width: 780px;
    margin: 0 auto 3rem;
    font-size: 16px;
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
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #C99700;
    margin-bottom: 0.5rem;
  }
  .rp-title {
    font-size: 22px;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
    line-height: 1.25;
  }
  .rp-desc {
    font-size: 15px;
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
    font-size: 14px;
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
    As the world accelerates toward an electrified and sustainable future, the demand for next-generation electro-mechanical systems has never been greater. These systems must be energy-efficient, compact, reliable, and free from critical rare-earth materials.
  </p>
  <p>
    At AMPERE, we address these challenges through a <strong>holistic, multi-physics approach</strong> — working at the intersection of electric machines, power electronics, and physics-based control. Our five research thrusts are tightly interconnected, enabling us to achieve improvements by orders of magnitude over the state of the art.
  </p>
</div>

<!-- ── Thrust 1 ─────────────────────────────────────── -->
<div class="rp-thrust">
  <div class="rp-graphic">
    <img src="{{ '/assets/img/research/thrust1.svg' | relative_url }}"
         alt="Multi-harmonic electric machine showing spatial harmonic field control">
  </div>
  <div class="rp-content">
    <span class="rp-number">Research Thrust 01</span>
    <div class="rp-title">Rare-Earth-Free Multi-Harmonic Electric Machines</div>
    <p class="rp-desc">
      We exploit spatial harmonics as additional degrees of freedom in machine design, enabling high torque density and multifunctional operation without rare-earth permanent magnets. By independently controlling multiple harmonic field components in the airgap, we unlock capabilities that conventional single-harmonic machines cannot achieve.
    </p>
    <ul class="rp-highlights">
      <li>Multi-harmonic winding design for independent torque and levitation control</li>
      <li>Brushless electrically-excited machines using harmonic injection</li>
      <li>AI/ML-guided topology discovery for rare-earth-free rotors</li>
      <li>High-throughput FEA for multi-objective performance optimization</li>
    </ul>
  </div>
</div>

<!-- ── Thrust 2 ─────────────────────────────────────── -->
<div class="rp-thrust reverse">
  <div class="rp-graphic">
    <img src="{{ '/assets/img/research/thrust2.svg' | relative_url }}"
         alt="Integrated machine and power electronics co-design diagram">
  </div>
  <div class="rp-content">
    <span class="rp-number">Research Thrust 02</span>
    <div class="rp-title">High-Power-Density Machine and Drive Systems</div>
    <p class="rp-desc">
      We co-design electric machines and their power electronic drives as tightly integrated systems, rather than optimizing each in isolation. This systems-level approach unlocks dramatic improvements in power density, efficiency, and reliability that are impossible when machine and converter are designed separately.
    </p>
    <ul class="rp-highlights">
      <li>Machine–converter co-optimization for maximum power-per-volume</li>
      <li>Custom converter topologies tailored to machine characteristics</li>
      <li>Additive manufactured stators and multi-material rotors</li>
      <li>Thermal co-design for compact, high-performance packaging</li>
    </ul>
  </div>
</div>

<!-- ── Thrust 3 ─────────────────────────────────────── -->
<div class="rp-thrust">
  <div class="rp-graphic">
    <img src="{{ '/assets/img/research/thrust3.svg' | relative_url }}"
         alt="Multi-physics modeling loop connecting electromagnetic, thermal, structural, and rotordynamic domains">
  </div>
  <div class="rp-content">
    <span class="rp-number">Research Thrust 03</span>
    <div class="rp-title">Multi-Physics Modeling and Optimization</div>
    <p class="rp-desc">
      Accurate prediction of machine behavior requires tightly coupled electromagnetic, thermal, structural, and rotordynamic models. We develop and apply advanced multi-physics frameworks that expose critical cross-domain interactions — then drive them with AI/ML-assisted optimizers to navigate large design spaces efficiently.
    </p>
    <ul class="rp-highlights">
      <li>Coupled FEA across EM, thermal, structural, and acoustic domains</li>
      <li>Topology optimization for machine geometry and material layout</li>
      <li>Surrogate modeling and neural networks for fast design space exploration</li>
      <li>Open-source tools (eMach framework) for the broader community</li>
    </ul>
  </div>
</div>

<!-- ── Thrust 4 ─────────────────────────────────────── -->
<div class="rp-thrust reverse">
  <div class="rp-graphic">
    <img src="{{ '/assets/img/research/thrust4.svg' | relative_url }}"
         alt="Model-predictive control block diagram for electric machines">
  </div>
  <div class="rp-content">
    <span class="rp-number">Research Thrust 04</span>
    <div class="rp-title">Physics-Based and Model-Predictive Control</div>
    <p class="rp-desc">
      We develop control strategies that are grounded in physical models of the machine and drive system. By embedding electromagnetic and thermal knowledge directly into the controller, we achieve high-bandwidth performance, fault tolerance, and wide operating range — without relying on expensive sensors or offline calibration.
    </p>
    <ul class="rp-highlights">
      <li>Model-predictive control (MPC) with real-time physics prediction</li>
      <li>Sensorless and observer-based state estimation</li>
      <li>Harmonic current injection for multi-function machine control</li>
      <li>Fault-tolerant operation under winding and converter faults</li>
    </ul>
  </div>
</div>

<!-- ── Thrust 5 ─────────────────────────────────────── -->
<div class="rp-thrust">
  <div class="rp-graphic">
    <img src="{{ '/assets/img/research/thrust5.svg' | relative_url }}"
         alt="Electrification applications: electric vehicles, aviation, and industrial systems">
  </div>
  <div class="rp-content">
    <span class="rp-number">Research Thrust 05</span>
    <div class="rp-title">Electrification of Transportation, Aerospace, and Industry</div>
    <p class="rp-desc">
      We apply our machine and drive research to real-world electrification challenges across transportation, aviation, and industrial systems. These applications drive demanding requirements — high power density, extreme reliability, wide temperature range — that push the boundaries of what is possible and motivate fundamental advances across our other research thrusts.
    </p>
    <ul class="rp-highlights">
      <li>High-torque traction drives for electric and off-highway vehicles</li>
      <li>Hybrid-electric aircraft propulsion and ultra-high-speed turbo-generators</li>
      <li>High-reliability drives for freight and industrial automation</li>
      <li>Space power conversion systems for NASA missions</li>
    </ul>
  </div>
</div>
