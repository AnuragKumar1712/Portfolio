import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieImg from "../assets/images/allaboutmovies.png";
import FrontendImg from "../assets/images/frontend.png";

function Home() {
  // Dynamic role rotation
  const roles = [
    "Full-Stack Developer",
    "React Specialist",
    "Frontend Development",
    "Problem Solver",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true); // fade in
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* <!-- Animated Background --> */}
        <div className="absolute inset-0 opacity-10">
          {/* First code block */}
          <pre className="absolute top-20 left-10 font-mono text-sm text-primary animate-pulse">
            {`const developer = {
  name: 'Anurag Kumar',
  passion: 'Full-Stack Development'
};`}
          </pre>

          {/* Second code block with delay */}
          <pre
            className="absolute top-40 right-20 font-mono text-sm text-secondary animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            {`function buildAmazingThings() {
  return 'Innovation + Code';
}`}
          </pre>

          {/* Third code block with longer delay */}
          <pre
            className="absolute bottom-40 left-20 font-mono text-sm text-accent animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            {`// Always learning, always growing
while (coding) {
  keepBuilding();
}`}
          </pre>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          {/* <!-- Status Badge --> */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mt-12">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse mr-2"></div>
            <span className="text-secondary text-sm font-medium">
              Currently Available for Opportunities
            </span>
          </div>

          {/* <!-- Main Heading --> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 pt-8">
            <span className="text-gradient">Code with Purpose,</span>
            <br />
            <span className="text-text-primary">Build with Passion</span>
          </h1>

          {/* <!-- Dynamic Role Display --> */}
          <div className="text-xl md:text-2xl text-text-secondary mb-8 h-8">
            <span
              id="dynamic-role"
              className="font-medium transition-opacity duration-300"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {roles[currentRoleIndex]}
            </span>
            <span className="animate-pulse">|</span>
          </div>

          {/* <!-- Description --> */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
            Full-stack developer crafting scalable web applications with React,
            Node.js, and modern technologies. Transforming ideas into digital
            experiences that make a difference.
          </p>

          {/* <!-- CTA Buttons --> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/projects" className="btn btn-primary text-lg px-8 py-4">
              View My Work
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link to="/contact" className="btn btn-secondary text-lg px-8 py-4">
              Let's Connect
            </Link>
          </div>

          {/* <!-- Quick Stats --> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-text-secondary">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">3+</div>
              <div className="text-sm text-text-secondary">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">15+</div>
              <div className="text-sm text-text-secondary">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-text-secondary">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Scroll Indicator --> */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* <!-- Skills Preview Section --> */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Expertise
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on scalable,
              performant solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* <!-- React --> */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-semibold text-sm">React</h3>
              <div className="w-full bg-border rounded-full h-2 mt-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>

            {/* <!-- Node.js --> */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-semibold text-sm">Node.js</h3>
              <div className="w-full bg-border rounded-full h-2 mt-2">
                <div
                  className="bg-secondary h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            {/* <!-- JavaScript --> */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-semibold text-sm">JavaScript</h3>
              <div className="w-full bg-border rounded-full h-2 mt-2">
                <div
                  className="bg-accent h-2 rounded-full"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>

            {/* <!-- TypeScript --> */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-semibold text-sm">TypeScript</h3>
              <div className="w-full bg-border rounded-full h-2 mt-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: "88%" }}
                ></div>
              </div>
            </div>

            {/* <!-- MongoDB --> */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-semibold text-sm">MongoDB</h3>
              <div className="w-full bg-border rounded-full h-2 mt-2">
                <div
                  className="bg-secondary h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            {/* <!-- MySQL --> */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
                className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-semibold text-sm">MySQL</h3>
              <div className="w-full bg-border rounded-full h-2 mt-2">
                <div
                  className="bg-accent h-2 rounded-full"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/skiils" className="btn btn-secondary">
              View All Skills
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- Featured Projects Section --> */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A showcase of recent builds demonstrating full-stack expertise and
              problem-solving skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Project 1 --> */}
            <div className="card group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={MovieImg}
                  alt="AllAboutMovies"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                      React
                    </span>
                    <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded">
                      Typescript
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">All About Movies</h3>
                  <div className="flex items-center text-text-secondary text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>124</span>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">
                  This project offers users an intuitive platform to explore
                  top-rated and upcoming movies with a sleek and modern design.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/projects"
                    className="text-primary hover:text-primary-400 font-medium"
                  >
                    View Details →
                  </Link>
                  <a
                    href="https://movie-app-typescript-seven.vercel.app/"
                    target="_blank"
                    className="text-text-secondary hover:text-text-primary"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project 2 --> */}
            <div className="card group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?w=500&h=300&fit=crop"
                  alt="Expense Tracker Pro"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">
                      MongoDB
                    </span>
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded">
                      Postman
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Expense Tracker Pro</h3>
                  <div className="flex items-center text-text-secondary text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>89</span>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">
                  This is a backend project I built while completing a Udemy
                  course on Node.js, Express, MongoDB, and REST APIs.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/projects"
                    className="text-primary hover:text-primary-400 font-medium"
                  >
                    View Details →
                  </Link>
                  <a
                    href="https://github.com/AnuragKumar1712/Expense-Tracker-Pro"
                    target="_blank"
                    className="text-text-secondary hover:text-text-primary"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project 3 --> */}
            <div className="card group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={FrontendImg}
                  alt="Frontend "
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                      Tailwind
                    </span>
                    <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">
                      Javascript
                    </span>
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded">
                      Bootstrap
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Frontend Projects</h3>
                  <div className="flex items-center text-text-secondary text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>156</span>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">
                  A curated collection of hands-on web development projects
                  demonstrating expertise in HTML, CSS, and JavaScript.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/projects"
                    className="text-primary hover:text-primary-400 font-medium"
                  >
                    View Details →
                  </Link>
                  <a
                    href="https://github.com/AnuragKumar1712/Frontend-Projects"
                    target="_blank"
                    className="text-text-secondary hover:text-text-primary"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- CTA Section --> */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always excited to work
            on innovative solutions that make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Start a Conversation
            </Link>
            <Link to="/resume" className="btn btn-secondary text-lg px-8 py-4">
              Download Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
