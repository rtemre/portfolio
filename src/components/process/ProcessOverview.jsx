import React from "react";

const phases = [
  {
    id: 1,
    number: 1,
    title: "Discovery & Strategy",
    description:
      "Understanding your business, users, and market landscape to establish a solid foundation for success.",
    timeline: "1-2 weeks",
    bgColor: "bg-accent",
    textColor: "text-accent",
    barColor: "bg-accent",
    isReversed: false,
    containerClass: "mb-16 md:mb-20",
    image: {
      src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Discovery and strategy phase",
      fallback:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    details: {
      activities: [
        "Stakeholder interviews",
        "Competitive analysis",
        "User research & personas",
        "Business goal alignment",
        "Technical requirements",
      ],
      deliverables: [
        "Project brief document",
        "User persona profiles",
        "Competitive landscape",
        "Technical specification",
        "Project roadmap",
      ],
      involvement: {
        percentage: 90,
        description: "High collaboration required for insights and feedback",
      },
    },
  },
  {
    id: 2,
    number: 2,
    title: "Planning & Architecture",
    description:
      "Structuring information and user flows to create intuitive navigation and optimal user experiences.",
    timeline: "1-2 weeks",
    bgColor: "bg-success",
    textColor: "text-success",
    barColor: "bg-success",
    isReversed: true,
    containerClass: "mb-16 md:mb-20",
    image: {
      src: "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      alt: "Planning and architecture phase",
      fallback:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    details: {
      activities: [
        "Site mapping & structure",
        "User flow diagrams",
        "Wireframe creation",
        "Content strategy",
        "Technical architecture",
      ],
      deliverables: [
        "Site map document",
        "User flow diagrams",
        "Low-fidelity wireframes",
        "Content outline",
        "Technical blueprint",
      ],
      involvement: {
        percentage: 70,
        description: "Regular reviews and approval checkpoints",
      },
    },
  },
  {
    id: 3,
    number: 3,
    title: "Design & Iteration",
    description:
      "Bringing concepts to life through visual design, prototyping, and user testing for optimal results.",
    timeline: "2-3 weeks",
    bgColor: "bg-warning",
    textColor: "text-warning",
    barColor: "bg-warning",
    isReversed: false,
    containerClass: "mb-16 md:mb-20",
    image: {
      src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Design and iteration phase",
      fallback:
        "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    },
    details: {
      activities: [
        "Visual design creation",
        "Interactive prototyping",
        "User testing sessions",
        "Design system development",
        "Accessibility optimization",
      ],
      deliverables: [
        "High-fidelity mockups",
        "Interactive prototypes",
        "Design system guide",
        "User testing reports",
        "Asset library",
      ],
      involvement: {
        percentage: 60,
        description: "Feedback sessions and design reviews",
      },
    },
  },
  {
    id: 4,
    number: 4,
    title: "Development & Implementation",
    description:
      "Transforming designs into functional, performant, and accessible digital experiences.",
    timeline: "3-4 weeks",
    bgColor: "bg-error",
    textColor: "text-error",
    barColor: "bg-error",
    isReversed: true,
    containerClass: "mb-16 md:mb-20",
    image: {
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Development and implementation phase",
      fallback:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    details: {
      activities: [
        "Frontend development",
        "CMS integration",
        "Performance optimization",
        "Quality assurance testing",
        "Cross-browser compatibility",
      ],
      deliverables: [
        "Functional website",
        "CMS setup & training",
        "Performance reports",
        "Testing documentation",
        "Code documentation",
      ],
      involvement: {
        percentage: 40,
        description: "Progress updates and milestone reviews",
      },
    },
  },
  {
    id: 5,
    number: 5,
    title: "Launch & Optimization",
    description:
      "Deploying your project and providing ongoing support to ensure continued success and growth.",
    timeline: "1 week + ongoing",
    bgColor: "bg-primary",
    textColor: "text-primary",
    barColor: "bg-primary",
    isReversed: false,
    containerClass: "",
    image: {
      src: "https://images.pixabay.com/photo/2015/02/05/08/21/marketing-626762_1280.jpg",
      alt: "Launch and optimization phase",
      fallback:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    details: {
      activities: [
        "Production deployment",
        "Analytics setup",
        "Performance monitoring",
        "User behavior analysis",
        "Ongoing optimization",
      ],
      deliverables: [
        "Live website",
        "Analytics dashboard",
        "Maintenance guide",
        "Performance baseline",
        "Support documentation",
      ],
      involvement: {
        percentage: 50,
        description: "Launch coordination and ongoing collaboration",
      },
    },
  },
];
function ProcessOverview() {
  return (
    <section id="process-overview" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Our Five-Phase Approach
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Each project follows a proven methodology that ensures quality
            outcomes while maintaining transparency and collaboration throughout
            the journey.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="relative mb-20">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20"></div>

          {phases.map((phase) => (
            <div key={phase.id} className={`relative ${phase.containerClass}`}>
              <div
                className={`flex flex-col ${
                  phase.isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center`}
              >
                <div
                  className={`md:w-1/2 ${
                    phase.isReversed ? "md:pl-12" : "md:pr-12"
                  } mb-8 md:mb-0`}
                >
                  <div
                    className="card p-8 process-card"
                    data-phase={phase.number}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 ${phase.bgColor} rounded-full flex items-center justify-center text-white font-bold mr-4`}
                      >
                        {phase.number}
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-primary">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-secondary mb-4">{phase.description}</p>
                    <div
                      className={`text-sm ${phase.textColor} font-medium mb-2`}
                    >
                      Timeline: {phase.timeline}
                    </div>
                    <button
                      className="text-accent hover:text-primary transition-colors duration-300 font-medium expand-btn"
                      data-target={`phase-${phase.number}-details`}
                    >
                      View Details →
                    </button>
                  </div>
                </div>
                <div
                  className={`md:w-1/2 ${
                    phase.isReversed ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <img
                    src={phase.image.src}
                    alt={phase.image.alt}
                    className="w-full h-64 object-cover rounded-lg shadow-medium"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = phase.image.fallback;
                      e.target.onError = null;
                    }}
                  />
                </div>
              </div>

              {/* Expandable Details */}
              <div
                id={`phase-${phase.number}-details`}
                className="hidden mt-8 card p-6 bg-white"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                      Key Activities
                    </h4>
                    <ul className="space-y-2 text-secondary">
                      {phase.details.activities.map((activity) => (
                        <li key={activity}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                      Deliverables
                    </h4>
                    <ul className="space-y-2 text-secondary">
                      {phase.details.deliverables.map((deliverable) => (
                        <li key={deliverable}>• {deliverable}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-semibold mb-3 text-primary">
                      Client Involvement
                    </h4>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className={`${phase.barColor} h-2 rounded-full`}
                        style={{
                          width: `${phase.details.involvement.percentage}%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-sm text-secondary">
                      {phase.details.involvement.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessOverview;
