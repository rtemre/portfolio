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

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className="relative flex flex-col lg:flex-row items-center"
                >
                  {/* Left Content (for even items) */}
                  <div className="w-full lg:w-1/2 lg:pr-12">
                    {isEven && (
                      <div className="card p-6">
                        <div className="text-sm text-accent font-semibold mb-2">
                          {item.period}
                        </div>
                        <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">
                          {item.title}
                        </h3>
                        <p className="text-secondary mb-4">
                          {item.description}
                        </p>
                        <ul className="text-sm text-secondary space-y-1">
                          {item.achievements.map((achievement) => (
                            <li key={achievement}>• {achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Center Timeline Dot */}
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg relative z-10 my-6 lg:my-0 lg:mx-6"></div>

                  {/* Right Content (for odd items) */}
                  <div className="w-full lg:w-1/2 lg:pl-12 lg:justify-start">
                    {!isEven && (
                      <div className="card p-6">
                        <div className="text-sm text-accent font-semibold mb-2">
                          {item.period}
                        </div>
                        <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">
                          {item.title}
                        </h3>
                        <p className="text-secondary mb-4">
                          {item.description}
                        </p>
                        <ul className="text-sm text-secondary space-y-1">
                          {item.achievements.map((achievement) => (
                            <li key={achievement}>• {achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Mobile Layout - Center content below dot */}
                  <div className="lg:hidden w-full max-w-md mx-auto mt-6">
                    <div className="card p-6 text-center">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalTimeline;
