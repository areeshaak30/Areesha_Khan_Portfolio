import { useState } from "react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Scrapify Market",
      category: "Full Stack",
      description:
        "A user-friendly platform for buying and selling digital and physical goods. Includes Admin Panel (TypeScript), Mobile App (React Native), and Web Frontend (React JS). Features AI-driven prediction models for scrap and price prediction.",
      technologies: [
        "React.js",
        "React Native",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "AI/ML",
      ],
      type: "FYP - Major Project",
      image: "🛒",
      github: "https://github.com/Scrapify-Fyp",
    },
    {
      title: "Dewebshopmakelaar",
      category: "Full Stack",
      description:
        "E-commerce platform built from scratch with mobile responsive design. Features complete functionality with Firebase backend for authentication and database. Currently an ongoing project with buyer and seller panels.",
      technologies: [
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "Responsive Design",
      ],
      type: "Major Project - Ongoing",
      image: "🏠",
      github: "https://github.com/ITSOLSTUDIOLTD/dewebshopmakelaar-buyer",
    },
    {
      title: "Bridgebond",
      category: "Frontend",
      description:
        "Animated website with modern UI/UX design. Features smooth animations, responsive landing page, and engaging user interface. Built with React.js and custom animation libraries.",
      technologies: [
        "React.js",
        "CSS Animations",
        "Tailwind CSS",
        "Responsive Design",
      ],
      type: "Major Project",
      image: "🌉",
      github: "https://github.com/ITSOLSTUDIOLTD/bridgebond_web",
    },
    {
      title: "AI-Driven Smart Journal",
      category: "Full Stack",
      description:
        "Intelligent journaling application with AI integration. Built frontend from scratch and integrated APIs for smart features. Includes admin panel for content management.",
      technologies: ["React.js", "REST APIs", "AI Integration", "Tailwind CSS"],
      type: "Major Project",
      image: "📔",
      github: "https://github.com/arshu30-fusion/ai-driven-smart-journal-admin",
    },
    {
      title: "Beautiful Action",
      category: "Frontend",
      description:
        "Modern and visually appealing website with beautiful UI components. Features admin side functionality and clean design principles.",
      technologies: ["React.js", "Tailwind CSS", "UI/UX Design"],
      type: "Major Project",
      image: "✨",
      github: "https://github.com/arshu30-fusion/Beautiful-Action-Website",
    },
    {
      title: "ICV-Tuna-Africa Admin",
      category: "Dashboard",
      description:
        "Admin dashboard for ICV Tuna Africa platform. Features comprehensive data management, user analytics, and administrative controls.",
      technologies: ["React.js", "Admin Panel", "Dashboard", "Tailwind CSS"],
      type: "Major Project",
      image: "🐟",
      github: "https://github.com/ITSOLSTUDIOLTD/icv-tuna-africa_admin",
    },
    {
      title: "Shred Bet Admin",
      category: "Dashboard",
      description:
        "Administrative panel for Shred Bet platform. Includes user management, betting analytics, and comprehensive admin controls.",
      technologies: ["React.js", "Admin Dashboard", "Data Visualization"],
      type: "Major Project",
      image: "🎰",
      github: "https://github.com/ITSOLSTUDIOLTD/shred_bet_admin",
    },
    {
      title: "Roam at Will Admin",
      category: "Dashboard",
      description:
        "Admin panel for travel/roaming application. Features booking management, user administration, and analytics dashboard.",
      technologies: ["React.js", "Firebase", "Admin Panel"],
      type: "Major Project",
      image: "✈️",
      github: "https://github.com/ITSOLSTUDIOLTD/roam-at-will_admin",
    },
    {
      title: "Rural Response Admin",
      category: "Dashboard",
      description:
        "Administrative dashboard for Rural Response platform. Built with React.js featuring data management and user controls.",
      technologies: ["React.js", "Admin Dashboard", "Tailwind CSS"],
      type: "Major Project",
      image: "🏡",
      github: "https://github.com/arshu30-fusion/rural_response_admin_react",
    },
    {
      title: "SimplexED Web App",
      category: "Frontend",
      description:
        "Educational web application with user-friendly interface. Features learning modules and interactive content.",
      technologies: ["React.js", "Education Platform", "Responsive Design"],
      type: "Project",
      image: "📚",
      github: "https://github.com/arshu30-fusion/simplexED-Web-App",
    },
    {
      title: "Break Free Admin",
      category: "Dashboard",
      description:
        "Admin dashboard for Break Free application. Features user management and platform analytics.",
      technologies: ["React.js", "Admin Panel", "Dashboard"],
      type: "Project",
      image: "🔓",
      github: "https://github.com/ITSOLSTUDIOLTD/break-free-admin",
    },
    {
      title: "Neurowaze Admin",
      category: "Dashboard",
      description:
        "Administrative panel for Neurowaze platform with comprehensive management features.",
      technologies: ["React.js", "Admin Dashboard", "UI Components"],
      type: "Project",
      image: "🧠",
      github: "https://github.com/arshu30-fusion/Neurowaze-Admin",
    },
  ];

  const filters = ["All", "Full Stack", "Frontend", "Dashboard"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#ec4899] mx-auto rounded-full"></div>
          <p className="text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            A showcase of my work including full-stack applications, admin
            dashboards, and responsive websites
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#6366f1] text-white"
                  : "bg-[#1e293b] text-[#94a3b8] hover:bg-[#6366f1]/20 hover:text-[#6366f1]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1e293b] rounded-xl overflow-hidden border border-[#1e293b] hover:border-[#6366f1]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#6366f1]/10"
            >
              {/* PROJECT IMAGE */}
              <div className="h-48 bg-gradient-to-br from-[#6366f1]/20 to-[#ec4899]/20 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
              </div>

              {/* PROJECT CONTENT */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#6366f1]/20 text-[#6366f1] px-3 py-1 rounded-full text-xs font-medium">
                    {project.type}
                  </span>
                  <span className="text-[#94a3b8] text-xs">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#f8fafc] mb-3 group-hover:text-[#6366f1] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#94a3b8] text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#0f172a] text-[#94a3b8] px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GITHUB LINK */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#6366f1] hover:text-[#ec4899] transition-colors text-sm font-medium"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL PROJECTS ON GITHUB */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/areeshaak30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
