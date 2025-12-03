const AboutSection = () => {
  const highlights = [
    { number: "10+", label: "Projects Completed" },
    { number: "1+", label: "Years Experience" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-[#1e293b]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#ec4899] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ABOUT CONTENT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#f8fafc]">
              Junior Frontend Developer & React Enthusiast
            </h3>
            <p className="text-[#94a3b8] leading-relaxed">
              I'm Areesha Khan, a passionate Frontend Developer based in Lahore,
              Pakistan. I graduated with a Bachelor's degree in Computer Science
              from University of Management & Technology (UMT) with a CGPA of
              3.07.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Currently working as a Junior Frontend Developer at FusionWave
              (Pvt.) Limited, where I develop and maintain responsive web
              applications using React.JS and Tailwind CSS. I have hands-on
              experience with Firebase, REST APIs, and state management using
              React hooks and Context API.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              My journey includes working on diverse projects like admin
              dashboards, animated interfaces, e-commerce platforms, and
              AI-driven applications. I'm always eager to learn new technologies
              and create intuitive user experiences.
            </p>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <p className="text-[#94a3b8]">
                  <span className="text-[#6366f1] font-medium">Name:</span>{" "}
                  Areesha Khan
                </p>
                <p className="text-[#94a3b8]">
                  <span className="text-[#6366f1] font-medium">Email:</span>{" "}
                  areesha.ak30@gmail.com
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[#94a3b8]">
                  <span className="text-[#6366f1] font-medium">Location:</span>{" "}
                  Lahore, Pakistan
                </p>
                <p className="text-[#94a3b8]">
                  <span className="text-[#6366f1] font-medium">Phone:</span>{" "}
                  +92-304-3114535
                </p>
              </div>
            </div>

            {/* DOWNLOAD CV BUTTON */}
            <a
              href="https://blob.v0.app/TtQCM.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 mt-4"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-[#0f172a] p-6 rounded-xl border border-[#1e293b] hover:border-[#6366f1] transition-all duration-300 hover:scale-105 text-center"
              >
                <h4 className="text-4xl font-bold gradient-text mb-2">
                  {item.number}
                </h4>
                <p className="text-[#94a3b8]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
