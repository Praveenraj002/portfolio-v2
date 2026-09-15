import { motion, useReducedMotion } from "framer-motion";

const competencies = [
  "Agent Construction",
  "Application System Design",
  "MCP Tooling",
  "Data Ingestion",
  "LLM Fine-tuning",
  "RAG Systems",
  "Data Modeling",
  "Generative AI solutions",
  "Knowledge Engineering",
  "Data Quality Engineering",
  "Model serving and deloyment",
  "Backend Engineering",
];

const CompetencySet = ({ hidden = false }) => (
  <CompetencySetContent hidden={hidden} />
);

const CompetencySetContent = ({ hidden = false }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="competencies-set" aria-hidden={hidden || undefined}>
      {competencies.map((competency, index) => (
        <motion.span
          className="competency-item"
          key={competency}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut", delay: shouldReduceMotion ? 0 : index * 0.08 }}
        >
        <i aria-hidden="true" />
        {competency}
        </motion.span>
      ))}
    </div>
  );
};

const Competencies = () => (
  <section className="competencies" aria-labelledby="competencies-title">
    <div className="competencies-label">
      <p className="eyebrow">Core capabilities</p>
      <div className="competencies-heading">
        <h2 id="competencies-title">Competencies</h2>
      </div>
    </div>

    <div className="competencies-viewport">
      <div className="competencies-track">
        <CompetencySet />
        <CompetencySet hidden />
      </div>
    </div>
  </section>
);

export default Competencies;
