import React from "react";

const resources = [
  {
    id: 1,
    category: "design-tools",
    image: {
      src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "UI Design Kit",
      fallback:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    badge: {
      text: "Free",
      color: "bg-accent",
    },
    title: "UI Design System Kit",
    description:
      "Complete design system with components, patterns, and guidelines for modern web applications.",
    meta: "Figma • 2.3 MB",
    action: {
      type: "download",
      text: "Download",
    },
  },
  {
    id: 2,
    category: "research-tools",
    image: {
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "UX Research Template",
      fallback:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    badge: {
      text: "Free",
      color: "bg-success",
    },
    title: "UX Research Template Pack",
    description:
      "User interview scripts, survey templates, and analysis frameworks for effective research.",
    meta: "Google Docs • 15 pages",
    action: {
      type: "download",
      text: "Download",
    },
  },
  {
    id: 3,
    category: "checklists",
    image: {
      src: "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      alt: "Design Checklist",
      fallback:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    badge: {
      text: "Free",
      color: "bg-warning",
    },
    title: "Pre-Launch Design Checklist",
    description:
      "Comprehensive checklist to ensure your design is ready for development and user testing.",
    meta: "PDF • 8 pages",
    action: {
      type: "download",
      text: "Download",
    },
  },
  {
    id: 4,
    category: "tools",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Color Palette Tool",
      fallback:
        "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    },
    badge: {
      text: "Tool",
      color: "bg-error",
    },
    title: "Accessible Color Palette Generator",
    description:
      "Generate WCAG compliant color palettes with automatic contrast ratio calculations.",
    meta: "Web Tool",
    action: {
      type: "link",
      text: "Open Tool",
      href: "#",
    },
  },
  {
    id: 5,
    category: "guides",
    image: {
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Typography Guide",
      fallback:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    badge: {
      text: "Free",
      color: "bg-accent",
    },
    title: "Web Typography Best Practices",
    description:
      "Complete guide to choosing, pairing, and implementing typography for web projects.",
    meta: "PDF • 24 pages",
    action: {
      type: "download",
      text: "Download",
    },
  },
  {
    id: 6,
    category: "checklists",
    image: {
      src: "https://images.pixabay.com/photo/2015/02/05/08/21/marketing-626762_1280.jpg",
      alt: "Accessibility Audit",
      fallback:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    badge: {
      text: "Free",
      color: "bg-success",
    },
    title: "Accessibility Audit Checklist",
    description:
      "Step-by-step guide to auditing your designs for WCAG 2.1 AA compliance.",
    meta: "Excel • Interactive",
    action: {
      type: "download",
      text: "Download",
    },
  },
];
function ResourcesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Design Resources
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Curated collection of tools, templates, and guides to enhance your
            design process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="card group cursor-pointer overflow-hidden resource-item"
              data-category={resource.category}
            >
              <div className="relative overflow-hidden">
                <img
                  src={resource.image.src}
                  alt={resource.image.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = resource.image.fallback;
                    e.target.onError = null;
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 ${resource.badge.color} text-white text-sm rounded-full`}
                  >
                    {resource.badge.text}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-secondary mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">
                    {resource.meta}
                  </span>
                  {resource.action.type === "download" ? (
                    <button
                      className="btn-primary text-sm px-4 py-2"
                      onClick={() => alert("Download started!")}
                    >
                      {resource.action.text}
                    </button>
                  ) : (
                    <a
                      href={resource.action.href}
                      className="btn-secondary text-sm px-4 py-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.action.text}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesGrid;
