export default function Experience() {
  return (
    <section id="experience" className="border-2 border-red-500">
      <h2 className="text-3xl font-semibold mb-6 text-red-400">Experience</h2>

      <div className="space-y-10">

        <div>
          <h3 className="text-xl font-medium text-red-300">Data Engineer — Stryker (via TCS)</h3>
          <p className="text-gray-200 mb-3">July 2022 – January 2024 • Cary, IL</p>
          <ul className="list-disc ml-6 text-gray-200 space-y-2">
            <li>Designed and deployed 15+ Azure pipelines using ADF, Databricks, and ADLS, improving efficiency by 40%.</li>
            <li>Built analytics datasets in Azure SQL and Synapse, reducing reporting latency by 30%.</li>
            <li>Implemented Purview governance with 100% lineage visibility.</li>
            <li>Developed Power BI dashboards increasing data-driven adoption by 25%.</li>
            <li>Optimized SQL/PySpark workflows reducing compute costs by 20%.</li>
            <li>Contributed to CI/CD automation cutting deployment time by 50%.</li>
            <li>Enhanced data quality with validation rules and monitoring alerts.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium">Software Developer & Workflow Specialist — CoreLogic (via TCS)</h3>
          <p className="text-gray-600 mb-3">Dec 2021 – Jun 2022 • Irvine, CA</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Developed automated ETL workflows improving refresh cycles by 35%.</li>
            <li>Designed SQL-based data models for analytics.</li>
            <li>Performed governance and QA ensuring 99% data accuracy.</li>
            <li>Built Power BI dashboards reducing manual reporting by 60%.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}