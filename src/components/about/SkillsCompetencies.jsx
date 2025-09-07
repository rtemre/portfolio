import React from "react";
import AnimatedProgressBar from "../AnimatedProgressBar";

function SkillsCompetencies() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Skills & Competencies
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A blend of technical expertise and soft skills refined through
            collaborative problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-8 text-primary">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {/* UX Research & Strategy */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-primary">
                    UX Research & Strategy
                  </span>
                  <span className="text-sm text-accent">95%</span>
                </div>
                <AnimatedProgressBar
                  percentage={95}
                  color="bg-accent"
                  delay={0}
                />
                <p className="text-sm text-secondary mt-1">
                  User interviews, usability testing, journey mapping, persona
                  development
                </p>
              </div>

              {/* UI Design & Prototyping */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-primary">
                    UI Design & Prototyping
                  </span>
                  <span className="text-sm text-success">92%</span>
                </div>
                <AnimatedProgressBar
                  percentage={92}
                  color="bg-success"
                  delay={200}
                />
                <p className="text-sm text-secondary mt-1">
                  Figma, Sketch, Adobe Creative Suite, interactive prototyping
                </p>
              </div>

              {/* Frontend Development */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-primary">
                    Frontend Development
                  </span>
                  <span className="text-sm text-warning">88%</span>
                </div>
                <AnimatedProgressBar
                  percentage={88}
                  color="bg-warning"
                  delay={400}
                />
                <p className="text-sm text-secondary mt-1">
                  HTML, CSS, JavaScript, React basics, responsive design
                </p>
              </div>

              {/* Design Systems */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-primary">
                    Design Systems
                  </span>
                  <span className="text-sm text-accent">90%</span>
                </div>
                <AnimatedProgressBar
                  percentage={90}
                  color="bg-accent"
                  delay={600}
                />
                <p className="text-sm text-secondary mt-1">
                  Component libraries, style guides, design tokens,
                  documentation
                </p>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-8 text-primary">
              Soft Skills
            </h3>
            <div className="space-y-6">
              {/* Communication */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-primary">
                    Communication & Presentation
                  </span>
                  <span className="text-sm text-success">96%</span>
                </div>
                <AnimatedProgressBar
                  percentage={96}
                  color="bg-success"
                  delay={800}
                />
                <p className="text-sm text-secondary mt-1">
                  Stakeholder management, design storytelling, workshop
                  facilitation
                </p>
              </div>

              {/* Problem Solving */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-primary">
                    Strategic Problem Solving
                  </span>
                  <span className="text-sm text-accent">94%</span>
                </div>
                <AnimatedProgressBar
                  percentage={94}
                  color="bg-accent"
                  delay={1000}
                />
                <p className="text-sm text-secondary mt-1">
                  Systems thinking, constraint navigation, creative ideation
                </p>
              </div>

              {/* Collaboration */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-primary">
                    Cross-functional Collaboration
                  </span>
                  <span className="text-sm text-warning">93%</span>
                </div>
                <AnimatedProgressBar
                  percentage={93}
                  color="bg-warning"
                  delay={1200}
                />
                <p className="text-sm text-secondary mt-1">
                  Agile methodologies, developer handoff, product strategy
                  alignment
                </p>
              </div>

              {/* Mentorship */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-primary">
                    Mentorship & Leadership
                  </span>
                  <span className="text-sm text-success">89%</span>
                </div>
                <AnimatedProgressBar
                  percentage={89}
                  color="bg-success"
                  delay={1400}
                />
                <p className="text-sm text-secondary mt-1">
                  Junior designer guidance, design critique, knowledge sharing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsCompetencies;
