import React, { useEffect, useRef, useState } from "react";
import UxUiDesignIcon from "../assets/svgs/ux-ui-design";
import FrontendDevelopmentIcon from "../assets/svgs/frontend-development";
import BrandStrategyIcon from "../assets/svgs/brand-strategy";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    {
      icon: <UxUiDesignIcon className="w-12 h-12 text-accent" />,
      title: "UX/UI Design",
      percentage: 95,
      description:
        "User-centered design with focus on accessibility and conversion optimization",
    },
    {
      icon: <FrontendDevelopmentIcon className="w-12 h-12 text-success" />,
      title: "Frontend Development",
      percentage: 90,
      description:
        "Modern web technologies with performance and accessibility best practices",
    },
    {
      icon: <BrandStrategyIcon className="w-12 h-12 text-warning" />,
      title: "Brand Strategy",
      percentage: 85,
      description:
        "Strategic thinking that aligns creative vision with business objectives",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
