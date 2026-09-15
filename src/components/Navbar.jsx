import { useEffect, useState } from "react";
import ResumePdf from "../assets/Resume/praveenraj-resume.pdf";
import BrandLogo from "../assets/Images/Pr-logo.png";

const links = [["Home", "#top"], ["Projects", "#projects"], ["Experience", "#experience"], ["About", "#about"], ["Contact", "#contact"]];

const getInitialTheme = () => {
  try {
    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The selected theme still applies when browser storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === "light" ? "dark" : "light");
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <header className="nav">
      <div className="nav-shell">
        <div className="nav-inner">
          <a className="nav-logo" href="#top" aria-label="Praveen Raj home">
            <img src={BrandLogo} alt="" />
            {/* <span>praveee.</span> */}
          </a>
          <div className="nav-actions">
            <nav className="nav-links" aria-label="Primary navigation">
              {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
              <a href={ResumePdf} target="_blank" rel="noreferrer">Resume</a>
            </nav>
            <button className={"nav-toggle " + (isOpen ? "open" : "")} type="button" aria-label="Toggle navigation menu" aria-expanded={isOpen} aria-controls="mobile-nav" onClick={() => setIsOpen((open) => !open)}><span /><span /><span /></button>
          </div>
            <button className="theme-toggle" type="button" aria-label={`Switch to ${nextTheme} mode`} title={`Switch to ${nextTheme} mode`} onClick={toggleTheme}>
              <span className="material-symbols-rounded" aria-hidden="true">{theme === "light" ? "dark_mode" : "light_mode"}</span>
            </button>
        </div>
        <nav id="mobile-nav" className={"nav-mobile " + (isOpen ? "open" : "")} aria-label="Mobile navigation" aria-hidden={!isOpen} inert={!isOpen ? "" : undefined}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a href={ResumePdf} target="_blank" rel="noreferrer" onClick={closeMenu}>Resume</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
