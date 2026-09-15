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
  "Model serving anbd deloyment",
  "Backend Engineering",
];

const CompetencySet = ({ hidden = false }) => (
  <div className="competencies-set" aria-hidden={hidden || undefined}>
    {competencies.map((competency) => (
      <span className="competency-item" key={competency}>
        <i aria-hidden="true" />
        {competency}
      </span>
    ))}
  </div>
);

const Competencies = () => (
  <section className="competencies" aria-labelledby="competencies-title">
    <div className="competencies-label">
      <p className="eyebrow">Core capabilities</p>
      <h2 id="competencies-title">Competencies</h2>
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
