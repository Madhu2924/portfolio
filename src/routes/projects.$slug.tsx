import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import "../portfolio.css";
import { projects } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects[params.slug as keyof typeof projects];
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Madhumitha MJ" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Madhumitha MJ`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function SiteNav() {
  return (
    <header className="nav scrolled">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">M</span>
          <span className="brand-name">
            Madhumitha<span className="dot">.</span>
          </span>
        </Link>
        <nav className="nav-links">
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#projects">Projects</a>
          <a href="/#certifications">Certifications</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <a href="/#contact" className="btn btn-primary btn-sm nav-cta">
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="brand">
            <span className="brand-mark">M</span>
            <span className="brand-name">
              Madhumitha<span className="dot">.</span>
            </span>
          </Link>
          <p>Aspiring Data Analyst</p>
        </div>
        <nav className="footer-links">
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="social-row">
          <a
            href="https://www.linkedin.com/in/madhumitha-m-j-273274322"
            target="_blank"
            rel="noopener"
            className="social-btn"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a href="mailto:madhusakthi0126@gmail.com" className="social-btn" aria-label="Email">
            ✉
          </a>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Madhumitha MJ. All rights reserved.</span>
        <span>Designed with ❤️ using modern web technologies</span>
      </div>
    </footer>
  );
}

function ProjectNotFound() {
  return (
    <>
      <SiteNav />
      <main className="section" style={{ paddingTop: 160, textAlign: "center" }}>
        <div className="container">
          <p className="eyebrow center">404</p>
          <h1>Project not found</h1>
          <p className="lead">That case study doesn’t exist (yet).</p>
          <Link to="/" className="btn btn-dark btn-sm">
            Back to portfolio
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <>
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="section" style={{ paddingTop: 150, paddingBottom: 60, position: "relative" }}>
          <div className="hero-shapes" aria-hidden="true">
            <span className="shape s1" />
            <span className="shape s2" />
          </div>
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <Link to="/" className="btn btn-ghost btn-sm" style={{ paddingLeft: 0 }}>
              ← Back to portfolio
            </Link>
            <p className="eyebrow" style={{ marginTop: 16 }}>
              {project.kicker}
            </p>
            <h1 style={{ maxWidth: "22ch", fontSize: "clamp(1.9rem,3.6vw,2.9rem)", letterSpacing: "-.02em" }}>
              {project.title}
            </h1>
            <p className="lead" style={{ maxWidth: "70ch" }}>
              {project.summary}
            </p>
            <div className="chip-row" style={{ marginTop: 22 }}>
              {project.tools.map((t) => (
                <span className="chip chip-outline" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* KPI strip */}
        <section className="section alt" style={{ paddingTop: 50, paddingBottom: 50 }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 18,
              }}
            >
              {project.kpis.map((k) => (
                <div className="kpi-card" key={k.label} style={{ textAlign: "center" }}>
                  <div className="kpi-num" style={{ fontSize: "1.7rem" }}>
                    {k.value}
                  </div>
                  <div className="kpi-label" style={{ fontSize: ".74rem", marginTop: 4 }}>
                    {k.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case study content */}
        <section className="section" style={{ paddingTop: 70 }}>
          <div className="container">
            <div style={{ display: "grid", gap: 22 }}>
              {project.sections.map((s, i) => (
                <article className="service-card" key={s.heading} style={{ maxWidth: 900 }}>
                  <span className="mini-ic">{["🎯", "🛠️", "📊", "💡", "🚀"][i % 5]}</span>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: 10 }}>{s.heading}</h3>
                  {s.paragraphs?.map((p) => (
                    <p key={p} style={{ fontSize: ".95rem" }}>
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul style={{ paddingLeft: 20, display: "grid", gap: 8, margin: 0 }}>
                      {s.bullets.map((b) => (
                        <li key={b} style={{ fontSize: ".93rem", lineHeight: 1.7, color: "var(--text-soft)" }}>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            <div className="project-actions" style={{ marginTop: 34 }}>
              <Link to="/" className="btn btn-outline btn-sm">
                All projects
              </Link>
              <a href="/#contact" className="btn btn-dark btn-sm">
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
