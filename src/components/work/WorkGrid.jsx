import React from "react";
import SearchIcon from "../../assets/svgs/search";

const projects = [
  {
    id: 1,
    type: "web-design",
    industry: "tech",
    year: "2024",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "E-commerce platform redesign",
      fallback:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      height: "h-64",
    },
    hover: {
      title: "TechCorp Platform",
      subtitle: "Complete UX overhaul",
    },
    title: "E-commerce Platform Redesign",
    client: "TechCorp",
    description:
      "Complete UX overhaul resulting in 40% increase in conversion rates",
    tags: ["Web Design", "UX/UI"],
  },
  {
    id: 2,
    type: "branding",
    industry: "healthcare",
    year: "2024",
    image: {
      src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Healthcare brand identity",
      fallback:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3",
      height: "h-80",
    },
    hover: {
      title: "MedCare Identity",
      subtitle: "Complete brand system",
    },
    title: "Healthcare Brand Identity",
    client: "MedCare Solutions",
    description:
      "Comprehensive brand identity for healthcare technology startup",
    tags: ["Branding", "Visual Identity"],
  },
  {
    id: 3,
    type: "ux-ui",
    industry: "finance",
    year: "2024",
    image: {
      src: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg",
      alt: "FinTech mobile app",
      fallback:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      height: "h-64",
    },
    hover: {
      title: "FinTech App",
      subtitle: "Mobile banking solution",
    },
    title: "FinTech Mobile App",
    client: "StartupXYZ",
    description: "User-centered design for complex financial workflows",
    tags: ["UX/UI", "Mobile Design"],
  },
  {
    id: 4,
    type: "development",
    industry: "ecommerce",
    year: "2023",
    image: {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "E-commerce dashboard",
      fallback:
        "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg",
      height: "h-72",
    },
    hover: {
      title: "Analytics Dashboard",
      subtitle: "Data visualization platform",
    },
    title: "Analytics Dashboard",
    client: "DataCorp",
    description: "Complex data visualization made intuitive and actionable",
    tags: ["Development", "Data Viz"],
  },
  {
    id: 5,
    type: "web-design",
    industry: "nonprofit",
    year: "2023",
    image: {
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Non-profit website",
      fallback:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3",
      height: "h-64",
    },
    hover: {
      title: "Non-profit Site",
      subtitle: "Mission-driven design",
    },
    title: "Non-profit Website",
    client: "Hope Foundation",
    description: "Accessible design focused on storytelling and donations",
    tags: ["Web Design", "Accessibility"],
  },
  {
    id: 6,
    type: "branding",
    industry: "education",
    year: "2023",
    image: {
      src: "https://images.pixabay.com/photo/2015/02/05/08/21/marketing-626762_1280.jpg",
      alt: "Education platform branding",
      fallback:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      height: "h-80",
    },
    hover: {
      title: "EduTech Brand",
      subtitle: "Learning platform identity",
    },
    title: "Education Platform Branding",
    client: "LearnTech",
    description: "Brand identity for innovative online learning platform",
    tags: ["Branding", "Education"],
  },
  {
    id: 7,
    type: "ux-ui",
    industry: "tech",
    year: "2022",
    image: {
      src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "SaaS platform design",
      fallback:
        "https://images.pixabay.com/photo/2015/02/05/08/21/marketing-626762_1280.jpg",
      height: "h-64",
    },
    hover: {
      title: "SaaS Platform",
      subtitle: "Enterprise solution",
    },
    title: "SaaS Platform Design",
    client: "CloudTech",
    description: "Enterprise-grade platform with intuitive user experience",
    tags: ["UX/UI", "Enterprise"],
  },
  {
    id: 8,
    type: "development",
    industry: "healthcare",
    year: "2022",
    image: {
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Healthcare app development",
      fallback:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      height: "h-72",
    },
    hover: {
      title: "HealthTech App",
      subtitle: "Patient management system",
    },
    title: "Healthcare Management App",
    client: "HealthTech Solutions",
    description: "Secure patient management system with HIPAA compliance",
    tags: ["Development", "Healthcare"],
  },
];
function WorkGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Portfolio Grid */}
        <div
          id="portfolio-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card card group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
              data-type={project.type}
              data-industry={project.industry}
              data-year={project.year}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className={`w-full ${project.image.height} object-cover transition-transform duration-500 group-hover:scale-110`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = project.image.fallback;
                    e.target.onError = null;
                  }}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-playfair text-lg font-semibold mb-1">
                    {project.hover.title}
                  </h3>
                  <p className="text-sm">{project.hover.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm mb-3">
                  {project.client} • {project.year}
                </p>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
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

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button id="load-more" className="btn-primary text-lg px-8 py-4">
            Load More Projects
          </button>
        </div>

        {/* No Results Message */}
        <div id="no-results" className="hidden text-center py-16">
          <SearchIcon className="w-24 h-24 mx-auto text-secondary mb-6" />
          <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">
            No Projects Found
          </h3>
          <p className="text-secondary mb-6">
            Try adjusting your filters or search terms to find what you're
            looking for.
          </p>
          <button id="clear-search" className="btn-secondary">
            Clear All Filters
          </button>
        </div>
      </div>
    </section>
  );
}

export default WorkGrid;
