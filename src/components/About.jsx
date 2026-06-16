import { useEffect, useRef, useState } from "react";
import "./About.css";

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={ref}>
      <div className={`container about__inner ${visible ? "about--visible" : ""}`}>
        {/* Section heading */}
        <div className="about__heading">
          <p className="section-label">// About Me</p>
          <h2 className="section-title">Who Am I?</h2>
          <div className="glow-line" style={{ marginTop: "12px", width: "80px" }} />
        </div>

        <div className="about__grid">
          {/* Animated card */}
          <div className="about__card">
            <div className="card-scan" />
            <div className="card-corner card-corner--tl" />
            <div className="card-corner card-corner--br" />

            <div className="card-header">
              <span className="card-id">[ ID: MH-CSE-2024 ]</span>
              <span className="card-status">● ACTIVE</span>
            </div>

            <div className="card-avatar">
              <div className="avatar-ring" />
              <div className="avatar-inner">MH</div>
            </div>

            <h3 className="card-name">Md Hussain</h3>
            <p className="card-role">Computer Science Engineering</p>
            <p className="card-uni">Integral University · Lucknow</p>

            <div className="card-divider" />

            <div className="card-tags">
              {["React Dev", "Java", "DSA", "2nd Year"].map((tag) => (
                <span key={tag} className="card-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Text content */}
          <div className="about__text">
            <p className="about__para">
              I am a <span className="highlight-cyan">Computer Science student</span> passionate about
              building modern web applications and solving problems through code.
            </p>
            <p className="about__para">
              My journey started with curiosity about how websites work —
              now I build them. Currently sharpening my skills in{" "}
              <span className="highlight-green">React, Java, and Data Structures</span>{" "}
              while targeting placement at top tech firms like TCS and Wipro.
            </p>
            <p className="about__para">
              When I'm not coding, I'm deep into geopolitics, nature documentaries,
              or grinding competitive programming problems.
            </p>

            <div className="about__details">
              <div className="detail-row">
                <span className="detail-key">Location</span>
                <span className="detail-val">Lucknow, India</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">University</span>
                <span className="detail-val">Integral University</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">Degree</span>
                <span className="detail-val">B.Tech CSE</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">Semester</span>
                <span className="detail-val">4th (2nd Year)</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}