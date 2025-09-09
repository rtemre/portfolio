import { useEffect, useRef, useState } from "react";
import { skills } from "./constants.jsx";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Core Competencies
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A blend of creative vision and technical expertise, refined through
            years of collaborative problem-solving and strategic thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                {skill.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-primary">
                {skill.title}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                    isVisible ? `bg-accent` : "bg-transparent"
                  }`}
                  style={{ width: isVisible ? `${skill.percentage}%` : "0%" }}
                ></div>
              </div>
              <p className="text-secondary">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
