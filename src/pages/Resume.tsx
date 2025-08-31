import { useEffect } from "react";
import { Link } from "react-router-dom";
import EndImg1 from "../assets/images/Anubhav.jpg";
import EndImg2 from "../assets/images/Deepanshu_Drivigo.jfif";

type DownloadFormat = "pdf" | "docx";

function Resume() {
  const handleDownload = (format: DownloadFormat) => {
    const filename = `Anurag_Kumar_Resume.${format}`;
    showNotification(`Downloading ${filename}...`, "success");
    // In a real app, file would be served via server or public folder
  };

  const handlePrint = () => {
    const nav = document.querySelector("nav") as HTMLElement;
    const downloadSection = document.querySelector(
      ".download-buttons"
    ) as HTMLElement;
    const footer = document.querySelector("footer") as HTMLElement;

    if (nav) nav.style.display = "none";
    if (downloadSection) downloadSection.style.display = "none";
    if (footer) footer.style.display = "none";

    window.print();

    setTimeout(() => {
      if (nav) nav.style.display = "block";
      if (downloadSection) downloadSection.style.display = "flex";
      if (footer) footer.style.display = "block";
    }, 1000);
  };

  const showNotification = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    const notification = document.createElement("div");
    notification.className = `fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;

    switch (type) {
      case "success":
        notification.classList.add("bg-secondary", "text-background");
        break;
      case "error":
        notification.classList.add("bg-error", "text-text-primary");
        break;
      default:
        notification.classList.add("bg-primary", "text-text-primary");
    }

    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.remove("translate-x-full");
    }, 100);

    setTimeout(() => {
      notification.classList.add("translate-x-full");
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };

  useEffect(() => {
    const printStyles = `
        @media print {
            body { background: white !important; color: black !important; }
            .card { border: 1px solid #ccc !important; box-shadow: none !important; page-break-inside: avoid; }
            .bg-surface { background: white !important; }
            .text-text-primary { color: black !important; }
            .text-text-secondary { color: #666 !important; }
            .text-primary { color: #0ea5e9 !important; }
            .text-secondary { color: #10b981 !important; }
            .text-accent { color: #f59e0b !important; }
            nav, footer, .btn { display: none !important; }
            h2 { page-break-after: avoid; }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = printStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <>
      <section className="pt-24 pb-12 bg-surface/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Resume
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              Comprehensive overview of my technical expertise, professional
              experience, and achievements in full-stack development
            </p>

            {/* Download Options */}
            <div className="download-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/Anurag_Kumar_Resume.pdf"
                className="btn btn-primary"
                onClick={() => handleDownload("pdf")}
                download
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </a>

              <a
                href="/Anurag_Kumar_Resume.docx"
                className="btn btn-secondary"
                onClick={() => handleDownload("docx")}
                download
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Word
              </a>

              <button className="btn btn-accent" onClick={handlePrint}>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                Print Version
              </button>
            </div>

            {/* Last Updated */}
            <div className="mt-6 text-sm text-text-secondary">
              <span className="inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Last updated: August 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* -- Resume Content -- */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="resume-content" className="space-y-12">
            {/* -- Professional Summary -- */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Anurag Kumar</h2>
                  <p className="text-text-secondary">Full-Stack Developer</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center text-text-secondary">
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    anuragkumarroy1712@gmail.com
                  </div>
                  <div className="flex items-center text-text-secondary">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +91 9315826870
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-text-secondary">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Delhi, India
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    linkedin.com/in/anuragkumar1702/
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-semibold mb-3">
                  Professional Summary
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Full-Stack Developer with expertise in building scalable web
                  applications using React, Node.js, and modern JavaScript
                  frameworks. Proven track record of delivering high-performance
                  solutions that improve user engagement by 40% and reduce load
                  times by 60%. Passionate about clean code, agile
                  methodologies, and collaborative development. Seeking to
                  leverage technical skills and problem-solving abilities to
                  drive innovation in a forward-thinking technology company.
                </p>
              </div>
            </div>

            {/* -- Technical Skills -- */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Technical Skills</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">
                    Frontend Technologies
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">React.js</span>
                      <div className="hidden sm:flex items-center">
                        <div className="w-24 bg-border rounded-full h-2 mr-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-text-secondary">
                          Expert
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">
                        JavaScript/TypeScript
                      </span>
                      <div className="hidden sm:flex items-center">
                        <div className="w-24 bg-border rounded-full h-2 mr-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: "92%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-text-secondary">
                          Expert
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">HTML5/CSS3</span>
                      <div className="hidden sm:flex items-center">
                        <div className="w-24 bg-border rounded-full h-2 mr-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-text-secondary">
                          Expert
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Tailwind CSS</span>
                      <div className="hidden sm:flex items-center">
                        <div className="w-24 bg-border rounded-full h-2 mr-2">
                          <div
                            className="bg-secondary h-2 rounded-full"
                            style={{ width: "88%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-text-secondary">
                          Advanced
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-secondary">
                    Backend Technologies
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Node.js</span>
                      <div className="hidden sm:flex items-center">
                        <div className="w-24 bg-border rounded-full h-2 mr-2">
                          <div
                            className="bg-secondary h-2 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-text-secondary">
                          Expert
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Express.js</span>
                      <div className="hidden sm:flex items-center">
                        <div className="w-24 bg-border rounded-full h-2 mr-2">
                          <div
                            className="bg-secondary h-2 rounded-full"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-text-secondary">
                          Intermediate
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">MongoDB</span>
                      <div className="hidden sm:flex items-center">
                        <div className="w-24 bg-border rounded-full h-2 mr-2">
                          <div
                            className="bg-secondary h-2 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-text-secondary">
                          Advanced
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">SQL</span>
                      <div className="hidden sm:flex items-center">
                        <div className="w-24 bg-border rounded-full h-2 mr-2">
                          <div
                            className="bg-accent h-2 rounded-full"
                            style={{ width: "82%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-text-secondary">
                          Advanced
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-lg font-semibold mb-4 text-accent">
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Git/GitHub
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    MSOffice
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    Anaconda
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Jupyter
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    VSCode
                  </span>
                </div>
              </div>
            </div>

            {/* -- Featured Projects -- */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Featured Projects</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* -- Project 1 -- */}
                <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">
                      Movie Information Website
                    </h3>
                    <Link
                      to="/projects"
                      className="text-primary hover:text-primary-400"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                  <p className="text-text-secondary text-sm mb-4">
                    This project offers users an intuitive platform to explore
                    top-rated and upcoming movies with a sleek and modern
                    design.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                      React
                    </span>
                    <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded">
                      MongoDB
                    </span>
                  </div>
                </div>

                {/* -- Project 2 -- */}
                <div className="border border-border rounded-lg p-6 hover:border-secondary transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">
                      Expense Tracker Pro
                    </h3>
                    <Link
                      to="/projects"
                      className="text-secondary hover:text-secondary-400"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                  <p className="text-text-secondary text-sm mb-4">
                    This is a backend project I built while completing a Udemy
                    course on Node.js, Express, MongoDB, and REST APIs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                      Node
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

              <div className="text-center mt-6">
                <Link
                  to="/projects"
                  className="text-primary hover:text-primary-400 font-medium"
                >
                  View All Projects →
                </Link>
              </div>
            </div>

            {/* -- Education & Certifications -- */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* -- Education -- */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
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
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold">Education</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold">
                      Bachelor of Technology in CSE
                    </h3>
                    <p className="text-secondary">SGT University, Gurugram</p>
                    <p className="text-text-secondary text-sm">
                      2022 - 2026 | CGPA: 8.6/10.0
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Full-Stack Development Training Program
                    </h3>
                    <p className="text-accent">By Navriti at SGT University</p>
                    <p className="text-text-secondary text-sm">
                      2024 | Certificate of Completion
                    </p>
                  </div>
                </div>
              </div>

              {/* -- Certifications -- */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
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
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold">Certifications</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-sm">Generative AI</h3>
                      <p className="text-text-secondary text-xs">
                        UDEMY Platform
                      </p>
                    </div>
                    <span className="text-xs text-text-secondary">2025</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-sm">
                        React Masterclass
                      </h3>
                      <p className="text-text-secondary text-xs">Scaler</p>
                    </div>
                    <span className="text-xs text-text-secondary">2024</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-sm">
                        Node.js Developer
                      </h3>
                      <p className="text-text-secondary text-xs">Coursera</p>
                    </div>
                    <span className="text-xs text-text-secondary">2024</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-sm">
                        Python Programming Masterclass
                      </h3>
                      <p className="text-text-secondary text-xs">
                        UDEMY Platform
                      </p>
                    </div>
                    <span className="text-xs text-text-secondary">2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* -- LinkedIn Endorsements -- */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">
                  Professional Endorsements
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-text-secondary italic mb-3">
                    "Anurag is an exceptional developer who consistently
                    delivers high-quality solutions. His expertise in React and
                    Node.js helped our team exceed project goals."
                  </p>
                  <div className="flex items-center">
                    <img
                      src={EndImg1}
                      alt="Anubhav Kumar"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-sm">Anubhav Kumar</p>
                      <p className="text-text-secondary text-xs">
                        Developer, Ex-TCS
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-text-secondary italic mb-3">
                    "Working with Anurag was a pleasure. His technical skills
                    and collaborative approach made our project a huge success.
                    Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={EndImg2}
                      alt="Deepanshu"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-sm">Deepanshu</p>
                      <p className="text-text-secondary text-xs">
                        Entrepreneur | Founder - Drivigo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
