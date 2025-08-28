import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What types of projects do you work on?",
    answer:
      "I specialize in full-stack web applications, particularly React/Node.js projects. This includes e-commerce platforms, APIs, real-time applications, and custom web solutions. I also work on technical consulting, code reviews, and mentorship projects.",
  },
  {
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary based on complexity. Simple websites take 2-4 weeks, medium complexity applications take 1-3 months, and large-scale projects can take 3-6 months. I provide detailed timelines during the initial consultation based on your specific requirements.",
  },
  {
    question: "What's included in your development process?",
    answer:
      "My process includes requirement analysis, technical architecture planning, UI/UX design, development, testing, deployment, and post-launch support. I also provide documentation, code reviews, and knowledge transfer sessions.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "I believe in transparent, regular communication. This includes weekly progress updates, milestone reviews, and immediate notification of any blockers. Regular updates via email or chat, or your preferred communication platform for seamless collaboration.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="py-16 bg-surface/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary text-lg">
              Quick answers to common questions about working together
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-button w-full text-left p-6 flex items-center justify-between"
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-text-secondary transform transition-transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="faq-content px-6 pb-6">
                    <p className="text-text-secondary">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQSection;
