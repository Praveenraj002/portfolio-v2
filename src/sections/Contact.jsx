import Reveal from "../components/Reveal";

const Contact = () => {
  return (
    <Reveal as="section" className="section contact" id="contact">
      <div className="section-inner contact-inner">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Have a problem worth solving? Let&apos;s talk.</h2>
          <p>
            If you have a product that needs clarity, an engineer who can take it from idea to production, or an idea that should feel more alive, I&apos;m here to help.
          </p>
        </div>
        <div className="contact-card">
          <p className="meta-label">Email</p>
          <a href="mailto:praveenrajslbusiness@gmail.com">
            praveenrajslbusiness@gmail.com
          </a>
          <p className="meta-label">Elsewhere</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/praveenraj002/">LinkedIn</a>
            <a href="https://github.com/Praveenraj002">GitHub</a>
            <a href="https://twitter.com/rajpraveen002">Twitter</a>
            <a href="https://www.instagram.com/praveenraj.webdev/">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Contact;
