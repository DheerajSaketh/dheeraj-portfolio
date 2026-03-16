export default function Resume() {
  return (
    <section id="resume" className="border-2 border-purple-500 fade-in-up glow-purple">
      <h2 className="text-3xl font-semibold mb-6 text-purple-400">Resume</h2>

      <div className="text-center">
        <p className="text-gray-200 mb-6">
          Download or view my resume to learn more about my experience and skills.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}