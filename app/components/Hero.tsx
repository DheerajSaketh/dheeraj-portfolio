export default function Hero() {
  return (
    <section id="home" className="pt-32 fade-in-up glow-blue">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col items-center">
          <img
            src="/profile.png"
            alt="Dheeraj Saketh"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-4">Dheeraj Saketh</h1>
          <p className="text-xl text-gray-200 mt-2">
            Azure Data Engineer
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex-1 max-w-2xl">
          <p className="text-gray-200 leading-relaxed text-lg">
            Azure Data Engineer with 2+ years of experience designing, developing, and optimizing
            cloud-native data solutions across the Azure ecosystem. Skilled in building scalable
            ETL/ELT pipelines, orchestrating workflows, and delivering analytics-ready datasets
            using Azure Data Factory, Databricks, Synapse, and ADLS. Strong hands-on expertise in
            Python, SQL, and PySpark, with proven experience implementing data governance and
            lineage using Purview. Passionate about transforming business requirements into secure,
            high-performance data architectures.
          </p>
        </div>
      </div>
    </section>
  );
}