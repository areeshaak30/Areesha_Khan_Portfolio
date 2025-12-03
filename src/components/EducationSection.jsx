const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University of Management & Technology (UMT)",
      location: "Lahore, Punjab",
      period: "2020 – 2024",
      gpa: "CGPA: 3.07",
      icon: "🎓",
    },
    {
      degree: "Intermediate in Pre-Engineering",
      institution: "Govt. Associate Degree College For Women Chung",
      location: "Lahore, Punjab",
      period: "2016 – 2018",
      icon: "📚",
    },
  ];

  const certifications = [
    {
      name: "Microsoft Office Specialist (Word, Excel, PowerPoint)",
      icon: "📊",
    },
    { name: "Git & GitHub Fundamentals", icon: "🔀" },
    { name: "Firebase Fundamentals", icon: "🔥" },
    { name: "Responsive Web Design Certification (FreeCodeCamp)", icon: "📱" },
    { name: "Modern HTML and CSS — Udemy", icon: "🎨" },
    { name: "Freelancing — Digi Skills", icon: "💼" },
    { name: "Content Writing — Digi Skills", icon: "✍️" },
  ];

  return (
    <section id="education" className="py-20 bg-[#1e293b]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#ec4899] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-[#f8fafc] mb-8 flex items-center gap-3">
              <span className="text-3xl">🎓</span> Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-[#0f172a] p-6 rounded-xl border border-[#1e293b] hover:border-[#6366f1]/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{edu.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-[#f8fafc] mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-[#6366f1] font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-[#94a3b8] text-sm mb-1">
                        {edu.location}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="bg-[#6366f1]/20 text-[#6366f1] px-3 py-1 rounded-full text-xs font-medium">
                          {edu.period}
                        </span>
                        {edu.gpa && (
                          <span className="bg-[#ec4899]/20 text-[#ec4899] px-3 py-1 rounded-full text-xs font-medium">
                            {edu.gpa}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h3 className="text-2xl font-bold text-[#f8fafc] mb-8 flex items-center gap-3">
              <span className="text-3xl">🏆</span> Certifications & Courses
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#0f172a] p-4 rounded-xl border border-[#1e293b] hover:border-[#6366f1]/50 transition-all duration-300 hover:scale-[1.02] flex items-center gap-4"
                >
                  <span className="text-2xl">{cert.icon}</span>
                  <span className="text-[#94a3b8]">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VOLUNTEER EXPERIENCE */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#f8fafc] mb-8 flex items-center gap-3">
            <span className="text-3xl">🤝</span> Volunteer Experience
          </h3>
          <div className="bg-[#0f172a] p-6 rounded-xl border border-[#1e293b] hover:border-[#6366f1]/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-[#f8fafc] mb-2">
                  Jhuggi Taaleem Initiative
                </h4>
                <p className="text-[#94a3b8]">
                  Contributed to community education programs for
                  underprivileged children and participated in tree plantation
                  drives promoting environmental sustainability.
                </p>
              </div>
              <span className="bg-[#6366f1]/20 text-[#6366f1] px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
