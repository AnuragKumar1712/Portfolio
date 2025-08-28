import { Link } from "react-router-dom";

function ProjectCTA() {
  return (
    <>
      {/* -- CTA Section -- */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with modern web
            technologies and proven development methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Discuss Your Project
            </Link>
            <Link to="/resume" className="btn btn-secondary text-lg px-8 py-4">
              View My Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectCTA;
