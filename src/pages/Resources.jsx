import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Resources() {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Resources and tools"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src =
                  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                e.target.onError = null;
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-hero font-playfair mb-6 animate-fade-in text-white">
              Resources & <span className="text-accent">Tools</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up">
              Free design resources, templates, checklists, and tools to help
              you create better digital experiences and streamline your
              workflow.
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display font-playfair mb-4 text-primary">
                Design Resources
              </h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Curated collection of tools, templates, and guides to enhance
                your design process
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
                    Complete design system with components, patterns, and
                    guidelines for modern web applications.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary">
                      Figma • 2.3 MB
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
                    <span className="text-sm text-secondary">
                      PDF • 8 pages
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
                    Generate WCAG compliant color palettes with automatic
                    contrast ratio calculations.
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
                    Complete guide to choosing, pairing, and implementing
                    typography for web projects.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary">
                      PDF • 24 pages
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

        {/* Newsletter Signup */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-display font-playfair mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Get notified when we release new resources, tools, and design
              insights. Join our community of design professionals.
            </p>

            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="btn-primary bg-accent hover:bg-accent/90 px-8 py-4 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm opacity-70 mt-4">
              No spam, unsubscribe at any time. Read our
              <a href="#" className="underline hover:no-underline ml-1">
                privacy policy
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Resources;
