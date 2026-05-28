import { useEffect, useState, type CSSProperties, type PointerEvent } from 'react';
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

const projectCode: Record<string, string[]> = {
  'ml-stock-analysis': [
    'clean -> engineer -> validate',
    'measure drift before confidence',
    'select best model',
  ],
  getsync: [
    'gmail -> parse -> categorise',
    'llm extracts finance context',
    'supabase stores clean insights',
  ],
  glint: [
    'prompt -> mood -> playlist',
    'import spotify + apple music',
    'polish the listening flow',
  ],
};

const moodWords: Record<string, string> = {
  'ml-stock-analysis': 'Signal',
  getsync: 'Sync',
  glint: 'Glint',
};

const studioCards = [
  {
    label: 'Operating mode',
    value: 'Learning in public',
    detail: 'Shipping small systems, reading the feedback, tightening the next version.',
  },
  {
    label: 'Current edge',
    value: 'AI x finance',
    detail: 'Turning messy signals into usable interfaces and decisions.',
  },
  {
    label: 'Creative layer',
    value: 'Cinematic edits',
    detail: 'Visual rhythm, pacing, and mood as part of the product language.',
  },
];

type HeroStyle = CSSProperties & {
  '--cursor-x': string;
  '--cursor-y': string;
  '--motion-x': string;
  '--motion-y': string;
  '--motion-x-reverse': string;
  '--motion-y-reverse': string;
};

