function ResourcesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/creative-workspace.jpeg"
          alt="Resources and tools"
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
          Resources & <span className="text-accent">Tools</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up">
          Free design resources, templates, checklists, and tools to help you
          create better digital experiences and streamline your workflow.
        </p>
      </div>
    </section>
  );
}

export default ResourcesHero;
