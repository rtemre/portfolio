import React, { useEffect, useRef, useState } from "react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
      title: "UX/UI Design",
      percentage: 95,
      description:
        "User-centered design with focus on accessibility and conversion optimization",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-success"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Frontend Development",
      percentage: 90,
      description:
        "Modern web technologies with performance and accessibility best practices",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-warning"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
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
