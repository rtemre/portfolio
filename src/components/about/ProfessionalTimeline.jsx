import React from "react";
import { timelineItems } from "./constants";
function ProfessionalTimeline() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Professional Evolution
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Key milestones and learning experiences that shaped my approach to
            design and collaboration
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item) => (
              <div
                key={item.id}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div
                  className={`lg:${item.isReversed ? "order-2" : "text-right"}`}
                >
                  <div className="card p-6">
                    <div className="text-sm text-accent font-semibold mb-2">
                      {item.period}
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">
                      {item.title}
                    </h3>
                    <p className="text-secondary mb-4">{item.description}</p>
                    <ul className="text-sm text-secondary space-y-1">
                      {item.achievements.map((achievement) => (
                        <li key={achievement}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className={`hidden lg:block ${
                    item.isReversed ? "lg:order-1" : ""
                  }`}
                >
                  <div className="w-4 h-4 bg-accent rounded-full mx-auto relative z-10"></div>
                </div>
                <div className="lg:hidden">
                  <div className="w-4 h-4 bg-accent rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalTimeline;
