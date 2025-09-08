import React from "react";
import { phases } from "./constants";
function ProcessOverview() {
  return (
    <section id="process-overview" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Our Five-Phase Approach
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Each project follows a proven methodology that ensures quality
            outcomes while maintaining transparency and collaboration throughout
            the journey.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="relative mb-20">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20"></div>

          {phases.map((phase) => (
            <div key={phase.id} className={`relative ${phase.containerClass}`}>
              <div
                className={`flex flex-col ${
                  phase.isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center`}
              >
                <div
                  className={`md:w-1/2 ${
                    phase.isReversed ? "md:pl-12" : "md:pr-12"
                  } mb-8 md:mb-0`}
                >
                  <div
                    className="card p-8 process-card"
                    data-phase={phase.number}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 ${phase.bgColor} rounded-full flex items-center justify-center text-white font-bold mr-4`}
                      >
                        {phase.number}
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-primary">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-secondary mb-4">{phase.description}</p>
                    <div
                      className={`text-sm ${phase.textColor} font-medium mb-2`}
                    >
                      Timeline: {phase.timeline}
                    </div>
                    <button
                      className="text-accent hover:text-primary transition-colors duration-300 font-medium expand-btn"
                      data-target={`phase-${phase.number}-details`}
                    >
                      View Details →
                    </button>
                  </div>
                </div>
                <div
                  className={`md:w-1/2 ${
                    phase.isReversed ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <img
                    src={phase.image.src}
                    alt={phase.image.alt}
                    className="w-full h-64 object-cover rounded-lg shadow-medium"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = phase.image.fallback;
                      e.target.onError = null;
                    }}
                  />
                </div>
              </div>

              {/* Expandable Details */}
              <div
                id={`phase-${phase.number}-details`}
                className="hidden mt-8 card p-6 bg-white"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                      Key Activities
                    </h4>
                    <ul className="space-y-2 text-secondary">
                      {phase.details.activities.map((activity) => (
                        <li key={activity}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                      Deliverables
                    </h4>
                    <ul className="space-y-2 text-secondary">
                      {phase.details.deliverables.map((deliverable) => (
                        <li key={deliverable}>• {deliverable}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                      Client Involvement
                    </h4>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className={`${phase.barColor} h-2 rounded-full`}
                        style={{
                          width: `${phase.details.involvement.percentage}%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-sm text-secondary">
                      {phase.details.involvement.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessOverview;
