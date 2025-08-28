import { useRef, useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // Simple notification function
  const showNotification = (message: string, type: "success" | "error") => {
    setStatus(`${type === "success" ? "✅" : "❌"} ${message}`);
    setTimeout(() => setStatus(null), 5000); // Hide after 5s
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_x8u0j0s",
        "template_1yphx8i",
        formRef.current,
        "jYrtbPFzSvoSkr_sn"
      )
      .then(
        () => {
          showNotification(
            "Thank you for your inquiry! I'll get back to you within 24-48 hours.",
            "success"
          );
          setLoading(false);
          formRef.current?.reset();
        },
        () => {
          showNotification("Failed to send. Please try again.", "error");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <section className="py-16 bg-surface/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Project
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Tell me about your project and let's explore how we can work
              together to create something exceptional.
            </p>
          </div>

          <div className="card p-8">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <select name="projectType" required className="form-input">
                    <option value="">Select project type</option>
                    <option value="full-time">Full-time Role</option>
                    <option value="contract">Contract Work</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Timeline
                  </label>
                  <select name="timeline" className="form-input">
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush project)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months-plus">6+ months</option>
                    <option value="ongoing">Ongoing relationship</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select name="budget" className="form-input">
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k-50k">$30,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="hourly">Hourly rate discussion</option>
                    <option value="equity">Equity/Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Priority Level
                  </label>
                  <select name="urgency" className="form-input">
                    <option value="normal">Normal</option>
                    <option value="high">High Priority</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Technologies Involved (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "React",
                    "Node.js",
                    "TypeScript",
                    "Next.js",
                    "MongoDB",
                    "PostgreSQL",
                    "Other",
                  ].map((tech) => (
                    <label key={tech} className="flex items-center">
                      <input
                        type="checkbox"
                        name="technologies"
                        value={tech.toLowerCase()}
                        className="mr-2 text-primary"
                      />
                      <span className="text-sm">{tech}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Description *
                </label>
                <textarea
                  name="description"
                  rows={6}
                  required
                  className="form-input resize-none"
                  placeholder="Please describe your project in detail..."
                ></textarea>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  rows={3}
                  className="form-input resize-none"
                  placeholder="Any additional context, references, or specific requirements..."
                ></textarea>
              </div>

              {/* Referral */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  How did you hear about me?
                </label>
                <select name="referral" className="form-input">
                  <option value="">Select source</option>
                  <option value="github">GitHub</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="portfolio">Portfolio Website</option>
                  <option value="referral">Referral</option>
                  <option value="social-media">Social Media</option>
                  <option value="search-engine">Search Engine</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button type="submit" className="btn btn-primary flex-1">
                  {loading ? "Sending..." : "Send Project Inquiry"}
                </button>
                <button type="reset" className="btn btn-secondary">
                  Clear Form
                </button>
              </div>

              {/* Form Footer */}
              <div className="text-center text-sm text-text-secondary pt-4 border-t border-border">
                <p>
                  Your information is secure and will never be shared with third
                  parties.
                </p>
              </div>

              {/* Status */}
              {status && <p className="text-center text-sm mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
