import Reveal from "../components/Reveal";
import { Codex } from "@lobehub/icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Reveal
      as="footer"
      className="footer"
      threshold={0.05}
      rootMargin="0px 0px 0px 0px"
    >
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-built">
            <span>Built with</span>
            <a
              href="https://chatgpt.com/codex/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Codex website"
            >
              <Codex.Avatar size={24} />
            </a>
          </div>
          <p>© {currentYear} All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#top" className="eyebrow">Go to top ^</a>
        </div>
      </div>
    </Reveal>
  );
};

export default Footer;
