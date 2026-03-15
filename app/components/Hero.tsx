export default function Hero() {
  return (
    <section id="home" className="pt-32 text-center">
      <img
        src="/profile.png"
        alt="Dheeraj Saketh"
        className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
      />
      <h1 className="text-4xl font-bold">Dheeraj Saketh</h1>
      <p className="mt-4 text-xl text-gray-200">
        Azure Data Engineer
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </section>
  );
}