function ProjectMedia({ project }: { project: typeof projects[0] }) {
  const lines = projectCode[project.id] ?? project.stack.slice(0, 3);

  return (
    <div className={`project-media project-media-${project.id}`}>
      <div className="project-media-word">{moodWords[project.id] ?? project.title}</div>
      <div className="project-media-meta">
        <span>{project.index}</span>
        <span>{project.category}</span>
      </div>

      <div className="project-mini-screen">
        <div className="mini-screen-bar">
          <span />
          <span />
          <span />
        </div>
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

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
  const [cursor, setCursor] = useState({ x: 50, y: 48 });

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    window.requestAnimationFrame(() => {
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) {
        return;
      }

      target.classList.add('is-visible');
      target.querySelectorAll<HTMLElement>('.reveal-on-scroll').forEach((item) => {
        item.classList.add('is-visible');
      });
      target.scrollIntoView();
    });
  }, []);

  function handleHeroPointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    setCursor({ x, y });
  }

  const heroStyle: HeroStyle = {
    '--cursor-x': `${cursor.x}%`,
    '--cursor-y': `${cursor.y}%`,
    '--motion-x': `${(cursor.x - 50) * 0.18}px`,
    '--motion-y': `${(cursor.y - 50) * 0.18}px`,
    '--motion-x-reverse': `${(50 - cursor.x) * 0.13}px`,
    '--motion-y-reverse': `${(50 - cursor.y) * 0.13}px`,
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark" /> atharv
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="topbar-action" href="#contact">Let&apos;s talk</a>
      </header>

      <main className="main-canvas">
        <section
          className="hero"
          id="home"
          style={heroStyle}
          onPointerMove={handleHeroPointerMove}
        >
          <div className="hero-frame">
            <div className="cursor-halo" aria-hidden="true" />
            <div className="hero-scanline" aria-hidden="true" />

            <div className="hero-object hero-object-portrait">
              <img src={portrait} alt="Atharv Agarwal" />
            </div>
            <div className="hero-status-card">
              <span>Current mode</span>
              <strong>building in public</strong>
              <small>React / ML / finance / edits</small>
            </div>

            <div className="hero-core">
              <span className="hero-kicker">Welcome</span>
              <h1>
                atharv<span>.</span>
              </h1>
              <span className="hero-est">Est. 2025</span>
              <p>
                Data, machine learning, finance, and visual storytelling shaped into
                sharp systems with a cinematic editorial feel.
              </p>
              <div className="hero-action-row">
                <a href="#work" className="hero-pill">View work</a>
                <a href="#about" className="hero-link">Read profile</a>
              </div>
            </div>

            <div className="hero-bottom">
              <a href="#work" className="scroll-cue">
                <span>+</span> Scroll to explore
              </a>
              <p>{heroTicker.secondary}</p>
            </div>
          </div>
        </section>

        <section className="studio-snapshot reveal-on-scroll" aria-label="Current studio snapshot">
          <div className="snapshot-inner">
            <div className="snapshot-copy">
              <span className="section-label">Current Direction</span>
              <h2>
                A portfolio that moves like a studio wall.
              </h2>
              <p>
                This is the place where code, market curiosity, product taste, and
                visual storytelling sit together. Not polished into silence, but refined
                enough to feel intentional.
              </p>
            </div>

            <div className="snapshot-board">
              {studioCards.map((card, index) => (
                <article key={card.label} className="snapshot-card reveal-on-scroll">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{card.value}</h3>
                  <p>{card.detail}</p>
                  <small>{card.label}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="statement-section reveal-on-scroll">
          <div className="container statement-grid">
            <div>
              <span className="section-label">About</span>
              <h2 className="statement-title">
                I&apos;m atharv -
                <br />
                a <em>curious</em>
                <br />
                builder.
              </h2>
            </div>
            <div className="statement-copy">
              <p>
                I&apos;m still figuring things out and learning as I go. I care about
                technology, finance, and creative work, building steadily instead of
                pretending to have everything solved.
              </p>
              <p>
                This portfolio is a living studio wall: projects, experiments, editing
                instincts, and the current shape of what I&apos;m learning.
              </p>
              <div className="about-chips">
                {['Python', 'React', 'Flask', 'ML', 'Finance', 'Video Editing'].map((skill) => (
                  <span key={skill} className="about-chip">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="work-section reveal-on-scroll">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <span className="section-label">Selected Projects</span>
                <h2 className="section-title">Project reel.</h2>
              </div>
              <p className="section-desc">
                Three live directions: analysis, automation, and AI-assisted product
                experiences with a stronger visual point of view.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.id} className="project-card reveal-on-scroll">
                  <ProjectMedia project={project} />

                  <div className="project-detail">
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
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="progress" className="reveal-on-scroll">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <span className="section-label">My Progress</span>
                <h2 className="section-title">Current focus.</h2>
              </div>
              <span className="compile-stamp">Last update: March 23, 2026</span>
            </div>

            <div className="metrics-grid">
              {focusMetrics.map((metric) => (
                <article key={metric.label} className="metric-card reveal-on-scroll">
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

        <section id="editing" className="editing-section reveal-on-scroll">
          <div className="container editing-grid">
            <div>
              <span className="section-label">Editing</span>
              <h2 className="section-title">Visual storytelling.</h2>
              <p className="section-desc">
                Cinematic cuts, pacing, and mood-driven edits. I focus on feel and flow,
                building sequences that land emotionally and technically.
              </p>
            </div>

            <div className="social-card">
              <span className="active-badge">Active</span>
              <h3>@atharvagarwal0</h3>
              <p>Cinematic AI visuals and storytelling. DM for collaborations.</p>
              <dl className="social-dl">
                <div><dt>Style</dt><dd>Cinematic / Narrative</dd></div>
                <div><dt>Tool</dt><dd>CapCut Pro</dd></div>
                <div><dt>Focus</dt><dd>Mood-driven pacing</dd></div>
                <div><dt>Level</dt><dd>Confident / 80%</dd></div>
              </dl>
              <a className="social-link" href="https://www.instagram.com/atharvagarwal0/" target="_blank" rel="noreferrer">
                View on Instagram
              </a>
            </div>
          </div>
        </section>

        <section id="random" className="reveal-on-scroll">
          <div className="container">
            <span className="section-label">Random</span>
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

      <footer className="footer" id="contact">
        <div className="footer-inner">
          <span className="section-label">Contact</span>
          <div className="footer-top">
            <div>
              <div className="footer-display">
                atharv<span>.</span>
              </div>
              <p className="footer-pitch">
                Open to interesting conversations, collaborations, and project inquiries.
                Reach out and I&apos;ll reply.
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
