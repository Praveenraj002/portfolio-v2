import Reveal from "../components/Reveal";

const Contact = () => (
  <section className="contact" id="contact">
    <Reveal className="contact-inner reveal-stagger">
      <p className="eyebrow">04 / Contact</p>
      <div className="contact-prompt">
        <h2>Have a system worth simplifying?</h2>
        <a className="split-button" href="mailto:praveenrajslbusiness@gmail.com">
          <span className="button-copy"><span>Start a project</span><span aria-hidden="true">Start a project</span></span>
          <span className="button-arrow material-symbols-rounded" aria-hidden="true">arrow_forward</span>
        </a>
      </div>
      <div className="contact-details">
        <div><p>Projects &amp; consulting</p><a href="mailto:praveenrajslbusiness@gmail.com">praveenrajslbusiness@gmail.com</a></div>
        <div><p>Full-time opportunities</p><a href="mailto:reachpraveenrajsl@gmail.com">reachpraveenrajsl@gmail.com</a></div>
        <div className="contact-socials">
          <p>Elsewhere</p>
          <span>
            <a href="https://www.linkedin.com/in/praveenraj002/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Praveenraj002" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://x.com/rajpraveen002" target="_blank" rel="noreferrer">X</a>
            <a href="https://www.instagram.com/praveenraj.webdev/" target="_blank" rel="noreferrer">Instagram</a>
          </span>
        </div>
      </div>
    </Reveal>
  </section>
);

export default Contact;
