import React from "react";

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
          {/* UI Design Kit */}
          <div
            className="card group cursor-pointer overflow-hidden resource-item"
            data-category="design-tools"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="UI Design Kit"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                  e.target.onError = null;
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                  Free
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                UI Design System Kit
              </h3>
              <p className="text-secondary mb-4">
                Complete design system with components, patterns, and guidelines
                for modern web applications.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary">Figma • 2.3 MB</span>
                <button
                  className="btn-primary text-sm px-4 py-2"
                  onClick={() => alert("Download started!")}
                >
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* UX Research Template */}
          <div
            className="card group cursor-pointer overflow-hidden resource-item"
            data-category="research-tools"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="UX Research Template"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3";
                  e.target.onError = null;
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-success text-white text-sm rounded-full">
                  Free
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                UX Research Template Pack
              </h3>
              <p className="text-secondary mb-4">
                User interview scripts, survey templates, and analysis
                frameworks for effective research.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary">
                  Google Docs • 15 pages
                </span>
                <button
                  className="btn-primary text-sm px-4 py-2"
                  onClick={() => alert("Download started!")}
                >
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Design Checklist */}
          <div
            className="card group cursor-pointer overflow-hidden resource-item"
            data-category="checklists"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
                alt="Design Checklist"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                  e.target.onError = null;
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-warning text-white text-sm rounded-full">
                  Free
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                Pre-Launch Design Checklist
              </h3>
              <p className="text-secondary mb-4">
                Comprehensive checklist to ensure your design is ready for
                development and user testing.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary">PDF • 8 pages</span>
                <button
                  className="btn-primary text-sm px-4 py-2"
                  onClick={() => alert("Download started!")}
                >
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Color Palette Generator */}
          <div
            className="card group cursor-pointer overflow-hidden resource-item"
            data-category="tools"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Color Palette Tool"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg";
                  e.target.onError = null;
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-error text-white text-sm rounded-full">
                  Tool
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                Accessible Color Palette Generator
              </h3>
              <p className="text-secondary mb-4">
                Generate WCAG compliant color palettes with automatic contrast
                ratio calculations.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary">Web Tool</span>
                <a
                  href="#"
                  className="btn-secondary text-sm px-4 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Tool
                </a>
              </div>
            </div>
          </div>

          {/* Typography Guide */}
          <div
            className="card group cursor-pointer overflow-hidden resource-item"
            data-category="guides"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Typography Guide"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3";
                  e.target.onError = null;
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                  Free
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                Web Typography Best Practices
              </h3>
              <p className="text-secondary mb-4">
                Complete guide to choosing, pairing, and implementing typography
                for web projects.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary">PDF • 24 pages</span>
                <button
                  className="btn-primary text-sm px-4 py-2"
                  onClick={() => alert("Download started!")}
                >
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Accessibility Audit */}
          <div
            className="card group cursor-pointer overflow-hidden resource-item"
            data-category="checklists"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pixabay.com/photo/2015/02/05/08/21/marketing-626762_1280.jpg"
                alt="Accessibility Audit"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                  e.target.onError = null;
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-success text-white text-sm rounded-full">
                  Free
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                Accessibility Audit Checklist
              </h3>
              <p className="text-secondary mb-4">
                Step-by-step guide to auditing your designs for WCAG 2.1 AA
                compliance.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary">
                  Excel • Interactive
                </span>
                <button
                  className="btn-primary text-sm px-4 py-2"
                  onClick={() => alert("Download started!")}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesGrid;
