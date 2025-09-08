import React from "react";

function ResourcesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Resources and tools"
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
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
