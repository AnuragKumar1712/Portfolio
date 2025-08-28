import React, { useEffect, useState } from "react";
import MovieImg from "../assets/images/allaboutmovies.png";
import FrontImg from "../assets/images/frontend.png";
import PortfolioImg from "../assets/images/portfolio.png";
import PythonImg from "../assets/images/python project.jpg";
import CodeImg from "../assets/images/Code editor.png";
import ProjectCTA from "../components/ProjectCTA";

interface Project {
  id: string;
  title: string;
  category: string[];
  tags: string[];
  image: string;
  description: string;
  github: string;
  live?: string;
  duration: string;
  rating: number;
  features?: string[];
  challenges?: string[];
}

const projectsData: Project[] = [
  {
    id: "movie-app",
    title: "Movie Information Website",
    category: ["fullstack", "frontend", "mobile"],
    tags: ["React", "Node.js", "MongoDB", "API"],
    image: MovieImg,
    description:
      "Built a modern web app for discovering and managing personal movie lists with an interactive UI. A comprehensive movie platform built for scalability and performance.",
    github: "https://github.com/AnuragKumar1712/Movie-app-typescript",
    live: "https://movie-app-typescript-seven.vercel.app/",
    duration: "6 months",
    rating: 4.8,
    features: [
      "Movie Search and filtering",
      "User ratings",
      "SEO optimization",
      "Real-time list management ",
      "Mobile-responsive design",
      "Released Trailors",
    ],
    challenges: [
      "Handling API data",
      "Implementing fast search for large datasets",
      "Creating responsive design for all device types",
    ],
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker Pro",
    category: ["backend"],
    tags: ["Node", "MongoDB", "Postman"],
    image:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?w=500&h=300&fit=crop",
    description:
      "This is a backend project I built while completing a Udemy course on Node.js, Express, MongoDB, and REST APIs.",
    github: "https://github.com/AnuragKumar1712/Expense-Tracker-Pro",
    duration: "2 months",
    rating: 4.9,
  },
  {
    id: "frontend-projects",
    title: "Frontend Projects",
    category: ["frontend"],
    tags: ["HTML", "JavaScript", "Bootstrap"],
    image: FrontImg,
    description:
      "A curated collection of hands-on web development projects demonstrating expertise in HTML, CSS, JavaScript, DOM Manipulation and Bootstrap.",
    github: "https://github.com/AnuragKumar1712/Frontend-Projects",
    duration: "12 months",
    rating: 4.7,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    category: ["frontend", "mobile"],
    tags: ["Node.js", "Tailwind", "TypeScript", "React.js"],
    image: PortfolioImg,
    description:
      "Interactive analytics dashboard with real-time data visualization, custom chart components, and advanced filtering capabilities.",
    github: "https://github.com/AnuragKumar1712/Portfolio",
    duration: "3 months",
    rating: 4.6,
  },
  {
    id: "python-project",
    title: "Python Projects",
    category: ["backend"],
    tags: ["Python", "Pandas", "Numpy"],
    image: PythonImg,
    description:
      "This project is designed to showcase practical implementations of Python, covering a wide range of topics and skill levels, from beginner to advanced.",
    github: "https://github.com/AnuragKumar1712/Python-Projects",
    duration: "4 months",
    rating: 4.9,
  },
  {
    id: "code-editor",
    title: "Code Editor",
    category: ["frontend", "mobile"],
    tags: ["HTML", "CSS", "JavaScript"],
    image: CodeImg,
    description:
      "The Code Editor webpage is a versatile tool for web developers to write and test HTML, CSS, and JavaScript code in real-time.",
    github: "https://github.com/AnuragKumar1712/Code-Editor",
    live: "https://anuragkumar1712.github.io/Code-Editor/",
    duration: "2 months",
    rating: 4.8,
  },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter =
      activeFilter === "all" || project.category.includes(activeFilter);
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.join(" ").toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    if (selectedProject) {
      // Disable background scroll
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable background scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-surface/50 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
          Project Portfolio
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          Comprehensive case studies showcasing full-stack development
          expertise, problem-solving methodology, and technical innovation
          across diverse projects.
        </p>
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-12 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">12</div>
            <div className="text-sm text-text-secondary">Featured Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary">8</div>
            <div className="text-sm text-text-secondary">Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">50K+</div>
            <div className="text-sm text-text-secondary">Lines of Code</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-text-secondary">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {["all", "fullstack", "frontend", "backend", "mobile"].map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium flex items-center ${
                    activeFilter === filter
                      ? "bg-primary text-white border-primary"
                      : "bg-surface text-text-secondary border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {filter === "all"
                    ? "All Projects"
                    : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Search */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10 pr-4 py-2 md:w-64 border-border rounded"
              />
              <svg
                className="w-5 h-5 absolute left-3 top-5/7 transform -translate-y-1/2 text-text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              onClick={() => {
                setActiveFilter("all");
                setSearchTerm("");
              }}
              className="btn btn-secondary px-4 py-2"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Reset
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
            <p className="text-text-secondary">
              Try adjusting your filters or search terms.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card card group overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/500x300?text=No+Image")
                  }
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {project.description}
                  </p>
                  <div className="text-sm text-text-secondary">
                    ⭐ {project.rating} | ⏳ {project.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {selectedProject && (
        <div id="project-modal" className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm">
            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
              <div className="card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  {/* Modal Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">
                      {selectedProject.title}
                    </h2>
                    <button
                      className="text-text-secondary ver:text-primary p-2"
                      onClick={() => setSelectedProject(null)}
                    >
                      ✕
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div id="modal-content">
                    <div className="space-y-6">
                      {/* Image */}
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover rounded mb-4"
                      />

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary text-lg">
                        {selectedProject.description}
                      </p>

                      {/* Key Features */}
                      {selectedProject.features && (
                        <div className="card p-4">
                          <h4 className="font-semibold text-lg mb-3 text-accent">
                            Key Features
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {selectedProject.features.map((item, idx) => (
                              <li
                                className="flex items-center text-text-secondary"
                                key={idx}
                              >
                                <svg
                                  className="w-4 h-4 mr-2 text-secondary"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Challenges */}
                      {selectedProject.challenges && (
                        <div className="card p-4">
                          <h4 className="text-lg font-semibold text-primary mb-3">
                            Technical Challenges
                          </h4>
                          <ul className="space-y-2">
                            {selectedProject.challenges.map((item, idx) => (
                              <li
                                className="flex items-start text-text-secondary"
                                key={idx}
                              >
                                <svg
                                  className="w-4 h-4 mr-2 mt-1 text-accent"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>

                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Buttons */}
                      <div className="flex gap-4">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          GitHub
                        </a>
                        {selectedProject.live && (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ProjectCTA />
    </div>
  );
};

export default Projects;
