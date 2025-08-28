import TestimonialImg1 from "../assets/images/Rahul.png";
import TestimonialImg2 from "../assets/images/Deepanshu_Drivigo.jfif";
import Availability from "../components/Availability";
import ContactForm from "../components/ContactForm";
import FAQSection from "../components/FAQSection";

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background via-surface/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse mr-2"></div>
            <span className="text-secondary text-sm font-medium">
              Available for New Projects
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Let's Build</span>
            <br />
            <span className="text-text-primary">Something Amazing</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            Ready to collaborate on your next project? I'm passionate about
            creating scalable solutions that make a real impact. Let's discuss
            how we can bring your ideas to life.
          </p>

          <div className="flex items-center justify-center space-x-1 text-sm text-text-secondary mb-12">
            <svg
              className="w-4 h-4 text-secondary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>Typical response time: 24-48 hours</span>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Email */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-text-secondary text-sm mb-4">
                For detailed project discussions
              </p>
              <a
                href="mailto:anuragkumarroy1712@gmail.com"
                className="text-primary hover:text-primary-400 font-medium text-sm"
              >
                anuragkumarroy1712@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-text-secondary text-sm mb-4">
                Professional networking
              </p>
              <a
                href="https://www.linkedin.com/in/anuragkumar1702/"
                target="_blank"
                className="text-secondary hover:text-secondary-400 font-medium text-sm"
              >
                /anuragkumar1702/
              </a>
            </div>
            {/* GitHub */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-text-secondary text-sm mb-4">
                Technical discussions
              </p>
              <a
                href="https://github.com/AnuragKumar1712"
                target="_blank"
                className="text-accent hover:text-accent-400 font-medium text-sm"
              >
                @AnuragKumar1712
              </a>
            </div>
            {/* Schedule Call */}
            <div className="card p-6 text-center group hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Schedule Call</h3>
              <p className="text-text-secondary text-sm mb-4">
                Book a consultation
              </p>
              <a
                href="tel:9315826870"
                className="text-primary hover:text-primary-400 font-medium text-sm"
              >
                Book Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Availability */}
      <Availability />

      {/* FAQ Section */}
      <FAQSection />

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Success Stories
            </h2>
            <p className="text-text-secondary text-lg">
              What clients say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <img
                  src={TestimonialImg1}
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Rahul</h4>
                  <p className="text-text-secondary text-sm">Entrepreneur</p>
                </div>
              </div>
              <p className="text-text-secondary mb-4">
                "Anurag delivered our website ahead of schedule with exceptional
                quality. His technical expertise and communication skills made
                the entire process smooth."
              </p>
              <div className="flex items-center text-accent text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Project completed 2 weeks early</span>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <img
                  src={TestimonialImg2}
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Deepanshu</h4>
                  <p className="text-text-secondary text-sm">
                    Entrepreneur | Founder - Drivigo
                  </p>
                </div>
              </div>
              <p className="text-text-secondary mb-4">
                "Working with Anurag was a game-changer for our startup. He not
                only help in builting our website in early days but also
                provided valuable technical guidance."
              </p>
              <div className="flex items-center text-secondary text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Completed collaboration in 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
