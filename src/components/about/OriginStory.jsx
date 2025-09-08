import React from "react";

const paragraphs = [
  "My journey into design began unexpectedly during my psychology studies, where I became fascinated by how people interact with digital interfaces. What started as a side project—redesigning my university's confusing course registration system—revealed my passion for solving complex problems through thoughtful design.",
  "That first project taught me that great design isn't just about making things look beautiful; it's about understanding human behavior, anticipating needs, and creating experiences that feel effortless. This realization shifted my entire career trajectory from psychology to design, but the foundation of understanding human behavior remains central to everything I create.",
  "Today, I bring this psychological insight to every project, ensuring that aesthetic decisions are grounded in user research and that every interaction serves a purpose in the broader user journey.",
];
function OriginStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Origin Story
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            How a curiosity about human behavior and technology led to a passion
            for user-centered design
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg text-secondary leading-relaxed ${
                index < paragraphs.length - 1 ? "mb-6" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OriginStory;
