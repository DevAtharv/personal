import portrait from './2.png';
import {
  focusMetrics,
  heroTicker,
  interests,
  navItems,
  projects,
  socialLinks,
} from './content';
import './styles.css';

/* ── per-project code previews ── */
const projectCode: Record<string, string[][]> = {
  'ml-stock-analysis': [
    ['cm', '# signal_model.py'],
    ['kw', 'def ', 'fn', 'evaluate_signal', 'op', '(data):'],
    ['op', '    pipeline = ['],
    ['str', '        "clean → engineer → validate"', 'op', ','],
    ['str', '        "measure drift before confidence"', 'op', ','],
    ['op', '    ]'],
    ['kw', '    return ', 'fn', 'select_best_model', 'op', '(pipeline)'],
    ['cm', ''],
    ['kw', 'model ', 'op', '= ', 'fn', 'fit_pipeline', 'op', '(data)'],
    ['fn', 'evaluate_signal', 'op', '(model.predict())'],
  ],
  getsync: [
    ['cm', '# getsync / parser.py'],
    ['kw', 'from ', 'fn', 'llama_groq', 'kw', ' import ', 'fn', 'LLM'],
    ['kw', 'from ', 'fn', 'supabase', 'kw', ' import ', 'fn', 'client'],
    ['op', ''],
    ['kw', 'def ', 'fn', 'parse_email', 'op', '(msg):'],
    ['op', '    result = ', 'fn', 'LLM', 'op', '.run('],
    ['str', '        f"Extract transactions from: {msg}"'],
    ['op', '    )'],
    ['kw', '    return ', 'fn', 'client', 'op', '.insert(result)'],
  ],
  glint: [
    ['cm', '// glint / playlist.js'],
    ['kw', 'const ', 'fn', 'generatePlaylist ', 'op', '= async (', 'fn', 'prompt', 'op', ') => {'],
    ['op', '  const ', 'fn', 'tracks ', 'op', '= await ', 'fn', 'ai.suggest', 'op', '({'],
    ['str', '    mood: prompt', 'op', ','],
    ['str', '    limit: 20', 'op', ','],
    ['op', '  });'],
    ['kw', '  return ', 'fn', 'tracks', 'op', '.map(', 'fn', 'normalize', 'op', ');'],
    ['op', '};'],
  ],
};

function CodeLine({ parts }: { parts: string[] }) {
  const elements: JSX.Element[] = [];
  for (let i = 0; i < parts.length; i += 2) {
    const cls = parts[i];
    const txt = parts[i + 1] ?? '';
    elements.push(<span key={i} className={cls}>{txt}</span>);
  }
  return <div className="t-line" style={{ paddingLeft: 0 }}>{elements}</div>;
}

