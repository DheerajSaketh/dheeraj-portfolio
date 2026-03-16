export default function Education() {
  return (
    <section id="education" className="border-2 border-pink-500 fade-in-up glow-pink">
      <h2 className="text-3xl font-semibold mb-6 text-pink-400">Education</h2>

      <div className="space-y-6">
        <div className="border border-pink-600 rounded-lg p-4 bg-gray-700/50 hover:bg-gray-700/70 transition-all duration-300">
          <h3 className="text-xl font-medium text-pink-300">Master of Science in Data Science & Artificial Intelligence</h3>
          <p className="text-gray-100">University of Central Missouri • Jan 2024 – Dec 2025 • GPA: 3.12</p>
          <p className="text-gray-100 mt-2">
            Relevant Coursework: Data Structures, Algorithms, Software Development, Machine Learning,
            Database Systems, Web Development
          </p>
        </div>

        <div className="border border-pink-600 rounded-lg p-4 bg-gray-700/50 hover:bg-gray-700/70 transition-all duration-300">
          <h3 className="text-xl font-medium text-pink-300">Bachelor of Technology in Electronics and Communication Engineering</h3>
          <p className="text-gray-100">Karunya Institute of Technology & Sciences • Jul 2017 – Jun 2021 • GPA: 3.24</p>
          <p className="text-gray-100 mt-2">
            Relevant Coursework: Digital Electronics, Analog Electronics, Signals and Systems,
            Communication Systems, Microprocessors, Control Systems, Embedded Systems,
            Data Structures, Algorithms, Computer Networks, Software Engineering
          </p>
        </div>
      </div>
    </section>
  );
}