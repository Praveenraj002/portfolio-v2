import { useState } from "react";
import { Link } from "react-router-dom";
import ResumePdf from "../assets/Resume/Praveenraj-Resume-AI-engineering.pdf";
import BrandLogo from "../assets/Images/Pr-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
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
              <Link to="/blog">Blog</Link>
              <Link to="/#contact">Contact</Link>
              <a className="nav-cta nav-resume" href={ResumePdf}>
                Resume
              </a>
            </nav>
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
          <Link to="/blog" onClick={handleClose}>
            Blog
          </Link>
          <Link to="/#contact" onClick={handleClose}>
            Contact
          </Link>
          <a className="nav-cta" href={ResumePdf} onClick={handleClose}>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
