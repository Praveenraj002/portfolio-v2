import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";

const VISITOR_NAME_KEY = "portfolio-visitor-name";

const getStoredVisitorName = () => {
  try {
    return window.localStorage.getItem(VISITOR_NAME_KEY)?.trim() || "";
  } catch {
    return "";
  }
};

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

  return { title: "Hello", message: "Glad you found your way here.", icon: "dark_mode" };
};

const Hero = () => {
  const [now, setNow] = useState(() => new Date());
  const [visitorName, setVisitorName] = useState(getStoredVisitorName);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const openNameDialog = () => {
    if (dialogRef.current?.open) return;
    dialogRef.current.showModal();
    setIsDialogOpen(true);
    dialogRef.current.focus();
  };

  useEffect(() => {
    if (visitorName) return;

    const promptTimer = window.setTimeout(() => {
      openNameDialog();
    }, 1000);

    return () => window.clearTimeout(promptTimer);
  }, [visitorName]);

  const closeNameDialog = () => setIsDialogOpen(false);

  const saveVisitorName = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("visitorName") || "").trim().replace(/\s+/g, " ");

    if (!name) return;

    setVisitorName(name);
    try {
      window.localStorage.setItem(VISITOR_NAME_KEY, name);
    } catch {
      // Personalization still works for the current page when storage is unavailable.
    }
    setIsDialogOpen(false);
  };

  const greeting = getGreeting(now.getHours());

  return (
    <Reveal as="section" className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-greeting reveal-stagger">
          <span className="greeting-icon material-symbols-rounded" aria-hidden="true">{greeting.icon}</span>
          <div>
            <div className="greeting-heading-row">
              <p className="greeting-title">
                {greeting.title}{visitorName ? `, ${visitorName}` : ","}
              </p>
              <button
                className="greeting-name-button material-symbols-rounded"
                type="button"
                aria-label={visitorName ? "Change your name" : "Add your name"}
                title={visitorName ? "Change your name" : "Add your name"}
                onClick={openNameDialog}
              >
                arrow_forward
              </button>
            </div>
            <p className="greeting-welcome">{greeting.message}</p>
          </div>
        </div>

        <div className="hero-divider" aria-hidden="true" />

        <div className="hero-content reveal-stagger">
          <div className="hero-message">
            <p className="hero-kicker">FULL-STACK AI ENGINEERING · CHENNAI, INDIA</p>
            <h1 id="hero-title">I build Intelligent systems for <span>work that moves.</span></h1>
            <p className="lead">Agentic workflows, MCP tooling, and reliable backend systems — automating the repeatable parts of complex operations, with a human in the loop where it counts</p>
            <div className="hero-actions">
              <a className="split-button" href="#projects">
                <span className="button-copy"><span>View selected work</span><span aria-hidden="true">View selected work</span></span>
                <span className="button-arrow material-symbols-rounded" aria-hidden="true">arrow_forward</span>
              </a>
              <a className="text-link" href="#contact">Say Hello <span className="material-symbols-rounded" aria-hidden="true">north_east</span></a>
            </div>
          </div>

          <aside className="hero-facts" aria-label="Availability, focus, and tools">
            <article><p>Availability</p><strong>Open to side projects and technical consultations. Not looking for full-time roles at this time.</strong></article>
            <article><p>Focus</p><strong>Agentic AI systems, MCP tooling, robust backend development, and LLM fine-tuning.</strong></article>
            <article><p>Tools</p><strong>Python, JavaScript, SQL, Pydantic AI, LangChain, LangGraph, FastMCP, FastAPI, RAG, Databricks, and AWS.</strong></article>
          </aside>

        </div>
      </div>

      <dialog className="visitor-dialog" ref={dialogRef} tabIndex="-1" aria-labelledby="visitor-dialog-title" onClose={() => setIsDialogOpen(false)}>
        <motion.div
          initial={false}
          animate={isDialogOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
          onAnimationComplete={() => {
            if (!isDialogOpen) dialogRef.current?.close();
          }}
        >
        <form method="dialog" onSubmit={saveVisitorName}>
          <p className="eyebrow">A quick hello</p>
          <h2 id="visitor-dialog-title">What should I call you?</h2>
          <p className="visitor-dialog-copy">Add your name to personalize your greeting.</p>
          <label htmlFor="visitor-name">Your name</label>
          <input
            id="visitor-name"
            name="visitorName"
            type="text"
            defaultValue={visitorName}
            maxLength="30"
            autoComplete="name"
            required
          />
          <div className="visitor-dialog-actions">
            <button type="button" className="visitor-skip" onClick={closeNameDialog}>Skip</button>
            <button type="submit" className="visitor-save">Continue <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span></button>
          </div>
        </form>
        </motion.div>
      </dialog>
    </Reveal>
  );
};

export default Hero;
