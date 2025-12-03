const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ec4899]/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#22d3ee]/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* TEXT CONTENT */}
          <div className="flex-1 text-center lg:text-left animate-fadeInUp">
            <p className="text-[#6366f1] font-medium mb-4 text-lg">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Areesha Khan</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-[#94a3b8] mb-6">
              Junior Frontend Developer
            </h2>
            <p className="text-[#94a3b8] text-lg max-w-xl mb-8 leading-relaxed">
              Passionate React.js Developer with expertise in building
              responsive, user-friendly web applications. Skilled in Tailwind
              CSS, Firebase, and modern JavaScript frameworks.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://github.com/areeshaak30"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1e293b] rounded-lg flex items-center justify-center text-[#94a3b8] hover:text-[#6366f1] hover:bg-[#1e293b]/80 transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/areeshaak30"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1e293b] rounded-lg flex items-center justify-center text-[#94a3b8] hover:text-[#6366f1] hover:bg-[#1e293b]/80 transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:areesha.ak30@gmail.com"
                className="w-12 h-12 bg-[#1e293b] rounded-lg flex items-center justify-center text-[#94a3b8] hover:text-[#6366f1] hover:bg-[#1e293b]/80 transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div
            className="flex-1 flex justify-center animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#6366f1] via-[#ec4899] to-[#22d3ee] p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-[#1e293b] flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl font-bold gradient-text">
                    AK
                  </span>
                </div>
              </div>
              {/* FLOATING BADGES */}
              <div className="absolute -top-4 -right-4 bg-[#1e293b] px-4 py-2 rounded-lg shadow-lg animate-float">
                <span className="text-[#6366f1] font-bold">React.js</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-[#1e293b] px-4 py-2 rounded-lg shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-[#ec4899] font-bold">Tailwind</span>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-[#94a3b8] hover:text-[#6366f1] transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
