import React from "react";

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
            {/* 2024 - Present */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:text-right">
                <div className="card p-6">
                  <div className="text-sm text-accent font-semibold mb-2">
                    2024 - Present
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">
                    Senior UX Designer
                  </h3>
                  <p className="text-secondary mb-4">
                    Leading design strategy for enterprise SaaS platform serving
                    50,000+ users
                  </p>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>
                      • Redesigned core user flows, improving task completion by
                      40%
                    </li>
                    <li>
                      • Established design system adopted across 3 product teams
                    </li>
                    <li>
                      • Mentored junior designers in user research methodologies
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-4 h-4 bg-accent rounded-full mx-auto relative z-10"></div>
              </div>
              <div className="lg:hidden">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
              </div>
            </div>

            {/* 2022 - 2024 */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="card p-6">
                  <div className="text-sm text-accent font-semibold mb-2">
                    2022 - 2024
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">
                    Product Designer
                  </h3>
                  <p className="text-secondary mb-4">
                    Drove user experience for fintech startup from MVP to Series
                    A
                  </p>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Conducted user research with 200+ participants</li>
                    <li>
                      • Designed mobile app achieving 4.8 App Store rating
                    </li>
                    <li>
                      • Collaborated with engineering on technical feasibility
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden lg:block lg:order-1">
                <div className="w-4 h-4 bg-accent rounded-full mx-auto relative z-10"></div>
              </div>
              <div className="lg:hidden">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
              </div>
            </div>

            {/* 2020 - 2022 */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:text-right">
                <div className="card p-6">
                  <div className="text-sm text-accent font-semibold mb-2">
                    2020 - 2022
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">
                    UX/UI Designer
                  </h3>
                  <p className="text-secondary mb-4">
                    Specialized in e-commerce optimization for mid-market
                    retailers
                  </p>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>
                      • Increased conversion rates by average of 35% across
                      clients
                    </li>
                    <li>• Developed accessibility-first design approach</li>
                    <li>
                      • Built relationships with cross-functional stakeholders
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-4 h-4 bg-accent rounded-full mx-auto relative z-10"></div>
              </div>
              <div className="lg:hidden">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
              </div>
            </div>

            {/* 2018 - 2020 */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="card p-6">
                  <div className="text-sm text-accent font-semibold mb-2">
                    2018 - 2020
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-primary">
                    Junior Designer
                  </h3>
                  <p className="text-secondary mb-4">
                    Foundation years learning design principles and user
                    research
                  </p>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Mastered design tools and prototyping workflows</li>
                    <li>
                      • Contributed to 15+ client projects across industries
                    </li>
                    <li>
                      • Developed passion for data-driven design decisions
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden lg:block lg:order-1">
                <div className="w-4 h-4 bg-accent rounded-full mx-auto relative z-10"></div>
              </div>
              <div className="lg:hidden">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalTimeline;
