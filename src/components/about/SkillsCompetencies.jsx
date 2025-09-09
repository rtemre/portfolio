import AnimatedProgressBar from "../AnimatedProgressBar";
import { technicalSkills, softSkills } from "./constants";
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
