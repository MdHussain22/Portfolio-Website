import { useEffect, useRef, useState } from "react";
import "./Projects.css";

const PROJECTS = [
  {
    id: "01",
    title: "Zakat Calculator",
    status: "LIVE",
    type: "Web App",
    desc: "An Islamic finance tool to calculate Zakat on wealth, gold, silver, and business assets. Clean UI with real-time calculation.",
    tags: ["React", "JavaScript", "CSS"],
    icon: "🕌",
    color: "cyan",
    live: "https://zakat-calculator-one.vercel.app/",
    github: "https://github.com/MdHussain22",
    featured: true,
  },
];

const UPCOMING = [
  {
    id: "02",
    title: "Expense Tracker",
    icon: "📊",
    desc: "Track daily spending, visualize monthly budgets, and get insights on your financial habits.",
    tags: ["React", "Chart.js", "LocalStorage"],
    color: "amber",
  },
  {
    id: "03",
    title: "DSA Tracker",
    icon: "📈",
    desc: "Track LeetCode progress, topic-wise stats, and daily streak for placement preparation.",
    tags: ["React", "Java", "Firebase"],
    color: "green",
  },
  {
    id: "04",
    title: "AI Resume Builder",
    icon: "🤖",
    desc: "Generate ATS-friendly resumes powered by AI. Export to PDF in seconds.",
    tags: ["React", "OpenAI API", "Node.js"],
    color: "cyan",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <div className={`projects__header ${visible ? "proj--visible" : ""}`}>
          <p className="section-label">// Projects</p>
          <h2 className="section-title">What I've Built</h2>
          <div className="glow-line" style={{ marginTop: "12px", width: "80px" }} />
        </div>

        {/* Featured Projects */}
        <div className={`projects__featured ${visible ? "proj--visible" : ""}`}>
          {PROJECTS.map((proj, i) => (
            <div
              key={proj.id}
              className={`proj-card proj-card--featured proj-card--${proj.color}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {proj.featured && (
                <div className="proj-badge">◈ FEATURED PROJECT</div>
              )}

              <div className="proj-card__top">
                <div className="proj-meta">
                  <span className="proj-id">[ {proj.id} ]</span>
                  <span className={`proj-status proj-status--${proj.status === "LIVE" ? "live" : "wip"}`}>
                    ● {proj.status}
                  </span>
                </div>
                <div className="proj-icon">{proj.icon}</div>
              </div>

              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-desc">{proj.desc}</p>

              <div className="proj-tags">
                {proj.tags.map((tag) => (
                  <span key={tag} className="proj-tag">{tag}</span>
                ))}
              </div>

              <div className="proj-links">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-link proj-link--primary"
                >
                  🕌 Live Demo
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-link proj-link--secondary"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming / Future Projects */}
        <div className={`projects__upcoming-header ${visible ? "proj--visible" : ""}`}>
          <p className="upcoming-label">
            <span className="label-line" />
            FUTURE PROJECTS
            <span className="label-line" />
          </p>
        </div>

        <div className={`projects__grid ${visible ? "proj--visible" : ""}`}>
          {UPCOMING.map((proj, i) => (
            <div
              key={proj.id}
              className={`proj-card proj-card--upcoming proj-card--${proj.color}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="proj-card__top">
                <span className="proj-id">[ {proj.id} ]</span>
                <span className="proj-coming">COMING SOON</span>
              </div>

              <div className="proj-icon proj-icon--sm">{proj.icon}</div>
              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-desc">{proj.desc}</p>

              <div className="proj-tags">
                {proj.tags.map((tag) => (
                  <span key={tag} className="proj-tag">{tag}</span>
                ))}
              </div>

              {/* Progress bar indicating "planned" */}
              <div className="proj-progress">
                <div className="proj-progress__bar" />
                <span className="proj-progress__label">PLANNING PHASE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}