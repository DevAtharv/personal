import portrait from './2.png';
import { focusMetrics, heroNotes, heroTicker, interests, navItems, projects, socialLinks } from './content';

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          atharv.
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="topbar-action" href="#contact">
          Inquiry
        </a>
      </header>

      <aside className="workbench-rail" aria-label="Workbench navigation">
        <div className="rail-status">
          <span className="rail-title">Workbench_v1</span>
          <span className="rail-subtitle">Terminal active</span>
        </div>
        <nav className="rail-nav">
          {navItems.map((item, index) => (
            <a key={item.href} className={index === 0 ? 'rail-link rail-link-active' : 'rail-link'} href={item.href}>
              <span className="rail-link-code">0{index + 1}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="rail-footer">
          <span>Status: building</span>
          <span>Curiosity online</span>
        </div>
      </aside>

      <main className="main-canvas">
        <section className="hero section" id="home">
          <div className="hero-notes" aria-hidden="true">
            {heroNotes.map((note, index) => (
              <div key={note.id} className={`hero-note hero-note-${note.tone} note-${index + 1}`}>
                <span>{note.label}</span>
                <p>{note.text}</p>
              </div>
            ))}
          </div>

          <div className="hero-grid">
            <div className="hero-copy reveal">
              <p className="hero-kicker">
                <span className="hero-kicker-line" />
                Atharv Agarwal - Portfolio 2025
              </p>
              <h1>
                Curiosity.
                <br />
                <em>Momentum.</em>
                <br />
                Entropy Control.
              </h1>
              <p className="lede">
                I&apos;m still figuring things out and learning as I go. I care about technology,
                finance, and creative work, and I&apos;d rather keep improving steadily than pretend
                I already have it all together.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  View what I&apos;m building
                </a>
                <a className="text-link" href="#about">
                  Scroll to explore
                </a>
              </div>
            </div>

            <div className="hero-system reveal-delay">
              <div className="terminal-window">
                <div className="terminal-topbar">
                  <span />
                  <span />
                  <span />
                  <strong>atharv_workspace.sh</strong>
                </div>
                <div className="terminal-body">
                  <p>
                    <span>$</span> fetch current_status
                  </p>
                  <p className="terminal-response">"still learning, still building, still refining"</p>
                  <p>
                    <span>$</span> ls projects/featured
                  </p>
                  <div className="terminal-grid">
                    <span>stock_lab</span>
                    <span>getsync</span>
                    <span>glint</span>
                    <span>portfolio_v1</span>
                  </div>
                  <p>
                    <span>$</span> echo operating_mode
                  </p>
                  <p className="terminal-response">curious / ambitious / self-directed</p>
                </div>
                <div className="terminal-blueprint" />
              </div>
            </div>
          </div>

          <div className="ticker" aria-hidden="true">
            <div className="ticker-track">
              {Array.from({ length: 6 }).map((_, index) => (
                <span key={index}>
                  {heroTicker.primary} <em>•</em> {heroTicker.secondary} <em>•</em>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <span className="section-kicker">About Me</span>
            <h2>Still figuring things out.</h2>
          </div>
          <div className="about-layout">
            <div className="portrait-card">
              <div className="portrait-frame">
                <img className="portrait-image" src={portrait} alt="Atharv Agarwal" />
              </div>
            </div>
            <div className="about-content-block">
              <p className="about-body">
                I&apos;m still figuring things out and learning as I go. I&apos;m curious about
                technology, finance, and creative work, and I care more about improving steadily
                than pretending to have it all together. This portfolio is a record of what I&apos;m
                learning, building, and refining over time.
              </p>
              <div className="about-tagline">I&apos;M NOT AN <em>EXPERT</em> - I&apos;M A <em>LEARNER</em></div>
            </div>
          </div>
          <div className="blueprint-grid">
            <article className="blueprint-card">
              <span className="blueprint-index">01 / Foundation</span>
              <h3>Code and systems.</h3>
              <p>
                I like building systems that force me to think beyond surface-level output. Data
                pipelines, ML logic, backend structure, and product flow all matter more to me than
                flashy labels.
              </p>
            </article>
            <article className="blueprint-card">
              <span className="blueprint-index">02 / Direction</span>
              <h3>Learning in public.</h3>
              <p>
                I treat this site like a progress log, not a finished monument. What matters is the
                direction: clearer thinking, better systems, stronger taste, and consistent forward
                motion.
              </p>
            </article>
            <article className="blueprint-card">
              <span className="blueprint-index">03 / Craft</span>
              <h3>Editing with feel.</h3>
              <p>
                When I edit, I focus on feel and flow. I care about rhythm, atmosphere, and visual
                language, because the strongest work lands emotionally as well as technically.
              </p>
            </article>
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section-heading">
            <span className="section-kicker">Selected Projects</span>
            <h2>Workbench entries worth pinning.</h2>
          </div>
          <div className="project-stack">
            {projects.map((project, index) => (
              <article key={project.id} className={`project-module project-module-${index + 1}`}>
                <div className="project-polaroid">
                  <div className="project-visual">
                    <div className="project-overlay-grid" />
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag.label} className={`project-tag project-tag-${tag.tone}`}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                    <div className="project-image-label">{project.imageLabel}</div>
                  </div>
                  <div className="project-caption">
                    <div className="project-title-row">
                      <span>
                        {project.index} / {project.category}
                      </span>
                      {project.status ? <strong>{project.status}</strong> : null}
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                </div>

                {project.codeSnippet ? (
                  <aside className="project-attachment code-attachment">
                    <div className="attachment-topbar">
                      <span>{project.codeTitle}</span>
                      <span>terminal</span>
                    </div>
                    <pre>
                      {project.codeSnippet.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </pre>
                  </aside>
                ) : null}

                {project.note ? (
                  <aside className="project-attachment sticky-note">
                    <span>Field note</span>
                    <p>{project.note}</p>
                  </aside>
                ) : null}

                <div className="project-detail">
                  <p>{project.description}</p>
                  <div className="chip-row">
                    {project.stack.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <span>{project.focus}</span>
                    {project.cta ? (
                      <a href={project.cta.href} target="_blank" rel="noreferrer">
                        {project.cta.label}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section progress" id="progress">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">My.progress.bar</span>
              <h2>Current Focus.</h2>
              <p>
                I treat learning as a continuous process, not a checklist. Below reflects where
                I&apos;m currently operating, not where I&apos;m finished.
              </p>
            </div>
            <span className="compile-stamp">Last update: March 23, 2026</span>
          </div>
          <div className="metrics-grid metrics-grid-compact">
            {focusMetrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <div className="metric-header">
                  <h3>{metric.label}</h3>
                  <span>{metric.value}%</span>
                </div>
                <div className="progress-rail" aria-hidden="true">
                  <span className="progress-fill" style={{ width: `${metric.value}%` }} />
                </div>
                <p className="metric-descriptor">{metric.descriptor}</p>
                <p className="metric-detail">{metric.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section editing" id="editing">
          <div className="section-heading">
            <span className="section-kicker">Editing</span>
            <h2>Visual Storytelling.</h2>
          </div>
          <div className="editing-layout">
            <div className="editing-copy">
              <p>
                Cinematic cuts, pacing, and mood-driven edits. I focus on feel and flow, building
                sequences that land emotionally, not just technically.
              </p>
              <p>
                Every project is a chance to experiment with rhythm, atmosphere, and visual
                language.
              </p>
              <p className="editing-quote">&quot;The edit is where the story actually gets made.&quot;</p>
            </div>
            <div className="social-card">
              <span className="active-dot">Active</span>
              <h3>@atharvagarwal0</h3>
              <p>Cinematic AI visuals and storytelling. DM for collaborations.</p>
              <dl>
                <div>
                  <dt>Style</dt>
                  <dd>Cinematic · Narrative</dd>
                </div>
                <div>
                  <dt>Tool</dt>
                  <dd>CapCut Pro</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>Mood-driven pacing</dd>
                </div>
                <div>
                  <dt>Level</dt>
                  <dd>Confident · 80%</dd>
                </div>
              </dl>
              <a href="https://www.instagram.com/atharvagarwal0/" target="_blank" rel="noreferrer">
                View on Instagram
              </a>
            </div>
          </div>
        </section>

        <section className="section random" id="random">
          <div className="section-heading">
            <span className="section-kicker">Random</span>
            <h2>Still Loading.</h2>
            <p>
              A placeholder for things that don&apos;t fit anywhere else: thoughts, experiments,
              observations, and whatever I happen to be into this week.
            </p>
          </div>
          <div className="interest-cloud">
            {interests.map((interest) => (
              <span key={interest.label} className="interest-pill">
                {interest.label}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-heading">
            <span className="section-kicker">Contact</span>
            <h2>atharv.</h2>
          </div>
          <div className="contact-grid">
            <p className="contact-copy">Atharv Agarwal - reach out.</p>
            <div className="contact-links">
              {socialLinks.map((link) => (
                <a key={link.label} className="contact-link" href={link.href} target="_blank" rel="noreferrer">
                  <span>{link.label}</span>
                  <small>{link.note}</small>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-meta">
            <span>atharv. / 2025</span>
            <span>status: system_ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
