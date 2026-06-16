import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const SKILLS = [
  { name: "HTML",       icon: "🌐", level: 88, color: "cyan",  desc: "Semantic, accessible markup" },
  { name: "CSS",        icon: "🎨", level: 82, color: "cyan",  desc: "Layouts, animations, responsive" },
  { name: "JavaScript", icon: "⚡", level: 75, color: "amber", desc: "ES6+, DOM, async/await" },
  { name: "React",      icon: "⚛️", level: 72, color: "cyan",  desc: "Hooks, Router, Context API" },
  { name: "Java",       icon: "☕", level: 80, color: "amber", desc: "OOP, Collections, Streams" },
  { name: "DSA",        icon: "📊", level: 70, color: "green", desc: "Arrays, Trees, Graphs, DP" },
  { name: "Git",        icon: "🔀", level: 76, color: "green", desc: "Version control, branching" },
  { name: "GitHub",     icon: "🐙", level: 78, color: "green", desc: "Open source, collaboration" },
];

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <div className={`skills__header ${visible ? "skills--visible" : ""}`}>
          <p className="section-label">// Skills</p>
          <h2 className="section-title">Tech Arsenal</h2>
          <div className="glow-line" style={{ marginTop: "12px", width: "80px" }} />
        </div>

        <div className={`skills__grid ${visible ? "skills--visible" : ""}`}>
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className={`skill-card skill-card--${skill.color}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="skill-card__glow" />
              <div className="skill-card__inner">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.desc}</p>

                {/* Progress bar */}
                <div className="skill-bar">
                  <div
                    className="skill-bar__fill"
                    style={{
                      width: visible ? `${skill.level}%` : "0%",
                      transitionDelay: `${0.3 + i * 0.08}s`,
                    }}
                  />
                </div>
                <div className="skill-level">
                  <span>PROFICIENCY</span>
                  <span>{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}