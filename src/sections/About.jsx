import Reveal from "../components/Reveal";

const About = () => {
  return (
    <Reveal as="section" className="section about" id="about">
      <div className="section-inner split">
        <div>
          <p className="eyebrow">About</p>
          <h2>Designing with restraint, shipping with intention.</h2>
        </div>
        <div className="about-body">
          <p>
            I&apos;m a software engineer who builds things that think. My focus sits at the intersection of AI systems, backend infrastructure, and the kind of engineering that makes complex operations feel effortless to the people using them.
          </p>
          <p>
            Beyond full-time company related engagements, I build small systems that help people
            run their studios, document their thinking, and stay consistent as
            they grow. I care about readable code, humane timelines, and making
            the web feel quieter.
          </p>
          <div className="about-meta">
            <div>
              <p className="meta-label">Based in</p>
              <p>Chennai, TN, India</p>
            </div>
            <div>
              <p className="meta-label">Working on</p>
              <p>Agentic AI systems & MCP tooling</p>
            </div>
            <div>
              <p className="meta-label">Other interests</p>
              <p>Finance, Photography, and Reading Books</p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default About;
