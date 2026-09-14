import { useState } from "react";
import Reveal from "../components/Reveal";

const projects = [
  { projectName: "Claude Code Review Service", projectDescription: "An AI service using the Claude Agent SDK to analyse code quality and security, identify issues, and return actionable feedback—reducing review time by 70%.", techStacks: ["Agentic AI", "Claude Agent SDK", "Azure DevOps", "Python"], year: "2026", projectType: "Company", role: "AI Engineer", private: true },
  { projectName: "Replication Pipeline Agent", projectDescription: "An MCP-driven agent that discovers compatible source-target connections through chat and creates end-to-end data replication pipelines.", techStacks: ["Agentic AI", "FastMCP", "Pydantic AI", "Python"], year: "2026", projectType: "Company", role: "Technical Lead", private: true },
  { projectName: "Rules Creation Agent", projectDescription: "A conversational system for creating, validating, and managing data-quality rules directly against enterprise data.", techStacks: ["Agentic AI", "FastMCP", "Pydantic AI", "RAG"], year: "2026", projectType: "Company", role: "AI Engineer", private: true },
  { projectName: "Empathetic Model Fine-tuning", projectDescription: "Fine-tuned LLaMA 3.2 3B on a culturally competent dataset with SageMaker, reaching 85% response relevance.", techStacks: ["LLM Fine-tuning", "SageMaker", "Python", "Hugging Face"], year: "2025", projectType: "Company", role: "AI Engineer", private: true },
  { projectName: "Credit Report Processing", projectDescription: "An intelligent document-processing system for mortgage workflows that extracts credit scores, liabilities, and banking details.", techStacks: ["FastAPI", "Python", "PostgreSQL", "AWS Bedrock"], year: "2025", projectType: "Company", role: "AI Engineer", private: true },
  { projectName: "Cine Pass", projectDescription: "A full-featured BookMyShow clone built from scratch to sharpen frontend fundamentals and component architecture.", techStacks: ["React", "Tailwind CSS", "JavaScript"], year: "2023", projectType: "Personal", role: "Frontend Developer", code: "https://github.com/Praveenraj002/Cine-pass", demo: "https://cine-pass.netlify.app/" },
];

const INITIAL_PROJECT_COUNT = 4;

const ProjectAction = ({ project }) => project.private ? (
  <span className="project-action private"><span className="material-symbols-rounded" aria-hidden="true">lock</span><span>Private work</span></span>
) : (
  <span className="project-action-group">
    <a href={project.demo} target="_blank" rel="noreferrer">Visit <span className="material-symbols-rounded" aria-hidden="true">north_east</span></a>
    <a href={project.code} target="_blank" rel="noreferrer">Code <span className="material-symbols-rounded" aria-hidden="true">code</span></a>
  </span>
);

const ProjectRow = ({ project, index }) => (
  <Reveal as="article" className="project-row" threshold={0.08}>
    <p className="project-index">{String(index + 1).padStart(2, "0")}</p>
    <div className="project-main">
      <div className="project-heading">
        <h3>{project.projectName}</h3>
        <span>{project.projectType}</span>
      </div>
      <p className="project-description">{project.projectDescription}</p>
      <div className="project-tags">{project.techStacks.map((tech) => <span key={tech}>{tech}</span>)}</div>
    </div>
    <div className="project-meta">
      <p>{project.role}</p>
      <p>{project.year}</p>
      <ProjectAction project={project} />
    </div>
  </Reveal>
);

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = projects.slice(0, INITIAL_PROJECT_COUNT);
  const additionalProjects = projects.slice(INITIAL_PROJECT_COUNT);
  const visibleProjectCount = showAll ? projects.length : initialProjects.length;

  return (
    <section className="section projects" id="projects">
      <div className="section-inner">
        <Reveal className="section-heading" threshold={0.08}>
          <p className="eyebrow">01 / Projects</p>
          <h2>Selected work</h2>
          <p>Production systems across agentic AI, enterprise data, and full-stack products.</p>
        </Reveal>
        <div className="project-list" id="project-list">
          {initialProjects.map((project, index) => <ProjectRow key={project.projectName} project={project} index={index} />)}
          <div
            className={`project-expand${showAll ? " open" : ""}`}
            aria-hidden={!showAll}
            inert={!showAll ? "" : undefined}
          >
            <div className="project-expand-inner">
              {additionalProjects.map((project, index) => (
                <ProjectRow
                  key={project.projectName}
                  project={project}
                  index={index + INITIAL_PROJECT_COUNT}
                />
              ))}
            </div>
          </div>
        </div>
        <Reveal className="projects-footer" threshold={0.08}>
          <p className="project-count">Showing {visibleProjectCount} of {projects.length} projects</p>
          {projects.length > INITIAL_PROJECT_COUNT && (
            <button
              className="projects-toggle"
              type="button"
              aria-expanded={showAll}
              aria-controls="project-list"
              onClick={() => setShowAll((current) => !current)}
            >
              <span className="projects-toggle-label" aria-hidden="true">
                <span>Show all</span>
                <span>Show less</span>
              </span>
              <span className="sr-only">{showAll ? "Show less" : "Show all"}</span>
              <span className="material-symbols-rounded" aria-hidden="true">south</span>
            </button>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
