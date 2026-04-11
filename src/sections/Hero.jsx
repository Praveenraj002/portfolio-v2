import Reveal from "../components/Reveal";

const Hero = () => {
  return (
    <Reveal as="section" className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-intro">
          <p className="eyebrow">Praveen Raj</p>
          <h1>
            Building Intelligent systems that talk to data, think in agents, and ship on time.
          </h1>
          <p className="lead">
            Full-stack AI engineer specialising in Building  thoughtful Agentic systems, expressive interfaces, and robust backend services.
            Based in Chennai, Tamil Nadu, India.
          </p>
          <div className="hero-actions">
            <a className="button ghost" href="#contact">
              Start a project
            </a>
            <a className="button ghost" href="#projects">
              Browse Projects
            </a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-card">
            <p className="panel-title">Availability</p>
            <p className="panel-body">
              Open to side projects and technical consultations. Not looking for full-time roles.
            </p>
          </div>
          <div className="panel-card">
            <p className="panel-title">Focus</p>
            <p className="panel-body">
              Agentic AI systems, MCP tooling, robust backend development, and LLM fine-tuning.
            </p>
          </div>
          <div className="panel-card">
            <p className="panel-title">Tools</p>
            <p className="panel-body">
              Python, JavaScript, SQL, Pydantic AI,  Langchain, Langgraph, FastMCP, FastAPI, RAG and AWS
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Hero;