function ProjectVisual({ project }: { project: typeof projects[0] }) {
  const lines = projectCode[project.id] ?? [];
  return (
    <div className="project-visual">
      <div className="project-visual-bar">
        <span className="pvb-dot" />
        <span className="pvb-dot" />
        <span className="pvb-dot" />
        <span className="pvb-name">{project.id}.py</span>
      </div>
      <div className="pcode">
        {lines.map((parts, i) => (
          <CodeLine key={i} parts={parts} />
        ))}
      </div>
      <div className="project-visual-fade" />
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag.label} className={`project-tag project-tag-${tag.tone}`}>
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">

      {/* ── TOPBAR ── */}
      <header className="topbar">
        <a className="brand" href="#home">
          atharv<span className="dot">.</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="topbar-action" href="#contact">Contact</a>
      </header>

      <main className="main-canvas">

        {/* ── HERO ── */}
        <section className="hero" id="home">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-blob" aria-hidden="true" />

          <div className="hero-inner">
            {/* Left — copy */}
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                Atharv Agarwal — Portfolio 2025
              </div>

              <h1 className="hero-headline">
                Curiosity.<br />
                <em>Momentum.</em><br />
                Entropy.
              </h1>

              <p className="hero-lede">
                I&apos;m still figuring things out and learning as I go. I care about technology,
                finance, and creative work — building steadily rather than pretending to have
                it all together.
              </p>

              <div className="hero-actions">
                <a className="btn-primary" href="#work">
                  View projects
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a className="btn-ghost" href="#about">About me</a>
              </div>

              <div className="hero-stats">
                <div>
                  <div className="hero-stat-value">3+</div>
                  <div className="hero-stat-label">Live projects</div>
                </div>
                <div>
                  <div className="hero-stat-value">6</div>
                  <div className="hero-stat-label">Skills tracked</div>
                </div>
                <div>
                  <div className="hero-stat-value">∞</div>
                  <div className="hero-stat-label">Still learning</div>
                </div>
              </div>
            </div>

            {/* Right — terminal */}
            <div className="hero-terminal">
              <div className="terminal-bar">
                <span className="t-dot t-dot-r" />
                <span className="t-dot t-dot-y" />
                <span className="t-dot t-dot-g" />
                <span className="terminal-bar-title">atharv_workspace.sh</span>
              </div>
              <div className="terminal-body">
                <div className="t-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cmd">fetch current_status</span>
                </div>
                <div className="t-out hi">"still learning, still building, still refining"</div>
                <br />
                <div className="t-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cmd">ls projects/featured</span>
                </div>
                <div className="t-out mo">stock_lab &nbsp; getsync &nbsp; glint &nbsp; portfolio_v1</div>
                <br />
                <div className="t-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cmd">cat operating_mode.txt</span>
                </div>
                <div className="t-out">curious / ambitious / self-directed</div>
                <br />
                <div className="t-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cmd">echo skills</span>
                </div>
                <div className="t-out">Data Analysis · ML · Flask · React · Finance</div>
                <br />
                <div className="t-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cursor" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TICKER ── */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>
                {heroTicker.primary} <em>·</em> {heroTicker.secondary} <em>·</em>
              </span>
            ))}
          </div>
        </div>

        {/* ── ABOUT ── */}
        <section id="about">
          <div className="container">
            <div className="section-label">About</div>
            <h2 className="section-title">Still figuring things out.</h2>

            <div className="about-grid">
              <div className="portrait-card">
                <div className="portrait-frame">
                  <img className="portrait-image" src={portrait} alt="Atharv Agarwal" />
                </div>
                <div className="portrait-badge">Bokaro Steel City, India</div>
              </div>

              <div className="about-content">
                <p className="about-body">
                  I&apos;m curious about technology, finance, and creative work. I care more about
                  improving steadily than pretending to have it all together. This portfolio is a
                  record of what I&apos;m learning, building, and refining over time.
                </p>
                <p className="about-body">
                  I treat every project as a forcing function — something that pushes me to think
                  past surface-level outputs and understand the systems that actually matter.
                </p>
                <div className="about-tagline">
                  Not an <em>expert</em> — a <em>learner</em> building in public.
                </div>
                <div className="about-chips">
                  {['Python', 'React', 'Flask', 'ML', 'Finance', 'Video Editing'].map((s) => (
                    <span key={s} className="about-chip">
                      <span>▸</span> {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pillars">
              <article className="pillar">
                <span className="blueprint-index">01 / Foundation</span>
                <h3>Code &amp; systems.</h3>
                <p>Data pipelines, ML logic, backend structure — I care about what happens under the surface.</p>
              </article>
              <article className="pillar">
                <span className="blueprint-index">02 / Direction</span>
                <h3>Learning in public.</h3>
                <p>This site is a progress log, not a finished monument. Direction &gt; destination.</p>
              </article>
              <article className="pillar">
                <span className="blueprint-index">03 / Craft</span>
                <h3>Editing with feel.</h3>
                <p>Rhythm, atmosphere, visual language — the strongest work lands emotionally and technically.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="work">
          <div className="container">
            <div className="section-label">Selected Projects</div>
            <h2 className="section-title">Workbench entries.</h2>
            <p className="section-desc">
              A small set of things I&apos;ve built that forced me to think past the surface.
            </p>

            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.id} className="project-card">
                  <ProjectVisual project={project} />

                  <div className="project-detail">
                    <div>
                      <div className="project-title-row">
                        <span className="project-index">{project.index} / {project.category}</span>
                        {project.status && (
                          <span className={`project-status${project.status === 'Live' ? ' live' : ''}`}>
                            {project.status}
                          </span>
                        )}
                      </div>
                      <h3>{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                    </div>

                    <p className="project-desc">{project.description}</p>

                    <div className="chip-row">
                      {project.stack.map((item) => (
                        <span key={item} className="chip">{item}</span>
                      ))}
                    </div>

                    <div className="project-footer">
                      <span className="project-focus">{project.focus}</span>
                      {project.cta && (
                        <a className="project-cta" href={project.cta.href} target="_blank" rel="noreferrer">
                          {project.cta.label}
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROGRESS ── */}
        <section id="progress">
          <div className="container">
            <div className="progress-header">
              <div>
                <div className="section-label">My progress</div>
                <h2 className="section-title">Current focus.</h2>
                <p className="section-desc">
                  Learning as a continuous process, not a checklist.
                </p>
              </div>
              <span className="compile-stamp">Last update: March 23, 2026</span>
            </div>

            <div className="metrics-grid">
              {focusMetrics.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <div className="metric-header">
                    <h3>{metric.label}</h3>
                    <span className="metric-value">{metric.value}%</span>
                  </div>
                  <div className="progress-rail">
                    <span className="progress-fill" style={{ width: `${metric.value}%` }} />
                  </div>
                  <p className="metric-descriptor">{metric.descriptor}</p>
                  <p className="metric-detail">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDITING ── */}
        <section id="editing">
          <div className="container">
            <div className="section-label">Editing</div>
            <h2 className="section-title">Visual storytelling.</h2>

            <div className="editing-grid">
              <div className="editing-copy">
                <p>
                  Cinematic cuts, pacing, and mood-driven edits. I focus on feel and flow —
                  building sequences that land emotionally, not just technically.
                </p>
                <p>
                  Every project is a chance to experiment with rhythm, atmosphere, and visual
                  language.
                </p>
                <p className="editing-quote">
                  &quot;The edit is where the story actually gets made.&quot;
                </p>
              </div>

              <div className="social-card">
                <span className="active-badge">Active</span>
                <h3>@atharvagarwal0</h3>
                <p>Cinematic AI visuals and storytelling. DM for collaborations.</p>
                <div className="social-dl">
                  <div><span className="social-dt">Style</span><span className="social-dd">Cinematic · Narrative</span></div>
                  <div><span className="social-dt">Tool</span><span className="social-dd">CapCut Pro</span></div>
                  <div><span className="social-dt">Focus</span><span className="social-dd">Mood-driven pacing</span></div>
                  <div><span className="social-dt">Level</span><span className="social-dd">Confident · 80%</span></div>
                </div>
                <a className="social-link" href="https://www.instagram.com/atharvagarwal0/" target="_blank" rel="noreferrer">
                  View on Instagram
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── RANDOM ── */}
        <section id="random">
          <div className="container">
            <div className="section-label">Random</div>
            <h2 className="section-title">Still loading.</h2>
            <p className="section-desc">
              Things that don&apos;t fit anywhere else: thoughts, experiments, and whatever I&apos;m into this week.
            </p>
            <div className="interest-cloud">
              {interests.map((interest) => (
                <span key={interest.label} className="interest-pill">{interest.label}</span>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER / CONTACT ── */}
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="section-label">Contact</div>
          <div className="footer-top">
            <div>
              <div className="footer-display">
                atharv<em>.</em>
              </div>
              <p className="footer-pitch">
                Open to interesting conversations, collaborations, and project inquiries.
                Reach out — I&apos;ll reply.
              </p>
            </div>
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
