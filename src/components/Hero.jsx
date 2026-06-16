import { useState, useEffect } from "react";
import "./Hero.css";
 
const ROLES = [
  "React Developer",
  "Java Programmer",
  "DSA Learner",
  "Full-Stack Enthusiast",
];
 
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    setVisible(true);
  }, []);
 
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
 
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
 
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);
 
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <section className="hero" id="home">
      {/* Corner decorations */}
      <div className="hero__corner hero__corner--tl" />
      <div className="hero__corner hero__corner--tr" />
      <div className="hero__corner hero__corner--bl" />
      <div className="hero__corner hero__corner--br" />
 
      <div className={`hero__content container ${visible ? "hero__content--visible" : ""}`}>
        {/* Status badge */}
        <div className="hero__badge">
          <span className="badge-dot" />
          <span>AVAILABLE FOR OPPORTUNITIES</span>
        </div>
 
        {/* Name */}
        <h1 className="hero__name">
          <span className="name-hi">Hi, I'm</span>
          <br />
          <span className="name-main">Md Hussain</span>
        </h1>
 
        {/* Typewriter role */}
        <div className="hero__role">
          <span className="role-prefix">&gt; </span>
          <span className="role-text">{displayed}</span>
          <span className="role-cursor">|</span>
        </div>
 
        {/* Description */}
        <p className="hero__desc">
          Computer Science student at Integral University, Lucknow.<br />
          Building modern web apps. Writing clean Java. Cracking DSA.
        </p>
 
        {/* HUD stats bar */}
        <div className="hero__stats">
          <div className="hud-stat">
            <span className="hud-val">4th</span>
            <span className="hud-label">Semester</span>
          </div>
          <div className="hud-divider" />
          <div className="hud-stat">
            <span className="hud-val">6+</span>
            <span className="hud-label">Projects</span>
          </div>
          <div className="hud-divider" />
          <div className="hud-stat">
            <span className="hud-val">CSE</span>
            <span className="hud-label">Branch</span>
          </div>
        </div>
 
        {/* Buttons */}
        <div className="hero__buttons">
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            <span className="btn-icon">◈</span>
            View Projects
          </button>
          <a
            className="btn-secondary"
            href="/resume.pdf"
            download
          >
            <span className="btn-icon">↓</span>
            Download Resume
          </a>
        </div>
      </div>
 
      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
}
 