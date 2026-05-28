export default function Projects() {
  const projects = [
    {
      title: "Data Lakehouse & Pipeline (Architecture Focus)",
      details: [
        "Led end-to-end architecture design for a lakehouse with clear ingestion, processing, and serving layers emphasizing scalability and cost control.",
        "Specified partitioning, compaction and schema strategy to meet SLA and query patterns.",
        "Defined monitoring, alerting and operational runbooks for production readiness."
      ]
    },
    {
      title: "AI/ML Pipeline & Feature Store",
      details: [
        "Architected dataset preparation and feature pipelines to support model training and online/offline feature serving with reproducibility in mind.",
        "Designed storage and compute trade-offs for training vs inference workloads.",
        "Captured design decisions for observability and model rollback strategies."
      ]
    },
    {
      title: "Real-Time Streaming Architecture",
      details: [
        "Designed an event-driven ingestion pipeline with streaming guarantees and backpressure considerations for high-throughput workloads.",
        "Defined end-to-end latency, fault-tolerance and replay strategies for business-critical streams.",
        "Outlined schema evolution and consumer contract patterns to support multiple downstream services."
      ]
    },
    {
      title: "End-to-End Data Integration",
      details: [
        "Defined ingestion and orchestration patterns for batch and micro-batch workloads with clear SLAs and retry semantics.",
        "Designed secure secrets handling and access boundaries between services.",
        "Recommended cost and performance trade-offs for compute choices in production."
      ]
    },
    {
      title: "Data Quality & Governance",
      details: [
        "Designed a governance approach including lineage, quality scoring, and automated validation to reduce production incidents.",
        "Specified alerting and mitigation workflows to improve MTTR for data issues.",
        "Aligned data ownership and access controls with compliance requirements."
      ]
    }
  ];

  return (
    <section id="projects" className="border-2 border-blue-500 fade-in-up glow-blue">
      <h2 className="text-3xl font-semibold mb-6 text-blue-400">Projects</h2>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <div key={index} className="border border-blue-600 rounded-lg p-4 bg-gray-700/50 hover:bg-gray-700/70 transition-all duration-300">
            <h3 className="text-xl font-medium text-blue-300 mb-3">{project.title}</h3>
            <ul className="list-disc ml-6 text-gray-100 space-y-1">
              {project.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}