import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Rocket,
  Brain,
  TrendingUp,
  Zap,
  Globe,
  Dumbbell,
  Menu,
  X,
  Star,
  ArrowRight,
  Sun,
  Moon,
} from 'lucide-react';
import './App.css';

type Theme = 'light' | 'dark';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('stack-sprint-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('stack-sprint-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const services = [
    {
      icon: <Code2 />,
      title: "Full-Stack Web Development",
      description: "End-to-end web solutions built with modern frameworks. Scalable, secure, and optimized for performance."
    },
    {
      icon: <Rocket />,
      title: "SaaS Development",
      description: "Launch your SaaS product faster. From MVP to enterprise-grade platforms with subscription management."
    },
    {
      icon: <Brain />,
      title: "AI Integration",
      description: "Integrate cutting-edge AI capabilities into your products. ChatGPT, automation, and intelligent features."
    },
    {
      icon: <TrendingUp />,
      title: "SEO & AI Visibility",
      description: "Rank higher with technical SEO and AI-powered content strategies that drive organic traffic."
    },
    {
      icon: <Zap />,
      title: "Performance Optimization",
      description: "Lightning-fast websites that convert. Core Web Vitals optimization and speed improvements."
    },
    {
      icon: <Globe />,
      title: "Custom Business Solutions",
      description: "Tailored digital solutions for your unique business needs. From automation to custom platforms."
    },
    {
      icon: <Dumbbell />,
      title: "Creator & Fitness Brands",
      description: "Specialized websites for content creators and fitness professionals. Stand out in your niche."
    }
  ];

  const process = [
    { number: 1, title: "Discovery", description: "Understanding your vision" },
    { number: 2, title: "Strategy", description: "Planning the roadmap" },
    { number: 3, title: "Development", description: "Building your solution" },
    { number: 4, title: "Testing", description: "Ensuring quality" },
    { number: 5, title: "Launch", description: "Going live" },
    { number: 6, title: "Support", description: "Ongoing optimization" }
  ];

  const portfolio = [
    { title: "E-Commerce Platform", metric: "+250% Revenue Growth", icon: "🛒" },
    { title: "SaaS Dashboard", metric: "+120% Performance", icon: "📊" },
    { title: "Fitness App", metric: "50K+ Active Users", icon: "💪" },
    { title: "AI Content Tool", metric: "+180% Engagement", icon: "🤖" }
  ];

  const testimonials = [
    {
      text: "Stack Sprint transformed our online presence. The website is fast, beautiful, and converts like crazy. Best investment we made!",
      author: "Sarah Johnson",
      location: "🇺🇸 United States",
      avatar: "SJ"
    },
    {
      text: "Ritu's expertise in full-stack development is unmatched. Delivered our SaaS platform ahead of schedule with exceptional quality.",
      author: "Michael Chen",
      location: "🇸🇬 Singapore",
      avatar: "MC"
    },
    {
      text: "As a fitness coach, I needed a website that stands out. Stack Sprint delivered beyond expectations. My bookings doubled!",
      author: "Emma Rodriguez",
      location: "🇪🇸 Spain",
      avatar: "ER"
    }
  ];

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <div className="logo-lockup">
            <div className="logo-mark">S</div>
            <div className="logo-text">
              <span className="logo-primary">Stack Sprint</span>
              <span className="logo-secondary">Full‑Stack Studio</span>
            </div>
          </div>

          <div className="nav-main">
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Founder</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <div className="nav-actions">
              <button
                className="theme-toggle"
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
              >
                {theme === 'light' ? (
                  <>
                    <Moon size={14} />
                    <span>Dark</span>
                  </>
                ) : (
                  <>
                    <Sun size={14} />
                    <span>Light</span>
                  </>
                )}
              </button>
              <button className="btn btn-ghost">Project Deck</button>
              <button className="btn btn-primary">
                Book Intro Call
              </button>
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-sheet-header">
              <span className="logo-primary">Stack Sprint</span>
              <button
                aria-label="Close navigation"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X />
              </button>
            </div>
            <ul className="mobile-nav-links">
              <li>
                <a href="#home" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                  Founder
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="mobile-nav-actions">
              <button
                className="btn btn-ghost"
                type="button"
                onClick={toggleTheme}
              >
                {theme === 'light' ? 'Switch to dark' : 'Switch to light'}
              </button>
              <button className="btn btn-ghost">Project Deck</button>
              <button className="btn btn-primary">Book Intro Call</button>
            </div>
          </div>
        </div>
      )}

      <main>
        <section className="hero" id="home">
          <motion.div
            className="hero-inner"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="hero-tag">
                <span className="hero-tag-dot" />
                <span className="hero-kicker">
                  Full‑stack builds for founders who care about craft
                </span>
              </div>
              <h1 className="hero-title">
                Opinionated software for
                {' '}
                <span className="hero-highlight">
                  brands that actually ship.
                </span>
              </h1>
              <p className="hero-subtitle">
                Stack Sprint is a boutique studio led by Ritu Raj Verma.
                Together we design, build, and launch full‑stack products that
                feel considered – not another generic AI template on the
                internet.
              </p>
              <div className="hero-cta">
                <button className="btn btn-primary">
                  Start a project
                  <ArrowRight size={18} style={{ marginLeft: 8 }} />
                </button>
                <button className="btn btn-secondary">
                  View 15‑min intro deck
                </button>
              </div>
              <div className="hero-meta">
                <span>
                  <span className="dot" />
                  5+ years shipping for SaaS, creators, and fitness brands
                </span>
                <span>
                  <span className="dot" />
                  Based in India, working with clients across 15+ countries
                </span>
              </div>
            </div>

            <div className="hero-panel">
              <motion.div
                className="hero-card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                <div className="hero-card-header">
                  <div>
                    <div className="hero-card-title">
                      Current sprint dashboard
                    </div>
                  </div>
                  <span className="hero-card-chip">In production</span>
                </div>
                <div className="hero-stat-grid">
                  <div className="hero-stat">
                    <div className="hero-stat-label">Time to first version</div>
                    <div className="hero-stat-value">3–4 weeks</div>
                    <div className="hero-stat-footnote">for most SaaS MVPs</div>
                  </div>
                  <div className="hero-stat">
                    <div className="hero-stat-label">Performance score</div>
                    <div className="hero-stat-value">98</div>
                    <div className="hero-stat-footnote">
                      Lighthouse on production
                    </div>
                  </div>
                  <div className="hero-stat">
                    <div className="hero-stat-label">Launch reliability</div>
                    <div className="hero-stat-value">100%</div>
                    <div className="hero-stat-footnote">
                      shipped without rollback
                    </div>
                  </div>
                </div>
                <div className="hero-mini-row">
                  <div className="hero-mini-badges">
                    <span className="hero-mini-badge">
                      <Code2 size={14} />
                      TypeScript everywhere
                    </span>
                    <span className="hero-mini-badge">
                      <Brain size={14} />
                      Practical AI integration
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem' }}>
                    One small studio, no layers.
                  </span>
                </div>
                <div className="hero-orbit">
                  <div className="hero-orbit-ring" />
                  <div className="hero-orbit-pill">
                    <TrendingUp size={14} style={{ marginRight: 6 }} />
                    Clients see an average
                    {' '}
                    <strong>2.5× uplift</strong>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="trust-strip">
          <div className="trust-inner">
            <p className="trust-text">Trusted by teams on three continents</p>
            <div className="trust-logos">
              <span className="trust-pill">
                <strong>50+ clients</strong>
                {' '}
                across SaaS, e‑commerce, and creator brands
              </span>
              <span className="trust-pill">
                From early‑stage experiments to
                {' '}
                <strong>enterprise rollouts</strong>
              </span>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-inner">
            <div className="section-header">
              <div>
                <div className="section-kicker">Services</div>
                <h2 className="section-title">What we build together</h2>
              </div>
              <p className="section-subtitle">
                From zero to production: full‑stack web, SaaS products, AI
                workflows, and the invisible plumbing that keeps everything
                fast and reliable.
              </p>
            </div>

            <div className="services-layout">
              <div>
                <p className="services-note">
                  Each engagement is designed as a sprint: small, sharp,
                  opinionated. We pair strong technical foundations with a
                  visual language that matches your brand instead of copying
                  whatever is trending on Dribbble this week.
                </p>
              </div>
              <div className="services-grid">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="service-card"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="service-meta">
                      <div className="service-icon">{service.icon}</div>
                      <span className="service-label">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <div>
                <div className="section-kicker">Method</div>
                <h2 className="section-title">A sprint, not a saga</h2>
              </div>
              <p className="section-subtitle">
                Clear check‑ins, visible progress, and a production‑first
                mindset. You always know what&apos;s shipping next.
              </p>
            </div>
            <div className="process-row">
              <div className="process-timeline">
                {process.map((step, index) => (
                  <motion.div
                    key={step.title}
                    className="process-step"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <div className="step-number">
                      Step
                      {' '}
                      {step.number}
                    </div>
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="section-inner">
            <div className="section-header">
              <div>
                <div className="section-kicker">Selected work</div>
                <h2 className="section-title">Quietly confident launches</h2>
              </div>
              <p className="section-subtitle">
                A few snapshots from products we&apos;ve built and carried into
                production — from first line of code to the first thousand
                paying users.
              </p>
            </div>

            <div className="portfolio-grid">
              {portfolio.map((project, index) => (
                <motion.div
                  key={project.title}
                  className={`portfolio-card ${index > 1 ? 'secondary' : ''}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="portfolio-tag">
                    {project.icon}
                    <span>Case study</span>
                  </div>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-metric">{project.metric}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-inner">
            <div className="section-header">
              <div>
                <div className="section-kicker">Founder</div>
                <h2 className="section-title">Behind the studio</h2>
              </div>
              <p className="section-subtitle">
                One partner, not a passing handoff. You work directly with the
                person who designs, codes, and ships your product.
              </p>
            </div>

            <div className="about-founder">
              <motion.div
                className="founder-image"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="founder-frame" />
                <div className="founder-emoji">👨‍💻</div>
              </motion.div>

              <motion.div
                className="founder-content"
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3>Ritu Raj Verma</h3>
                <p className="founder-role">
                  Full‑Stack Developer & Studio Lead
                </p>
                <p className="founder-bio">
                  Over the past five years I&apos;ve helped startups, creators,
                  and fitness brands turn fuzzy ideas into working software.
                  My background sits at the intersection of engineering,
                  storytelling, and discipline — the same mindset that powers
                  consistent training in the gym and consistent shipping in
                  your product.
                </p>

                <div className="founder-highlights">
                  <div className="highlight-item">
                    <div className="highlight-number">5+</div>
                    <div className="highlight-label">Years in the field</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-number">50+</div>
                    <div className="highlight-label">Clients worldwide</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-number">100+</div>
                    <div className="highlight-label">Projects shipped</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-number">15+</div>
                    <div className="highlight-label">Countries served</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <div>
                <div className="section-kicker">Proof</div>
                <h2 className="section-title">Clients who keep coming back</h2>
              </div>
              <p className="section-subtitle">
                A few notes from the people who trusted us with their first
                launch — and the relaunch after they grew.
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-text">“{testimonial.text}”</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.avatar}</div>
                    <div>
                      <div className="author-name">{testimonial.author}</div>
                      <div className="author-location">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h2 className="cta-title">Ready for your next launch?</h2>
              <p className="cta-subtitle">
                Tell me about your product, your audience, and what “success”
                looks like. I&apos;ll respond with a short Loom walkthrough and
                a suggested first sprint — no fluff, no pressure.
              </p>
            </div>
            <div className="cta-actions">
              <button className="btn btn-primary btn-cta-primary">
                Start a project brief
              </button>
              <button className="btn btn-ghost btn-cta-secondary">
                Or book a 30‑min call
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-section">
            <div className="logo-lockup">
              <div className="logo-mark">S</div>
              <div className="logo-text">
                <span className="logo-primary">Stack Sprint</span>
                <span className="logo-secondary">Full‑Stack Studio</span>
              </div>
            </div>
            <p className="footer-note">
              A small studio helping founders, creators, and teams ship
              thoughtful software — without the agency bloat.
            </p>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Web & product builds</a>
              </li>
              <li>
                <a href="#services">SaaS platforms</a>
              </li>
              <li>
                <a href="#services">AI workflows</a>
              </li>
              <li>
                <a href="#services">Performance & SEO</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Studio</h4>
            <ul>
              <li>
                <a href="#about">About Ritu</a>
              </li>
              <li>
                <a href="#portfolio">Selected work</a>
              </li>
              <li>
                <a href="#contact">Start a project</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Elsewhere</h4>
            <ul>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter / X</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2024 Stack Sprint Studio. Designed & built by
            {' '}
            <strong>Ritu Raj Verma</strong>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
