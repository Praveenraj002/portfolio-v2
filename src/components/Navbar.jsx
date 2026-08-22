import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResumePdf from "../assets/Resume/Praveenraj-Resume-AI-engineering.pdf";
import BrandLogo from "../assets/Images/Pr-logo.png";

const whiteModeJokes = [
  "Dark mode is in the backlog. White mode has passed every review.",
  "Request denied: brightness is a feature, not a bug.",
  "Dark mode is still compiling. Please enjoy the daylight build.",
  "White mode is locked in. Your eyes are now part of the QA team.",
  "Dark mode is in the works. Please wait for the sunrise.",
  "You're a developer, You will adapt.",
  "I close the issue as 'Won't Fix'.",
  "Thats a v2 problem. there is no v2.",
  "Add it yourself. PRs are welcome. (they are not)",
  "Ask again at 3 am thats when I fix.",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [themeJoke, setThemeJoke] = useState("");

  useEffect(() => {
    if (!themeJoke) return undefined;
    const timeout = window.setTimeout(() => setThemeJoke(""), 4600);
    return () => window.clearTimeout(timeout);
  }, [themeJoke]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleThemeToggle = () => {
    setThemeJoke(
      whiteModeJokes[Math.floor(Math.random() * whiteModeJokes.length)],
    );
  };

  return (
    <header className="nav">
      <div className={`nav-shell ${isOpen ? "menu-open" : ""}`}>
        <div className="nav-inner">
          <Link className="nav-logo" to="/#top" aria-label="Praveen Raj home">
            <img src={BrandLogo} alt="Praveen Raj logo" />
          </Link>
          <div className="nav-actions">
            <nav className="nav-links">
              <Link to="/#top">Home</Link>
              <Link to="/#projects">Projects</Link>
              <Link to="/#experience">Experience</Link>
              <Link to="/#about">About</Link>
              {/* <Link to="/blog">Blog</Link> */}
              <Link to="/#contact">Contact</Link>
              <a className="" href={ResumePdf}>
                Resume
              </a>
            </nav>
            <button
              className="theme-toggle nav-cta nav-resume"
              type="button"
              onClick={handleThemeToggle}
              aria-label="Try to switch to dark mode"
            >
              ☾ dark mode
            </button>
            <button
              className={`nav-toggle ${isOpen ? "open" : ""}`}
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={handleToggle}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <nav
          id="mobile-nav"
          className={`nav-mobile ${isOpen ? "open" : ""}`}
        >
          <Link to="/#top" onClick={handleClose}>
            Home
          </Link>
          <Link to="/#projects" onClick={handleClose}>
            Projects
          </Link>
          <Link to="/#experience" onClick={handleClose}>
            Experience
          </Link>
          <Link to="/#about" onClick={handleClose}>
            About
          </Link>
          {/* <Link to="/blog" onClick={handleClose}>
            Blog
          </Link> */}
          <Link to="/#contact" onClick={handleClose}>
            Contact
          </Link>
          <a className="nav-cta" href={ResumePdf} onClick={handleClose}>
            Resume
          </a>
        </nav>
        {themeJoke && (
          <p className="theme-joke" role="status">
            <span aria-hidden="true">{"// "}</span>{themeJoke}
          </p>
        )}
      </div>
    </header>
  );
};

export default Navbar;
