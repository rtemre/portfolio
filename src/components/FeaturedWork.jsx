import React from "react";
import { Link } from "react-router-dom";

function FeaturedWork() {
  const projects = [
    {
      id: 1,
      image: "/images/ecommerce-platform.jpeg",
      title: "E-commerce Platform Redesign",
      description:
        "Complete UX overhaul resulting in 40% increase in conversion rates",
      client: "TechCorp • 2024",
      tags: ["UX/UI Design", "Frontend Dev"],
      link: "/work",
    },
    {
      id: 2,
      image: "/images/healthcare-brand-identity.jpeg",
      title: "FinTech Mobile App",
      description: "User-centered design for complex financial workflows",
      client: "StartupXYZ • 2024",
      tags: ["Mobile Design", "User Research"],
      link: "/work",
    },
    {
      id: 3,
      image: "/images/design-process-hero.jpeg",
      title: "Brand Identity System",
      description:
        "Complete rebrand including logo, guidelines, and digital assets",
      client: "Creative Agency • 2024",
      tags: ["Brand Strategy", "Visual Identity"],
      link: "/work",
    },
    {
      id: 4,
      image: "/images/analytics-dashboard.jpeg",
      title: "Analytics Dashboard",
      description: "Complex data visualization made intuitive and actionable",
      client: "DataCorp • 2024",
      tags: ["Data Viz", "Dashboard Design"],
      link: "/work",
    },
    {
      id: 5,
      image: "/images/typography-guide.jpeg",
      title: "Corporate Website Redesign",
      description: "Modern, accessible design with improved user journey",
      client: "Enterprise Inc • 2024",
      tags: ["Web Design", "Accessibility"],
      link: "/work",
    },
    {
      id: 6,
      image: "/images/design-process-hero.jpeg",
      title: "Digital Marketing Campaign",
      description:
        "Multi-channel campaign design with cohesive visual strategy",
      client: "Marketing Pro • 2024",
      tags: ["Campaign Design", "Visual Strategy"],
      link: "/work",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Featured Work
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A curated selection of recent projects showcasing the intersection
            of strategy, creativity, and technical excellence.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card group cursor-pointer overflow-hidden"
              onClick={() => (window.location.href = project.link)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/images/fallback-image.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-playfair text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.client}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-surface text-secondary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/work" className="btn-primary text-lg px-8 py-4">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
