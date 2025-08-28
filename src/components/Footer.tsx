import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-surface border-t border-border pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold text-primary font-mono">
                  &lt;
                </span>
                <span className="text-xl font-bold">Anurag Kumar</span>
                <span className="text-xl font-bold text-primary font-mono">
                  /&gt;
                </span>
              </div>
              <p className="text-text-secondary mb-4">
                Full-stack developer passionate about creating scalable web
                applications and meaningful digital experiences.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AnuragKumar1712"
                  target="_blank"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/anuragkumar1702/"
                  target="_blank"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:anuragkumarroy1712@gmail.com"
                  target="_blank"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1.5 4.5A2.5 2.5 0 014 2h16a2.5 2.5 0 012.5 2.5v15a2.5 2.5 0 01-2.5 2.5H4A2.5 2.5 0 011.5 19.5v-15zM4 4a.5.5 0 00-.5.5v.638l8.25 5.25 8.25-5.25V4.5a.5.5 0 00-.5-.5H4zm16 2.862l-7.708 4.908a1.5 1.5 0 01-1.584 0L3 6.862V19.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5V6.862z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919315826870"
                  target="_blank"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16 2.933C8.64 2.933 2.667 8.906 2.667 16.266c0 2.88.84 5.614 2.44 7.996L2 30l5.84-3.08c2.278 1.254 4.874 1.915 7.493 1.915 7.36 0 13.334-5.973 13.334-13.334 0-7.36-5.974-13.334-13.334-13.334zm0 24.001c-2.24 0-4.426-.6-6.34-1.733l-.453-.267-3.88 2.026.826-4.027-.28-.426a11.267 11.267 0 01-2.046-6.27c0-6.253 5.08-11.334 11.333-11.334s11.334 5.08 11.334 11.334S22.253 26.934 16 26.934zm6.067-8.693c-.334-.173-1.974-.974-2.28-1.086-.307-.113-.533-.173-.76.173s-.867 1.086-1.067 1.307c-.2.22-.373.253-.693.086-.32-.16-1.36-.5-2.587-1.6-.957-.854-1.6-1.907-1.787-2.24-.187-.334-.02-.514.147-.68.15-.15.334-.373.5-.56.167-.187.22-.32.334-.534.113-.213.057-.4-.026-.56-.08-.16-.72-1.734-.993-2.387-.26-.62-.527-.54-.72-.55l-.62-.01c-.187 0-.493.08-.753.373-.26.293-1.02.987-1.02 2.413 0 1.427 1.04 2.807 1.213 3.014.173.207 2.047 3.127 4.947 4.387.693.3 1.233.48 1.653.613.693.22 1.32.19 1.813.113.553-.08 1.693-.68 1.933-1.333.24-.653.24-1.213.167-1.333-.067-.113-.24-.187-.507-.307z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-text-secondary">Web Development</span>
                </li>
                <li>
                  <span className="text-text-secondary">
                    Full-Stack Solutions
                  </span>
                </li>
                <li>
                  <span className="text-text-secondary">
                    Frontend Development
                  </span>
                </li>
                <li>
                  <span className="text-text-secondary">
                    Technical Consulting
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-6 text-center text-text-secondary">
            <p>
              &copy; 2025 Anurag Kumar. All rights reserved. Built with passion
              and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
