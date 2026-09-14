import ZebLogo from "../assets/Images/zeb.png";
import AvasoftLogo from "../assets/Images/ava-gemini.png";
import ConcreateLogo from "../assets/Images/concreate.png";
import Reveal from "../components/Reveal";

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="section-inner">
        <Reveal className="experience-header" threshold={0.08}>
          <div>
            <p className="eyebrow">02 / Career</p>
            <h2>Experience</h2>
          </div>
          <p>
            Three roles focused on agentic systems, data platforms, and shipping
            reliable AI workflows end-to-end.
          </p>
        </Reveal>
        <div className="experience-list">
          <Reveal as="article" className="experience-card" delay={40}>
            <div className="experience-top">
              <div className="experience-company">
                <a
                  className="experience-logo"
                  href="https://zeb.co/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open zeb website"
                >
                  <img src={ZebLogo} alt="zeb logo" />
                </a>
                <div>
                  <h3>
                    <a
                      href="https://zeb.co/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      zeb
                    </a>
                  </h3>
                  <p className="experience-role">
                    Software Engineer · AI Platform Engineering
                  </p>
                </div>
              </div>
              <div className="experience-meta">
                <p>Chennai, TN</p>
                <p>Feb 2026 - Present</p>
              </div>
            </div>
            <ul className="experience-points">
              <li>
                Designed agentic AI systems with MCP tools integrated into
                enterprise data platforms to automate complex data engineering
                and quality operations.
              </li>
              <li>
                Built a Data Integration Replication Pipeline Creation Agent
                enabling conversational discovery of compatible source-target
                connections and automated end-to-end replication setup.
              </li>
              <li>
                Implemented MCP orchestration for connection validation,
                pipeline configuration, and execution to eliminate manual setup.
              </li>
              <li>
                Delivered a Data Quality Rules Creation Agent that creates,
                validates, and manages rules via chat, cutting manual effort by
                90%.
              </li>
              <li>
                Developed an automated code review service that analyses code
                quality and security, identifies potential issues, and provides
                actionable feedback.
              </li>
            </ul>
          </Reveal>
          <Reveal as="article" className="experience-card" delay={70}>
            <div className="experience-top">
              <div className="experience-company">
                <a
                  className="experience-logo"
                  href="https://www.avasoft.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Avasoft website"
                >
                  <img src={AvasoftLogo} alt="Avasoft logo" />
                </a>
                <div>
                  <h3>
                    <a
                      href="https://www.avasoft.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Avasoft
                    </a>
                  </h3>
                  <p className="experience-role">
                    Software Engineer · AI/ML Team
                  </p>
                </div>
              </div>
              <div className="experience-meta">
                <p>Chennai, TN</p>
                <p>Dec 2023 - Jan 2026</p>
              </div>
            </div>
            <ul className="experience-points">
              <li>
                Fine-tuned LLMs with curated datasets to improve domain
                performance, increasing response relevance by 85%.
              </li>
              <li>
                Deployed models on AWS SageMaker using Studio, notebooks, and
                inference endpoints, boosting customer satisfaction.
              </li>
              <li>
                Delivered full-stack AI solutions with FastAPI and PostgreSQL,
                applying RAG and prompt engineering.
              </li>
              <li>
                Built scalable AI apps with AWS services including Bedrock,
                SageMaker, S3, Textract, and Lambda.
              </li>
              <li>
                Led projects end-to-end from requirements to delivery with 100%
                on-time execution and peer enablement.
              </li>
            </ul>
          </Reveal>
          <Reveal as="article" className="experience-card" delay={70}>
            <div className="experience-top">
              <div className="experience-company">
                <a
                  className="experience-logo"
                  href="https://www.concreate.in/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Concreate website"
                >
                  <img src={ConcreateLogo} alt="Concreate logo" />
                </a>
                <div>
                  <h3>
                    <a
                      href="https://www.concreate.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Concreate
                    </a>
                  </h3>
                  <p className="experience-role">
                    Web Developer · Internship
                  </p>
                </div>
              </div>
              <div className="experience-meta">
                <p>Chennai, TN</p>
                <p>Sep 2023 - Sep 2023</p>
              </div>
            </div>
            <ul className="experience-points">
              <li>
                Developed responsive client websites, translating requirements into accessible front-end experiences aligned with each brand and its business goals.
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
