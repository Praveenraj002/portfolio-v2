import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";

const getGreeting = (hour) => {
  if (hour >= 5 && hour < 12) {
    return { title: "Good Morning", message: "Hope your day is off to a good start.", icon: "wb_twilight" };
  }

  if (hour >= 12 && hour < 17) {
    return { title: "Good Afternoon", message: "Glad you are here today!", icon: "wb_sunny" };
  }

  if (hour >= 17 && hour < 22) {
    return { title: "Good Evening", message: "Thanks for stopping by.", icon: "wb_twilight" };
  }

  return { title: "Hello, night owl", message: "Glad you found your way here.", icon: "dark_mode" };
};

const Hero = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const greeting = getGreeting(now.getHours());

  return (
    <Reveal as="section" className="hero" id="home" aria-labelledby="hero-title" threshold={0.05}>
      <div className="hero-inner">
        <div className="hero-greeting">
          <span className="greeting-icon material-symbols-rounded" aria-hidden="true">{greeting.icon}</span>
          <div>
            <p className="greeting-title">{greeting.title},</p>
            <p className="greeting-welcome">{greeting.message}</p>
          </div>
        </div>

        <div className="hero-divider" aria-hidden="true" />

        <div className="hero-content">
          <div className="hero-message">
            <h1 id="hero-title">Building intelligent systems that turn repetitive tasks into autonomous AI workflows.</h1>
            <p className="lead">Full-stack AI engineer specialising in thoughtful agentic systems, expressive interfaces, and robust backend services. Based in Chennai, Tamil Nadu, India.</p>
            <div className="hero-actions">
              <a className="split-button" href="#projects">
                <span className="button-copy"><span>View selected work</span><span aria-hidden="true">View selected work</span></span>
                <span className="button-arrow material-symbols-rounded" aria-hidden="true">arrow_forward</span>
              </a>
              <a className="text-link" href="#contact">Start a conversation <span className="material-symbols-rounded" aria-hidden="true">north_east</span></a>
            </div>
          </div>

          <aside className="hero-facts" aria-label="Availability, focus, and tools">
            <article>
              <p>Availability</p>
              <strong>Open to side projects and technical consultations. Not looking for full-time roles at this time.</strong>
            </article>
            <article>
              <p>Focus</p>
              <strong>Agentic AI systems, MCP tooling, robust backend development, and LLM fine-tuning.</strong>
            </article>
            <article>
              <p>Tools</p>
              <strong>Python, JavaScript, SQL, Pydantic AI, LangChain, LangGraph, FastMCP, FastAPI, RAG, and AWS.</strong>
            </article>
          </aside>
        </div>
      </div>
    </Reveal>
  );
};

export default Hero;
