export default function Skills() {
  const skills = [
    { category: "Programming", items: "Python, SQL, PySpark, Scala, Java, C++, C#, JavaScript, Bash/Shell, R" },
    { category: "Databases", items: "SQL Server, MySQL, PostgreSQL, Oracle, MongoDB" },
    { category: "Big Data", items: "Apache Spark, Kafka, Hive" },
    { category: "Cloud Platforms", items: "Azure, AWS, GCP" },
    { category: "Azure Services", items: "ADF, Databricks, Synapse, ADLS Gen2, Azure SQL, Key Vault, Functions, Event Hub, Logic Apps, Monitor" },
    { category: "Data Engineering", items: "ETL/ELT, Data Warehousing, Data Modeling, Orchestration, Performance Optimization, Data Governance, Data Quality, CI/CD, Git" },
    { category: "Tools", items: "Power BI, Tableau, Azure DevOps, GitHub Actions, Jupyter, VS Code, Postman" },
  ];

  return (
    <section id="skills" className="border-2 border-purple-500 fade-in-up glow-purple data-engineering-bg">
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