import { Link } from "react-router-dom";

function ProcessHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/contact-process-background.jpeg"
          alt="Design process workflow"
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/images/general-design-image.jpeg";
            e.target.onError = null;
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-hero font-playfair mb-6 animate-fade-in text-white">
          Methodology That <span className="text-accent">Delivers</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up">
          A structured approach to creative problem-solving that transforms
          complex challenges into elegant solutions through collaborative
          partnership and strategic thinking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <a
            href="#process-overview"
            className="btn-primary text-lg px-8 py-4 bg-accent hover:bg-accent/90"
          >
            Explore Our Process
          </a>
          <Link
            to="/contact"
            className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProcessHero;
