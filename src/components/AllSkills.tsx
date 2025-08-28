import { useState, type JSX } from "react";
import ExcelImg from "../assets/images/excel.png";
import WordImg from "../assets/images/word.png";

interface FilterButton {
  id: string;
  label: string;
  icon: JSX.Element;
}

const filterButtons: FilterButton[] = [
  {
    id: "all",
    label: "All Skills",
    icon: (
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: (
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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "backend",
    label: "Backend",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4" />
      </svg>
    ),
  },
  {
    id: "database",
    label: "Database",
    icon: (
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
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
        />
      </svg>
    ),
  },
  {
    id: "tools",
    label: "Tools",
    icon: (
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

interface Skill {
  name: string;
  icon: string;
  experience: string;
  proficiency: number;
  level: string;
  projects: string;
  details: string;
  color: string;
}

const skillsData: Record<string, Skill[]> = {
  frontend: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      experience: "3+ years",
      proficiency: 95,
      level: "Expert",
      projects: "25+ Projects",
      details: "Hooks, Context, Redux",
      color: "primary",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      experience: "4+ years",
      proficiency: 92,
      level: "Expert",
      projects: "40+ Projects",
      details: "ES6+, Async/Await",
      color: "accent",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      experience: "2+ years",
      proficiency: 88,
      level: "Advanced",
      projects: "15+ Projects",
      details: "Interfaces, Generics",
      color: "secondary",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      experience: "4+ years",
      proficiency: 96,
      level: "Expert",
      projects: "50+ Projects",
      details: "Semantic, Accessibility",
      color: "primary",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      experience: "4+ years",
      proficiency: 94,
      level: "Expert",
      projects: "45+ Projects",
      details: "Grid, Flexbox, Media Queries",
      color: "accent",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      experience: "2+ years",
      proficiency: 90,
      level: "Advanced",
      projects: "20+ Projects",
      details: "Utility-first, Responsive",
      color: "secondary",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      experience: "3+ years",
      proficiency: 90,
      level: "Advanced",
      projects: "APIs",
      details: "Express",
      color: "secondary",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      experience: "2+ years",
      proficiency: 82,
      level: "Intermediate",
      projects: "12+ Projects",
      details: "Data Analysis, APIs",
      color: "accent",
    },
  ],
  database: [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      experience: "2+ years",
      proficiency: 85,
      level: "Advanced",
      projects: "20+ Projects",
      details: "Mongoose, Aggregation",
      color: "secondary",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      experience: "2+ years",
      proficiency: 82,
      level: "Intermediate",
      projects: "15+ Projects",
      details: "Queries, Joins",
      color: "primary",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      experience: "3+ years",
      proficiency: 93,
      level: "Expert",
      projects: "Daily Usage",
      details: "Branching, Merging",
      color: "primary",
    },
    {
      name: "Excel",
      icon: ExcelImg,
      experience: "2+ years",
      proficiency: 80,
      level: "Intermediate",
      projects: "15+ Projects",
      details: "Pivot tables",
      color: "secondary",
    },
    {
      name: "MS Word",
      icon: WordImg,
      experience: "3+ years",
      proficiency: 82,
      level: "Advanced",
      projects: "Docs & Reports",
      details: "Formatting, Styling",
      color: "accent",
    },
  ],
};

interface CategoryInfo {
  icon: JSX.Element;
  color: string;
  description: string;
}

const categoryDetails: Record<string, CategoryInfo> = {
  frontend: {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "primary",
    description: "User interface and experience technologies",
  },
  backend: {
    icon: (
      <svg
        className="w-6 h-6 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 21h8m-4-4v4"
        />
      </svg>
    ),
    color: "secondary",
    description: "Creating robust APIs and server-side architectures.",
  },
  database: {
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
        />
      </svg>
    ),
    color: "accent",
    description: "Managing and querying data efficiently.",
  },
  tools: {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    color: "primary",
    description: "Version control, productivity tools, and utilities.",
  },
};

function AllSkills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all" ? Object.keys(skillsData) : [activeCategory];

  return (
    <>
      {/* Filter Buttons */}
      <section className="py-8 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center ${
                  activeCategory === btn.id
                    ? "bg-primary text-white border-primary"
                    : "bg-surface text-text-secondary border-border hover:border-primary hover:text-primary"
                }`}
                onClick={() => setActiveCategory(btn.id)}
              >
                {btn.icon}
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category) => (
            <div key={category} className="mb-16">
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-${categoryDetails[category]?.color}/20`}
                >
                  {categoryDetails[category]?.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold capitalize">
                    {category} Development
                  </h2>
                  <p className="text-text-secondary">
                    {categoryDetails[category]?.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData[category].map((skill) => (
                  <div
                    key={skill.name}
                    className="card p-6 group hover:shadow-glow transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-10 h-10 mr-3"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">
                            {skill.name}
                          </h3>
                          <p className="text-text-secondary text-sm">
                            {skill.experience}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-2xl font-bold text-${skill.color}`}
                        >
                          {skill.proficiency}%
                        </div>
                        <div className="text-xs text-text-secondary">
                          {skill.level}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Proficiency</span>
                        <span>{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div
                          className={`bg-${skill.color} h-2 rounded-full`}
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-text-secondary">
                      <span>{skill.projects}</span>
                      <span>{skill.details}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AllSkills;
