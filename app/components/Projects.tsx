export default function Projects() {
  const projects = [
    {
      title: "Azure Data Lakehouse & Pipeline",
      details: [
        "Designed Bronze–Silver–Gold architecture using ADLS, Databricks, Synapse.",
        "Built ETL pipelines with validation and monitoring.",
        "Integrated Purview for lineage.",
        "Improved throughput by 35%."
      ]
    },
    {
      title: "AI/ML Pipeline Support",
      details: [
        "Prepared structured datasets for ML workflows.",
        "Implemented preprocessing and feature engineering.",
        "Integrated MLflow for versioning and tracking."
      ]
    },
    {
      title: "Real-Time Streaming Pipeline",
      details: [
        "Kafka → Databricks → Delta Lake streaming ingestion.",
        "Enabled near real-time analytics with Power BI.",
        "Implemented watermarking and late-arrival handling."
      ]
    },
    {
      title: "End-to-End ETL with ADF",
      details: [
        "Ingested data from APIs, SQL, and cloud storage.",
        "Built mapping data flows for cleansing and schema enforcement.",
        "Automated triggers and integrated Key Vault."
      ]
    },
    {
      title: "Data Quality & Governance Framework",
      details: [
        "Built reusable PySpark framework for validation.",
        "Integrated with Azure Monitor for alerts.",
        "Standardized data quality scoring."
      ]
    }
  ];

  return (
    <section id="projects" className="border-2 border-yellow-500">
      <h2 className="text-3xl font-semibold mb-6 text-yellow-400">Projects</h2>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <div key={index}>
            <h3 className="text-xl font-medium text-yellow-300 mb-3">{project.title}</h3>
            <ul className="list-disc ml-6 text-gray-200 space-y-1">
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