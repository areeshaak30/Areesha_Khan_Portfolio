const ExperienceSection = () => {
  const experiences = [
    {
      title: "Junior Front End Developer / React Developer",
      company: "FusionWave (Pvt.) Limited",
      location: "Lahore, Pakistan",
      period: "July 2025 – Present",
      type: "Full Time",
      description:
        "Leading provider of innovative web, mobile, and software development solutions.",
      responsibilities: [
        "Developed and maintained responsive web applications using React.JS and Tailwind CSS, ensuring cross-device compatibility.",
        "Integrated REST APIs, managed state effectively, and implemented authentication flows with Formik and Yup.",
        "Worked with Firebase and Postman for backend services, including data handling and user authentication.",
        "Contributed to multiple projects including admin dashboards, animated interfaces, and custom UI components.",
        "Collaborated with senior developers on schema design and project architecture.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "FusionWave (Pvt.) Limited",
      location: "Lahore, Pakistan",
      period: "January 2025 – June 2025",
      type: "Internship",
      description:
        "Technology startup specializing in innovative web solutions and scalable front-end applications.",
      responsibilities: [
        "Developed responsive UIs using React.JS (ES6) and React Native, ensuring cross-browser compatibility.",
        "Implemented Git for version control and Firebase for project deployment.",
        "Solved complex frontend challenges, improving user engagement through intuitive design.",
        "Built dynamic interfaces with React.JS.",
        "Reduced development time by 20% by creating reusable custom hooks and automating tasks.",
      ],
    },
    {
      title: "Software Application Developer (FYP)",
      company: "Scrapify Market - Final Year Project",
      location: "UMT, Lahore",
      period: "October 2023 – July 2024",
      type: "Final Year Project",
      description:
        "Developed Scrapify Market, a platform for buying and selling digital and physical goods.",
      responsibilities: [
        "Built frontend using React.JS from scratch, Node.js backend, and MongoDB database.",
        "Developed mobile app using React Native for product exploration and purchases.",
        "Created admin panel using React (TypeScript) for secure login, user approvals, and analytics.",
        "Employed AI models for Scrap Prediction and Price Prediction.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#1e293b]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#ec4899] mx-auto rounded-full"></div>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* TIMELINE LINE */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-[#6366f1] to-[#ec4899]" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* TIMELINE DOT */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#6366f1] rounded-full border-4 border-[#0f172a]" />

              {/* CONTENT */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                } pl-8 md:pl-0`}
              >
                <div className="bg-[#0f172a] p-6 rounded-xl border border-[#1e293b] hover:border-[#6366f1]/50 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-[#6366f1]/20 text-[#6366f1] px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                    <span className="text-[#94a3b8] text-sm">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#f8fafc] mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-[#6366f1] font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-[#94a3b8] text-sm mb-4">{exp.location}</p>
                  <p className="text-[#94a3b8] text-sm mb-4 italic">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="text-[#94a3b8] text-sm flex items-start gap-2"
                      >
                        <span className="text-[#6366f1] mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
