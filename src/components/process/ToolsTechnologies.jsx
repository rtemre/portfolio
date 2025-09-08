import React from "react";
import ChartBarIcon from "../../assets/svgs/chart-bar";
import UxUiDesignIcon from "../../assets/svgs/ux-ui-design";
import FrontendDevelopmentIcon from "../../assets/svgs/frontend-development";
import CollaborativeIcon from "../../assets/svgs/collaborative";

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
              <ChartBarIcon className="w-8 h-8 text-accent" />
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
              <UxUiDesignIcon className="w-8 h-8 text-success" />
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
              <FrontendDevelopmentIcon className="w-8 h-8 text-warning" />
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
              <CollaborativeIcon className="w-6 h-6 text-error" />
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
