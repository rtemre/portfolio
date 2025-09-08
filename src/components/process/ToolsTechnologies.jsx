import React from "react";
import { tools } from "./constants";
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
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <div key={tool.id} className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 ${tool.bgColor} rounded-full flex items-center justify-center`}
                >
                  <IconComponent
                    className={`${tool.iconSize} ${tool.iconColor}`}
                  />
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3 text-primary">
                  {tool.title}
                </h3>
                <ul className="text-sm text-secondary space-y-1">
                  {tool.tools.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ToolsTechnologies;
