import AllSkills from "../components/AllSkills";

interface Certification {
  title: string;
  platform: string;
  completed: string;
  color: string;
}

const certifications: Certification[] = [
  {
    title: "Generative AI",
    platform: "Udemy",
    completed: "March 2025",
    color: "primary",
  },
  {
    title: "React Masterclass",
    platform: "Scaler",
    completed: "Oct 2024",
    color: "secondary",
  },
  {
    title: "Full-Stack Web Development",
    platform: "Navriti",
    completed: "Mar 2024",
    color: "accent",
  },
  {
    title: "Node.js Developer",
    platform: "Coursera",
    completed: "Jan 2024",
    color: "primary",
  },
];

interface LearningItem {
  name: string;
  img: string;
  fallbackImg: string;
  progress: number;
  color: string;
}

const learningItems: LearningItem[] = [
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    fallbackImg:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop",
    progress: 65,
    color: "primary",
  },
  {
    name: "PostgreSQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
    fallbackImg:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=100&h=100&fit=crop",
    progress: 45,
    color: "secondary",
  },
  {
    name: "Postman",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg",
    fallbackImg:
      "https://images.pixabay.com/photo/2018/05/08/21/29/kubernetes-3384001_1280.png?w=100&h=100&fit=crop",
    progress: 30,
    color: "accent",
  },
];

function Skills() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-surface/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <svg
                className="w-4 h-4 text-primary mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-primary text-sm font-medium">
                15+ Technologies Mastered
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Technical Expertise</span>
              <br />
              <span className="text-text-primary">& Skill Matrix</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              A comprehensive overview of my technical capabilities, from
              frontend frameworks to backend architectures. Each skill
              represents hands-on experience building real-world applications.
            </p>

            {/* -- Quick Stats -- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-text-secondary">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">15+</div>
                <div className="text-sm text-text-secondary">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-text-secondary">
                  Projects Built
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-text-secondary">
                  Certifications
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllSkills />

      {/* Learning Journey */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learning Journey
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Continuous growth through certifications, courses, and hands-on
              experience
            </p>
          </div>

          {/* Certification Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:shadow-glow transition-shadow"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-${cert.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <svg
                    className={`w-8 h-8 text-${cert.color}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                {/* Text */}
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-text-secondary text-sm mb-3">
                  {cert.platform}
                </p>
                <div className="text-xs text-text-muted">
                  Completed: {cert.completed}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Learning */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Currently Learning
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Staying ahead of the curve with emerging technologies and
              frameworks
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningItems.map((item, index) => (
              <div
                key={index}
                className={`card p-6 border-dashed border-2 border-${item.color}/30`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  {/* Icon + Name */}
                  <div className="flex items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 mr-3"
                      onError={(e) => {
                        e.currentTarget.src = item.fallbackImg;
                        e.currentTarget.onerror = null;
                      }}
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-text-secondary text-sm">In Progress</p>
                    </div>
                  </div>

                  {/* Progress Text */}
                  <div className="text-right">
                    <div className={`text-2xl font-bold text-${item.color}`}>
                      {item.progress}%
                    </div>
                    <div className="text-xs text-text-secondary">Learning</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className={`bg-${item.color} h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Ready to leverage these skills for your next project? I'm always
            excited to tackle new challenges and create innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/projects" className="btn btn-primary text-lg px-8 py-4">
              View My Projects
            </a>
            <a href="/contact" className="btn btn-secondary text-lg px-8 py-4">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
