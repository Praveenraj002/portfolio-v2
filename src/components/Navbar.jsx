import { useState } from "react";
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
      <div className="nav-inner">
        <a className="nav-logo" href="#top" aria-label="Praveen Raj home">
          <img src={BrandLogo} alt="Praveen Raj logo" />
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className="nav-links">
          <a href="#top">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta nav-resume" href={ResumePdf}>
          Resume
        </a>
      </div>
      <nav className={`nav-mobile ${isOpen ? "open" : ""}`}>
        <a href="#top" onClick={handleClose}>
          Home
        </a>
        <a href="#projects" onClick={handleClose}>
          Projects
        </a>
        <a href="#experience" onClick={handleClose}>
          Experience
        </a>
        <a href="#about" onClick={handleClose}>
          About
        </a>
        <a href="#contact" onClick={handleClose}>
          Contact
        </a>
        <a className="nav-cta" href={ResumePdf} onClick={handleClose}>
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
