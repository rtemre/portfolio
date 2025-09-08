import React from "react";
import AnimatedProgressBar from "../AnimatedProgressBar";

const technicalSkills = [
  {
    id: 1,
    title: "UX Research & Strategy",
    percentage: 95,
    color: "accent",
    delay: 0,
    description:
      "User interviews, usability testing, journey mapping, persona development",
  },
  {
    id: 2,
    title: "UI Design & Prototyping",
    percentage: 92,
    color: "success",
    delay: 200,
    description: "Figma, Sketch, Adobe Creative Suite, interactive prototyping",
  },
  {
    id: 3,
    title: "Frontend Development",
    percentage: 88,
    color: "warning",
    delay: 400,
    description: "HTML, CSS, JavaScript, React basics, responsive design",
  },
  {
    id: 4,
    title: "Design Systems",
    percentage: 90,
    color: "accent",
    delay: 600,
    description:
      "Component libraries, style guides, design tokens, documentation",
  },
];

const softSkills = [
  {
    id: 1,
    title: "Communication & Presentation",
    percentage: 96,
    color: "success",
    delay: 800,
    description:
      "Stakeholder management, design storytelling, workshop facilitation",
  },
  {
    id: 2,
    title: "Strategic Problem Solving",
    percentage: 94,
    color: "accent",
    delay: 1000,
    description: "Systems thinking, constraint navigation, creative ideation",
  },
  {
    id: 3,
    title: "Cross-functional Collaboration",
    percentage: 93,
    color: "warning",
    delay: 1200,
    description:
      "Agile methodologies, developer handoff, product strategy alignment",
  },
  {
    id: 4,
    title: "Mentorship & Leadership",
    percentage: 89,
    color: "success",
    delay: 1400,
    description: "Junior designer guidance, design critique, knowledge sharing",
  },
];
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
              {technicalSkills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-primary">
                      {skill.title}
                    </span>
                    <span className={`text-sm text-${skill.color}`}>
                      {skill.percentage}%
                    </span>
                  </div>
                  <AnimatedProgressBar
                    percentage={skill.percentage}
                    color={`bg-${skill.color}`}
                    delay={skill.delay}
                  />
                  <p className="text-sm text-secondary mt-1">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-8 text-primary">
              Soft Skills
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-primary">
                      {skill.title}
                    </span>
                    <span className={`text-sm text-${skill.color}`}>
                      {skill.percentage}%
                    </span>
                  </div>
                  <AnimatedProgressBar
                    percentage={skill.percentage}
                    color={`bg-${skill.color}`}
                    delay={skill.delay}
                  />
                  <p className="text-sm text-secondary mt-1">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsCompetencies;
