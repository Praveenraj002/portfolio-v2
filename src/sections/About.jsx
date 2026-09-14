import Reveal from "../components/Reveal";

const About = () => {
  return (
    <section className="section about" id="about">
      <Reveal className="section-inner split" threshold={0.08}>
        <div>
          <p className="eyebrow">03 / Profile</p>
          <h2>About me</h2>
        </div>
        <div className="about-body">
          <p>
            I&apos;m a software engineer who builds things that think. My focus sits at the intersection of AI systems, backend infrastructure, and the kind of engineering that makes complex operations feel effortless to the people using them.
          </p>
          <p>
            Beyond my full-time work, I build focused systems that help people
            run their studios, document their thinking, and stay consistent as
            they grow. I care about readable code, humane timelines, and making
            complex software feel quieter.
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
              <p>Finance, photography, and reading</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;
