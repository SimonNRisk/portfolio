export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 tracking-tight">Let&apos;s Work Together</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          I&apos;m always interested in hearing about new projects and opportunities. Let&apos;s work together to create
          something amazing!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:risk.simon@queensu.ca"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 text-lg font-medium"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/simon-risk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-300 text-lg font-medium border border-gray-200 hover:border-gray-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
