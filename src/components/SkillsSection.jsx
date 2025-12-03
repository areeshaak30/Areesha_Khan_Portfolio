const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "React Native", level: 70 },
      ],
    },
    {
      title: "State Management & Forms",
      icon: "⚙️",
      skills: [
        { name: "React Hooks", level: 88 },
        { name: "Context API", level: 85 },
        { name: "Redux Toolkit", level: 70 },
        { name: "Formik & Yup", level: 80 },
      ],
    },
    {
      title: "Backend & Tools",
      icon: "🔧",
      skills: [
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Git & GitHub", level: 85 },
        { name: "Node.js", level: 65 },
        { name: "MongoDB", level: 60 },
      ],
    },
    {
      title: "Other Skills",
      icon: "✨",
      skills: [
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Principles", level: 80 },
        { name: "Animation Libraries", level: 75 },
        { name: "Postman", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#ec4899] mx-auto rounded-full"></div>
          <p className="text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl border border-[#1e293b] hover:border-[#6366f1]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-[#f8fafc]">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#94a3b8]">{skill.name}</span>
                      <span className="text-[#6366f1]">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#0f172a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#6366f1] to-[#ec4899] rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* TECH STATS ICONS */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-center mb-8 text-[#f8fafc]">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "JavaScript",
              "Tailwind",
              "Firebase",
              "Git",
              "Node.js",
              "MongoDB",
              "VS Code",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-[#1e293b] px-6 py-3 rounded-lg border border-[#1e293b] hover:border-[#6366f1] transition-all duration-300 hover:scale-105"
              >
                <span className="text-[#94a3b8] hover:text-[#6366f1]">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
