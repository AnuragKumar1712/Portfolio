import { Link } from "react-router-dom";
import HeroImg from "../assets/images/Photo.jpeg";
import Colleague1 from "../assets/images/Anubhav.jpg";
import Colleague2 from "../assets/images/Deepanshu_Drivigo.jfif";
import Colleague3 from "../assets/images/Deepanshu.jfif";

function About() {
  return (
    <>
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-surface/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* <!-- Content --> */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></div>
                <span className="text-primary text-sm font-medium">
                  About Me
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">
                  Building Digital Experiences
                </span>
                <br />
                <span className="text-text-primary">
                  with Purpose & Passion
                </span>
              </h1>

              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                I'm Anurag Kumar, a full-stack developer who believes that great
                code isn't just about functionality—it's about creating
                meaningful experiences that solve real problems. My journey,
                which started as a curious problem-solver has been driven by an
                unwavering commitment to continuous learning and human-centered
                design thinking.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Let's Connect
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </Link>
                <Link to="/resume" className="btn btn-secondary">
                  View Resume
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* <!-- Professional Photo --> */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={HeroImg}
                  alt="Anurag Kumar - Full-Stack Developer"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>

              {/* <!-- Floating Stats --> */}
              <div className="absolute -bottom-6 -left-6 card p-4 bg-surface/90 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-text-secondary">
                  Years Experience
                </div>
              </div>

              <div className="absolute -top-6 -right-6 card p-4 bg-surface/90 backdrop-blur-sm">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-text-secondary">
                  Projects Built
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Development Philosophy Section --> */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Development Philosophy
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              My approach to building scalable solutions with user-focused
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* <!-- Human-Centered Design --> */}
            <div className="card p-8 text-center group hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Human-Centered Design
              </h3>
              <p className="text-text-secondary">
                Every line of code I write starts with understanding the user's
                needs. Technology should serve people, not the other way around.
              </p>
            </div>

            {/* <!-- Scalable Architecture --> */}
            <div className="card p-8 text-center group hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-secondary"
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
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Scalable Architecture
              </h3>
              <p className="text-text-secondary">
                I build with the future in mind, creating modular, maintainable
                code that can grow and adapt as requirements evolve.
              </p>
            </div>

            {/* <!-- Continuous Learning --> */}
            <div className="card p-8 text-center group hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Continuous Innovation
              </h3>
              <p className="text-text-secondary">
                The tech landscape evolves rapidly. I stay ahead by constantly
                learning, experimenting, and adapting to new technologies and
                methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Values Section --> */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              The principles that guide my work and drive my passion for
              development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <!-- Collaboration --> */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Collaboration</h3>
              <p className="text-text-secondary text-sm">
                Great software is built by great teams. I thrive in
                collaborative environments.
              </p>
            </div>

            {/* <!-- Quality --> */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Quality</h3>
              <p className="text-text-secondary text-sm">
                I believe in writing clean, maintainable code that stands the
                test of time.
              </p>
            </div>

            {/* <!-- Learning --> */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Learning</h3>
              <p className="text-text-secondary text-sm">
                Technology evolves rapidly. I'm committed to continuous learning
                and growth.
              </p>
            </div>

            {/* <!-- Impact --> */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Impact</h3>
              <p className="text-text-secondary text-sm">
                Every project should solve real problems and create meaningful
                value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Behind the Scenes Section --> */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Behind the Scenes
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A glimpse into my development environment and creative process
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* <!-- Development Setup --> */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                My Workspace Essentials
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
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
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Editor</h4>
                    <p className="text-text-secondary text-sm">
                      VS Code with custom themes
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Focus Music</h4>
                    <p className="text-text-secondary text-sm">
                      Lo-fi hip hop, ambient electronic, and instrumental jazz
                      for deep focus sessions
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Problem-Solving Process</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-text-secondary">
                      Understand the problem deeply
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-text-secondary">
                      Break it down into smaller pieces
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span className="text-text-secondary">
                      Research and explore solutions
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <span className="text-text-secondary">
                      Prototype and iterate quickly
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Workspace Image --> */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?w=600&h=400&fit=crop"
                alt="Development Workspace"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-2xl"></div>

              {/* <!-- Code Snippet Overlay --> */}
              <div className="absolute bottom-4 left-4 right-4 code-block text-xs">
                <div className="text-secondary">// My daily mantra</div>
                <div className="text-text-primary">{`const mindset = {`} </div>
                <div className="text-text-primary ml-4">
                  curiosity: <span className="text-accent">'always'</span>,
                </div>
                <div className="text-text-primary ml-4">
                  learning: <span className="text-accent">'continuous'</span>,
                </div>
                <div className="text-text-primary ml-4">
                  impact: <span className="text-accent">'meaningful'</span>
                </div>
                <div className="text-text-primary">{`};`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Colleagues Say
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Feedback from teammates and collaborators I've had the pleasure to
              work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Testimonial 1 --> */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <img
                  src={Colleague1}
                  alt="Anubhav Kumar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Anubhav Kumar</h4>
                  <p className="text-text-secondary text-sm">Ex-TCS Eng</p>
                </div>
              </div>
              <p className="text-text-secondary italic">
                "Anurag has an exceptional ability to translate complex
                requirements into elegant solutions. His attention to user
                experience and code quality is outstanding."
              </p>
            </div>

            {/* <!-- Testimonial 2 --> */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <img
                  src={Colleague2}
                  alt="Deepanshu"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Deepanshu</h4>
                  <p className="text-text-secondary text-sm">
                    Entrepreneur | Founder - Drivigo
                  </p>
                </div>
              </div>
              <p className="text-text-secondary italic">
                "Working with Anurag is a pleasure. He brings fresh perspectives
                to technical challenges and always considers the bigger picture
                when architecting solutions."
              </p>
            </div>

            {/* <!-- Testimonial 3 --> */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <img
                  src={Colleague3}
                  alt="Deepanshu Jangra"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Deepanshu Jangra</h4>
                  <p className="text-text-secondary text-sm">UX Designer</p>
                </div>
              </div>
              <p className="text-text-secondary italic">
                "Anurag understands the importance of user-centered design. He
                consistently delivers implementations that not only work
                flawlessly but feel intuitive to use."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Current Learning Goals */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Currently Exploring
          </h2>
          <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
            The technologies and concepts I'm diving deep into to stay ahead of
            the curve
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* <!-- Learning Goals --> */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-6">
                Learning Goals 2025
              </h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">
                    Advanced React Server Components
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-text-secondary">
                    WebAssembly for Performance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary">
                    AI/ML Integration in Web Apps
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">
                    Edge Computing & CDN Optimization
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Exploring Technologies --> */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-6">
                Exploring Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-medium">Vite</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl mb-2">🦀</div>
                  <div className="text-sm font-medium">Oracle</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl mb-2">🐳</div>
                  <div className="text-sm font-medium">Postman</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl mb-2">🧠</div>
                  <div className="text-sm font-medium">TensorFlow.js</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on projects that challenge me to
            grow and create meaningful impact. Whether you're looking for a team
            member or a technical partner, let's connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Start a Conversation
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </Link>
            <Link
              to="/projects"
              className="btn btn-secondary text-lg px-8 py-4"
            >
              View My Work
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
