import ZebLogo from "../assets/Images/zeb.png";
import AvasoftLogo from "../assets/Images/ava-gemini.png";
import Reveal from "../components/Reveal";

const Experience = () => {
  return (
    <Reveal as="section" className="section experience" id="experience">
      <div className="section-inner">
        <div className="experience-header">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Building AI platforms with pragmatic engineering.</h2>
          </div>
          <p>
            Two roles focused on agentic systems, data platforms, and shipping
            reliable AI workflows end-to-end.
          </p>
        </div>
        <div className="experience-list">
          <article className="experience-card">
            <div className="experience-top">
              <div className="experience-company">
                <div className="experience-logo">
                  <img src={ZebLogo} alt="zeb logo" />
                </div>
                <div>
                  <h3>zeb</h3>
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
            </ul>
          </article>
          <article className="experience-card">
            <div className="experience-top">
              <div className="experience-company">
                <div className="experience-logo">
                  <img src={AvasoftLogo} alt="Avasoft logo" />
                </div>
                <div>
                  <h3>Avasoft</h3>
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
          </article>
        </div>
      </div>
    </Reveal>
  );
};

export default Experience;
