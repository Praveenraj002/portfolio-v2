import { useEffect, useRef, useState } from "react";
import { FiCode, FiExternalLink, FiLock } from "react-icons/fi";
import Reveal from "../components/Reveal";

const projects = [
  {
    projectName: "Replication Pipeline agent",
    projectDescription:
      "An agentic, MCP-driven system that lets users discover compatible source–target connections via a chatbot and automatically spin up end-to-end data replication pipelines.",
    techStacks: ["Agentic AI", "FastMCP", "Pydantic AI", "Python"],
    year: "2026",
    projectType: "Company",
    status: "Live",
    role: "Technical Lead",
    private: true,
  },
  {
    projectName: "Rules Creation agent",
    projectDescription:
      "An agentic, MCP-driven system that lets users create, validate, and manage data quality rules against their data entirely through a chat interface.",
    techStacks: ["Agentic AI", "FastMCP", "Pydantic AI", "Python", "AWS S3 Vectors", "RAG"],
    year: "2026",
    projectType: "Company",
    role: "AI Engineer",
    private: true,
  },
  {
    projectName: "Empathetic Model Fine-tuning",
    projectDescription:
      "Fine-tuned LLaMA 3.2 3B on a culturally competent, empathetic dataset using AWS SageMaker Studio and Notebook Instances achieving 85% on response relevance.",
    techStacks: ["LLM Fine-tuning", "AWS Sagemaker", "Python", "AWS S3", "Hugging Face"],
    year: "2025",
    projectType: "Company",
    role: "AI Engineer",
    private: true,
  },
  {
    projectName: "Credit Report Processing",
    projectDescription:
      "An intelligent document processing system for mortgage workflows that let users upload credit reports from any provider; the system extracts credit scores, liabilities, and banking details.",
    techStacks: ["FastAPI", "Python", "AWS S3", "PostgreSQL", "AWS Bedrock"],
    year: "2025",
    projectType: "Company",
    role: "AI Engineer",
    private: true,
  },
  {
    projectName: "Cine Pass",
    projectDescription:
      "A full-featured BookMyShow clone built from scratch. A self-directed project to sharpen frontend fundamentals and component architecture.",
    techStacks: ["React JS", "Tailwind CSS", "Clone", "Javascript", "Google Fonts"],
    year: "2023",
    projectType: "Personal",
    role: "Frontend Developer",
    code: "https://github.com/Praveenraj002/Cine-pass",
    demo: "https://cine-pass.netlify.app/",
  },
];

const ProjectsSection = () => {
  const viewportRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const maxProjectIndex = Math.max(projects.length - projectsPerPage, 0);
  const hasCarousel = projects.length > projectsPerPage;

  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setProjectsPerPage(1);
        return;
      }

      if (window.matchMedia("(max-width: 920px)").matches) {
        setProjectsPerPage(2);
        return;
      }

      setProjectsPerPage(3);
    };

    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);

    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  useEffect(() => {
    setCurrentProject((projectIndex) =>
      Math.min(projectIndex, maxProjectIndex),
    );
  }, [maxProjectIndex]);

  const scrollToProject = (projectIndex) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const nextIndex = Math.min(Math.max(projectIndex, 0), maxProjectIndex);
    const card = viewport.querySelector(".projects-card");
    const track = viewport.querySelector(".projects-track");
    const gap = track ? parseFloat(getComputedStyle(track).columnGap) : 0;
    const cardWidth = card ? card.getBoundingClientRect().width : 0;

    viewport.scrollTo({
      left: nextIndex * (cardWidth + gap),
      behavior: "smooth",
    });
    setCurrentProject(nextIndex);
  };

  const handleProjectScroll = () => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const card = viewport.querySelector(".projects-card");
    const track = viewport.querySelector(".projects-track");
    const gap = track ? parseFloat(getComputedStyle(track).columnGap) : 0;
    const cardWidth = card ? card.getBoundingClientRect().width : 0;
    const step = cardWidth + gap;

    if (!step) {
      return;
    }

    setCurrentProject(
      Math.min(Math.round(viewport.scrollLeft / step), maxProjectIndex),
    );
  };

  const handlePreviousProject = () => {
    scrollToProject(currentProject - 1);
  };

  const handleNextProject = () => {
    scrollToProject(currentProject + 1);
  };

  return (
    <Reveal as="section" className="section projects" id="projects">
      <div className="section-inner">
        <p className="eyebrow">Projects</p>
        <div className="projects-header">
          <h2>Selected work, grown slowly and shipped deliberately.</h2>
          <p>
            A mix of client collaborations and self-directed projects. Each one
            is a system with its own cadence, learnings, and long-term
            intent.
          </p>
        </div>
        <div className="projects-carousel">
          <div
            className="projects-viewport"
            ref={viewportRef}
            onScroll={handleProjectScroll}
          >
            <div className="projects-track">
              {projects.map((project, index) => (
                <article
                  className="projects-card"
                  key={`${project.projectName}-${index}`}
                  style={{ "--project-index": index }}
                >
                  <div className="projects-card-top">
                    <div>
                      <h3>{project.projectName}</h3>
                      <p className="projects-card-meta">
                        {project.role} |{" "}
                        {project.year}
                      </p>
                    </div>
                    <span className="pill">{project.projectType}</span>
                  </div>
                  <p className="projects-card-description">
                    {project.projectDescription}
                  </p>
                  <div className="projects-card-links">
                    {project.private ? (
                      <span className="projects-card-link private">
                        <FiLock aria-hidden="true" />
                        Private
                      </span>
                    ) : (
                      <>
                        <a
                          className="projects-card-link"
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiExternalLink aria-hidden="true" />
                          Visit
                        </a>
                        <a
                          className="projects-card-link"
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiCode aria-hidden="true" />
                          Code
                        </a>
                      </>
                    )}
                  </div>
                  <div className="pill-row">
                    {project.techStacks.map((techStack) => (
                      <span key={techStack} className="pill subtle">
                        {techStack}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
          {hasCarousel && (
            <div className="projects-carousel-controls">
              <button
                className="projects-carousel-button"
                type="button"
                onClick={handlePreviousProject}
                disabled={currentProject === 0}
                aria-label="Show previous projects"
              >
                &lsaquo;
              </button>
              <div className="projects-carousel-dots" aria-label="Projects">
                {Array.from({ length: maxProjectIndex + 1 }).map((_, index) => (
                  <button
                    className={`projects-carousel-dot ${
                      currentProject === index ? "active" : ""
                    }`}
                    type="button"
                    key={index}
                    onClick={() => scrollToProject(index)}
                    aria-label={`Go to project slide ${index + 1}`}
                    aria-current={currentProject === index}
                  />
                ))}
              </div>
              <button
                className="projects-carousel-button"
                type="button"
                onClick={handleNextProject}
                disabled={currentProject === maxProjectIndex}
                aria-label="Show next projects"
              >
                &rsaquo;
              </button>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectsSection;
