import React from "react";

const timelineItems = [
  {
    id: 1,
    period: "2024 - Present",
    title: "Senior UX Designer",
    description:
      "Leading design strategy for enterprise SaaS platform serving 50,000+ users",
    achievements: [
      "Redesigned core user flows, improving task completion by 40%",
      "Established design system adopted across 3 product teams",
      "Mentored junior designers in user research methodologies",
    ],
    isReversed: false,
  },
  {
    id: 2,
    period: "2022 - 2024",
    title: "Product Designer",
    description:
      "Drove user experience for fintech startup from MVP to Series A",
    achievements: [
      "Conducted user research with 200+ participants",
      "Designed mobile app achieving 4.8 App Store rating",
      "Collaborated with engineering on technical feasibility",
    ],
    isReversed: true,
  },
  {
    id: 3,
    period: "2020 - 2022",
    title: "UX/UI Designer",
    description:
      "Specialized in e-commerce optimization for mid-market retailers",
    achievements: [
      "Increased conversion rates by average of 35% across clients",
      "Developed accessibility-first design approach",
      "Built relationships with cross-functional stakeholders",
    ],
    isReversed: false,
  },
  {
    id: 4,
    period: "2018 - 2020",
    title: "Junior Designer",
    description:
      "Foundation years learning design principles and user research",
    achievements: [
      "Mastered design tools and prototyping workflows",
      "Contributed to 15+ client projects across industries",
      "Developed passion for data-driven design decisions",
    ],
    isReversed: true,
  },
];
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
