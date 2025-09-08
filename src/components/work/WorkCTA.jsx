import React from "react";

function WorkCTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-display font-playfair mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Let's collaborate to create something extraordinary. Every great
          project starts with a conversation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="btn-primary bg-accent hover:bg-accent/90 text-lg px-8 py-4"
          >
            Start a Project
          </a>
          <a
            href="/process"
            className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
          >
            Learn My Process
          </a>
        </div>
      </div>
    </section>
  );
}

export default WorkCTA;
