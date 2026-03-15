export default function Contact() {
  return (
    <section id="contact" className="border-2 border-cyan-500 fade-in-up glow-cyan">
      <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Contact</h2>

      <div className="border border-cyan-600 rounded-lg p-4 bg-gray-700/50 hover:bg-gray-700/70 transition-all duration-300">
        <p className="text-gray-100">Email: dsvdheerajsaketh@gmail.com</p>
        <p className="text-gray-100">Phone: +1 (913) 337‑1948</p>
        <p className="text-gray-100">
          LinkedIn: <a href="https://www.linkedin.com/in/dheeraj-saketh" className="underline text-cyan-300 hover:text-cyan-200 transition-colors">dheeraj-saketh</a>
        </p>
        <p className="text-gray-100">
          GitHub: <a href="https://github.com/DheerajSaketh" className="underline text-cyan-300 hover:text-cyan-200 transition-colors">DheerajSaketh</a>
        </p>
      </div>
    </section>
  );
}