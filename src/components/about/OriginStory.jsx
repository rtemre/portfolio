import React from "react";

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
          <p className="text-lg text-secondary leading-relaxed mb-6">
            My journey into design began unexpectedly during my psychology
            studies, where I became fascinated by how people interact with
            digital interfaces. What started as a side project—redesigning my
            university's confusing course registration system—revealed my
            passion for solving complex problems through thoughtful design.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            That first project taught me that great design isn't just about
            making things look beautiful; it's about understanding human
            behavior, anticipating needs, and creating experiences that feel
            effortless. This realization shifted my entire career trajectory
            from psychology to design, but the foundation of understanding human
            behavior remains central to everything I create.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            Today, I bring this psychological insight to every project, ensuring
            that aesthetic decisions are grounded in user research and that
            every interaction serves a purpose in the broader user journey.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OriginStory;
