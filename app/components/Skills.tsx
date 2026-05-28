export default function Skills() {
  const skills = [
    { category: "Cloud", items: "AWS (conceptual), Azure, GCP" },
    { category: "Architecture", items: "Serverless, Microservices, Event-driven, CI/CD, IaC (Terraform/CloudFormation)" },
    { category: "Data Engineering", items: "Spark, Kafka, ETL, Data Pipelines, Delta Lake" },
    { category: "Programming", items: "Python, SQL, PySpark, Java, JavaScript" },
  ];

  return (
    <section id="skills" className="border-2 border-purple-500 fade-in-up glow-purple">
      <h2 className="text-3xl font-semibold mb-6 text-purple-400">Skills</h2>

      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.category} className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300">
            <h3 className="font-medium text-lg text-purple-300">{skill.category}</h3>
            <p className="text-gray-100">{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}