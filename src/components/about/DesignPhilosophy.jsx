import React from "react";

function DesignPhilosophy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Design Philosophy
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Core principles that guide my approach to balancing aesthetics with
            functionality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Human-Centered */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-primary">
              Human-Centered
            </h3>
            <p className="text-secondary">
              Every design decision starts with understanding user needs,
              behaviors, and pain points. Research informs aesthetics, not the
              other way around.
            </p>
          </div>

          {/* Collaborative */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-success/10 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-primary">
              Collaborative
            </h3>
            <p className="text-secondary">
              Great design emerges from diverse perspectives. I believe in
              co-creation with stakeholders, developers, and users throughout
              the process.
            </p>
          </div>

          {/* Systematic */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-warning/10 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-warning"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-primary">
              Systematic
            </h3>
            <p className="text-secondary">
              Scalable design systems ensure consistency while allowing for
              creative expression. Structure enables innovation, not restricts
              it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignPhilosophy;
