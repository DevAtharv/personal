import React from "react";

export function HeroSection04() {
  return (
    <section className="hs04-section">
      {/* Dot-grid background */}
      <div className="hs04-bg-grid" aria-hidden="true" />
      {/* Accent glow */}
      <div className="hs04-glow" aria-hidden="true" />

      <div className="hs04-inner">
        {/* ── HEADLINE ── */}
        <div className="hs04-headline-wrap">
          <p className="hs04-est">Est. 1996</p>
          <h2 className="hs04-headline">CREATIVE DESIGNER</h2>
          <p className="hs04-name hs04-name-right">ALI IMAM</p>
        </div>

        {/* ── SKILLS + PORTRAIT ── */}
        <div className="hs04-skills-row">
          <div className="hs04-skills-panel">
            <div className="hs04-skills-list">
              <div className="hs04-skill hs04-skill-accent">/ ART DIRECTION</div>
              <div className="hs04-skill">/ WEB DESIGN (UX/UI)</div>
              <div className="hs04-skill">/ WEB DEVELOPMENT</div>
            </div>
          </div>
          <div className="hs04-portrait-wrap">
            <img
              src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/ai.jpg"
              alt="Designer portrait"
              className="hs04-portrait-img"
            />
            <div className="hs04-portrait-label">BASED IN BOKARO STEEL CITY</div>
          </div>
        </div>

        {/* ── BIO ── */}
        <div className="hs04-bio">
          <p>
            I'M AN EXPERIENCED WEB AND UX/UI DESIGNER,<br />
            WHO DESIGNS MEMORABLE WEB EXPERIENCES FOR<br />
            BRANDS OF ALL SIZES
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="hs04-cta-row">
          <a href="#contact" className="hs04-cta-btn">Book a call</a>
        </div>

        {/* ── RECENT WORK ── */}
        <div className="hs04-work-row">
          {/* Stacked portfolio cards */}
          <div className="hs04-cards-wrap">
            {[2, 1, 0].map((i) => (
              <div
                key={i}
                className="hs04-card"
                style={{ left: `${i * 16}px`, top: `${-i * 16}px`, zIndex: i }}
              >
                <img
                  src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-www.jpg"
                  alt="Portfolio preview"
                />
              </div>
            ))}
          </div>

          {/* Label */}
          <div className="hs04-work-label">
            <div className="hs04-work-tag">
              <span>RECENT WORK</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="7" x2="17" y2="17" />
                <polyline points="17 7 17 17 7 17" />
              </svg>
            </div>
            <h3 className="hs04-work-title">Design without Limits</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
