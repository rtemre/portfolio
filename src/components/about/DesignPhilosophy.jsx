import React from "react";
import HumanCenteredIcon from "../../assets/svgs/human-centered";
import CollaborativeIcon from "../../assets/svgs/collaborative";
import SystematicIcon from "../../assets/svgs/systematic";

function DesignPhilosophy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Design Philosophy
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Core principles that guide my approach to balancing aesthetics with
            functionality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Human-Centered */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
              <HumanCenteredIcon className="w-10 h-10 text-accent" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-primary">
              Human-Centered
            </h3>
            <p className="text-secondary">
              Every design decision starts with understanding user needs,
              behaviors, and pain points. Research informs aesthetics, not the
              other way around.
            </p>
          </div>

          {/* Collaborative */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-success/10 rounded-full flex items-center justify-center">
              <CollaborativeIcon className="w-10 h-10 text-success" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-primary">
              Collaborative
            </h3>
            <p className="text-secondary">
              Great design emerges from diverse perspectives. I believe in
              co-creation with stakeholders, developers, and users throughout
              the process.
            </p>
          </div>

          {/* Systematic */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-warning/10 rounded-full flex items-center justify-center">
              <SystematicIcon className="w-10 h-10 text-warning" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-primary">
              Systematic
            </h3>
            <p className="text-secondary">
              Scalable design systems ensure consistency while allowing for
              creative expression. Structure enables innovation, not restricts
              it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignPhilosophy;
