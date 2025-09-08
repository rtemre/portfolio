import React from "react";
import { philosophyItems } from "./constants";
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
          {philosophyItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 ${item.bgColor} rounded-full flex items-center justify-center`}
                >
                  <IconComponent className={`w-10 h-10 ${item.iconColor}`} />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-primary">
                  {item.title}
                </h3>
                <p className="text-secondary">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DesignPhilosophy;
