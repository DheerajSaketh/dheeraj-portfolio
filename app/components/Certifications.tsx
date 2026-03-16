export default function Certifications() {
  return (
    <section id="certifications" className="border-2 border-indigo-500 fade-in-up glow-indigo azure-cert-bg">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-400">Certifications</h2>

      <div className="border border-indigo-600 rounded-lg p-4 bg-gray-700/50 hover:bg-gray-700/70 transition-all duration-300">
        <ul className="list-disc ml-6 text-gray-100 space-y-2">
          <li>Microsoft Certified: Azure Data Fundamentals</li>
          <li>Global Certification in RPA — Automation Anywhere</li>
          <li>Kafka & Spark Streaming Hands-on Project</li>
        </ul>
      </div>
    </section>
  );
}