import { Link } from "react-router-dom";
import { heroConstants } from "./constants";

function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={heroConstants.images.primary}
                alt={heroConstants.images.alt}
                className="w-full h-96 lg:h-[500px] object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src = heroConstants.images.fallback;
                  e.target.onError = null;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-success/10 rounded-full blur-xl"></div>
          </div>

          {/* Personal Statement */}
          <div className="space-y-6">
            <h1 className="text-hero font-playfair text-primary animate-fade-in">
              Hello, I am{" "}
              <span className="text-accent">{heroConstants.name}</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed animate-slide-up">
              {heroConstants.personalStatements[0]}
            </p>
            <p className="text-lg text-secondary leading-relaxed animate-slide-up">
              {heroConstants.personalStatements[1]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Link to="/work" className="btn-primary">
                {heroConstants.buttonTexts.viewWork}
              </Link>
              <a href="#resume-download" className="btn-secondary">
                {heroConstants.buttonTexts.downloadResume}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
