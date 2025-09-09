function WorkHeader() {
  return (
    <section className="pt-32 pb-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-hero font-playfair mb-6 text-primary">
            Portfolio <span className="text-accent">Showcase</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            A curated collection of projects spanning web design, branding,
            UX/UI, and development. Each piece represents a unique challenge
            solved through strategic thinking and creative execution.
          </p>
        </div>

        {/* Portfolio Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-accent mb-2">
              24
            </div>
            <div className="text-secondary">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-accent mb-2">
              5
            </div>
            <div className="text-secondary">Years Active</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-accent mb-2">
              8
            </div>
            <div className="text-secondary">Industries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-accent mb-2">
              18
            </div>
            <div className="text-secondary">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkHeader;
