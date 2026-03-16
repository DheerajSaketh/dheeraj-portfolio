export default function Contact() {
  return (
    <section id="contact" className="border-2 border-cyan-500 fade-in-up glow-cyan">
      <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Contact</h2>

      <p className="text-gray-200 text-lg mb-8 text-center">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="border border-cyan-600 rounded-lg p-6 bg-gray-700/50 hover:bg-gray-700/70 transition-all duration-300">
          <h3 className="text-xl font-medium text-cyan-300 mb-4">Get In Touch</h3>
          <div className="space-y-3">
            <p className="text-gray-100">
              <span className="font-medium">Email:</span> dsvdheerajsaketh@gmail.com
            </p>
            <p className="text-gray-100">
              <span className="font-medium">Phone:</span> +1 (913) 337‑1948
            </p>
            <p className="text-gray-100">
              <span className="font-medium">LinkedIn:</span>{" "}
              <a href="https://www.linkedin.com/in/dheeraj-saketh" className="underline text-cyan-300 hover:text-cyan-200 transition-colors">
                dheeraj-saketh
              </a>
            </p>
            <p className="text-gray-100">
              <span className="font-medium">GitHub:</span>{" "}
              <a href="https://github.com/DheerajSaketh" className="underline text-cyan-300 hover:text-cyan-200 transition-colors">
                DheerajSaketh
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-cyan-600 rounded-lg p-6 bg-gray-700/50 hover:bg-gray-700/70 transition-all duration-300">
          <h3 className="text-xl font-medium text-cyan-300 mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-100 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-100 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-100 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-cyan-600 text-white font-medium rounded-md hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}