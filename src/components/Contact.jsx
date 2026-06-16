import { useEffect, useRef, useState } from "react";
import "./Contact.css";

const SOCIALS = [
  {
    id: "github",
    label: "GitHub",
    handle: "@mdhussain",
    icon: "🐙",
    desc: "View my repositories and open-source work",
    href: "https://github.com/MdHussain22",
    color: "cyan",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Md Hussain",
    icon: "💼",
    desc: "Connect with me professionally",
    href: "https://www.linkedin.com/in/md-hussain-454728379/",
    color: "cyan",
  },
  {
    id: "email",
    label: "Email",
    handle: "mdhussain403913@email.com",
    icon: "📧",
    desc: "Drop me a message anytime",
    href: "mailto:mdhussain403913@email.com",
    color: "green",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("mdhussain@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className={`contact__header ${visible ? "contact--visible" : ""}`}>
          <p className="section-label">// Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="glow-line" style={{ marginTop: "12px", width: "80px" }} />
        </div>

        <div className={`contact__body ${visible ? "contact--visible" : ""}`}>
          {/* Left: message */}
          <div className="contact__left">
            <div className="contact__terminal">
              <div className="terminal-bar">
                <span className="dot dot--red" />
                <span className="dot dot--amber" />
                <span className="dot dot--green" />
                <span className="terminal-title">contact.sh</span>
              </div>
              <div className="terminal-body">
                <p className="terminal-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cmd"> echo "Hello, World!"</span>
                </p>
                <p className="terminal-output">Hello, World!</p>

                <p className="terminal-line" style={{ marginTop: "16px" }}>
                  <span className="t-prompt">$</span>
                  <span className="t-cmd"> whoami</span>
                </p>
                <p className="terminal-output">Md Hussain — CSE Student, React Dev</p>

                <p className="terminal-line" style={{ marginTop: "16px" }}>
                  <span className="t-prompt">$</span>
                  <span className="t-cmd"> cat message.txt</span>
                </p>
                <p className="terminal-output" style={{ lineHeight: "1.9" }}>
                  Open to internships, collaborations,<br />
                  and exciting tech discussions.<br />
                  Let's build something awesome together!
                </p>

                <p className="terminal-line" style={{ marginTop: "16px" }}>
                  <span className="t-prompt">$</span>
                  <span className="t-cursor">_</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: social links */}
          <div className="contact__right">
            <p className="contact__sub">
              Whether it's an internship opportunity, a cool project idea,
              or just saying hi — my inbox is always open.
            </p>

            <div className="contact__socials">
              {SOCIALS.map((s, i) => (
                <a
                  key={s.id}
                  href={s.href}
                  target={s.id !== "email" ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`social-card social-card--${s.color}`}
                  style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className="social-card__left">
                    <span className="social-icon">{s.icon}</span>
                    <div>
                      <p className="social-label">{s.label}</p>
                      <p className="social-handle">{s.handle}</p>
                    </div>
                  </div>
                  <span className="social-arrow">→</span>
                </a>
              ))}
            </div>

            {/* Copy email button */}
            <button
              className={`copy-btn ${copied ? "copy-btn--copied" : ""}`}
              onClick={copyEmail}
            >
              {copied ? "✓ Email Copied!" : "📋 Copy Email Address"}
            </button>
          </div>
        </div>

        {/* Footer line */}
        <div className={`contact__footer ${visible ? "contact--visible" : ""}`}>
          <div className="glow-line" />
          <p className="footer-text">
            <span className="footer-bracket">[</span>
            &nbsp;Designed & Built by{" "}
            <span className="footer-name">Md Hussain</span>
            &nbsp;· 2025 · React + Vite
            &nbsp;
            <span className="footer-bracket">]</span>
          </p>
        </div>
      </div>
    </section>
  );
}