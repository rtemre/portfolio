import React from "react";

function ToolsTechnologies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Tools & Technologies
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            We leverage industry-leading tools and technologies to ensure
            efficient collaboration and exceptional results throughout every
            phase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Research & Strategy */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="font-playfair text-lg font-semibold mb-3 text-primary">
              Research & Strategy
            </h3>
            <ul className="text-sm text-secondary space-y-1">
              <li>Google Analytics</li>
              <li>Hotjar</li>
              <li>Miro</li>
              <li>Notion</li>
            </ul>
          </div>

          {/* Design */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-success"
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
            </div>
            <h3 className="font-playfair text-lg font-semibold mb-3 text-primary">
              Design
            </h3>
            <ul className="text-sm text-secondary space-y-1">
              <li>Figma</li>
              <li>Adobe Creative Suite</li>
              <li>Principle</li>
              <li>InVision</li>
            </ul>
          </div>

          {/* Development */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-warning/10 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-warning"
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
            </div>
            <h3 className="font-playfair text-lg font-semibold mb-3 text-primary">
              Development
            </h3>
            <ul className="text-sm text-secondary space-y-1">
              <li>VS Code</li>
              <li>Git & GitHub</li>
              <li>Netlify</li>
              <li>Vercel</li>
            </ul>
          </div>

          {/* Collaboration */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-error/10 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-error"
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
            <h3 className="font-playfair text-lg font-semibold mb-3 text-primary">
              Collaboration
            </h3>
            <ul className="text-sm text-secondary space-y-1">
              <li>Slack</li>
              <li>Zoom</li>
              <li>Loom</li>
              <li>Calendly</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolsTechnologies;
