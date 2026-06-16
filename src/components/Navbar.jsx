import { useState, useEffect } from "react";
import "./Navbar.css";
 
const LINKS = ["Home", "About", "Skills", "Projects", "Contact"];
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        {/* Brand */}
        <div className="navbar__brand">
          <span className="brand-bracket">[</span>
          <span className="brand-name">MH</span>
          <span className="brand-dot">_</span>
          <span className="brand-bracket">]</span>
        </div>
 
        {/* Desktop nav */}
        <nav className="navbar__links">
          {LINKS.map((link) => (
            <button
              key={link}
              className={`nav-link ${active === link ? "nav-link--active" : ""}`}
              onClick={() => handleNav(link)}
            >
              <span className="nav-index">{String(LINKS.indexOf(link) + 1).padStart(2, "0")}.</span>
              {link}
            </button>
          ))}
        </nav>
 
        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
 
      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {LINKS.map((link) => (
            <button
              key={link}
              className={`mobile-link ${active === link ? "mobile-link--active" : ""}`}
              onClick={() => handleNav(link)}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
 