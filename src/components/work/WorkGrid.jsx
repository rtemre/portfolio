import React from "react";
import SearchIcon from "../../assets/svgs/search";

function WorkGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Portfolio Grid */}
        <div
          id="portfolio-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {/* Project 1 */}
          <div
            className="project-card card group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
            data-type="web-design"
            data-industry="tech"
            data-year="2024"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="E-commerce platform redesign"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                  e.target.onError = null;
                }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-playfair text-lg font-semibold mb-1">
                  TechCorp Platform
                </h3>
                <p className="text-sm">Complete UX overhaul</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">
                E-commerce Platform Redesign
              </h3>
              <p className="text-secondary text-sm mb-3">TechCorp • 2024</p>
              <p className="text-secondary mb-4">
                Complete UX overhaul resulting in 40% increase in conversion
                rates
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Web Design
                </span>
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  UX/UI
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className="project-card card group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
            data-type="branding"
            data-industry="healthcare"
            data-year="2024"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Healthcare brand identity"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3";
                  e.target.onError = null;
                }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-playfair text-lg font-semibold mb-1">
                  MedCare Identity
                </h3>
                <p className="text-sm">Complete brand system</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">
                Healthcare Brand Identity
              </h3>
              <p className="text-secondary text-sm mb-3">
                MedCare Solutions • 2024
              </p>
              <p className="text-secondary mb-4">
                Comprehensive brand identity for healthcare technology startup
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Branding
                </span>
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Visual Identity
                </span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div
            className="project-card card group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
            data-type="ux-ui"
            data-industry="finance"
            data-year="2024"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
                alt="FinTech mobile app"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                  e.target.onError = null;
                }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-playfair text-lg font-semibold mb-1">
                  FinTech App
                </h3>
                <p className="text-sm">Mobile banking solution</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">
                FinTech Mobile App
              </h3>
              <p className="text-secondary text-sm mb-3">StartupXYZ • 2024</p>
              <p className="text-secondary mb-4">
                User-centered design for complex financial workflows
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  UX/UI
                </span>
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Mobile Design
                </span>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div
            className="project-card card group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
            data-type="development"
            data-industry="ecommerce"
            data-year="2023"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="E-commerce dashboard"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg";
                  e.target.onError = null;
                }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-playfair text-lg font-semibold mb-1">
                  Analytics Dashboard
                </h3>
                <p className="text-sm">Data visualization platform</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">
                Analytics Dashboard
              </h3>
              <p className="text-secondary text-sm mb-3">DataCorp • 2023</p>
              <p className="text-secondary mb-4">
                Complex data visualization made intuitive and actionable
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Development
                </span>
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Data Viz
                </span>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div
            className="project-card card group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
            data-type="web-design"
            data-industry="nonprofit"
            data-year="2023"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Non-profit website"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3";
                  e.target.onError = null;
                }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-playfair text-lg font-semibold mb-1">
                  Non-profit Site
                </h3>
                <p className="text-sm">Mission-driven design</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">
                Non-profit Website
              </h3>
              <p className="text-secondary text-sm mb-3">
                Hope Foundation • 2023
              </p>
              <p className="text-secondary mb-4">
                Accessible design focused on storytelling and donations
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Web Design
                </span>
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Accessibility
                </span>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div
            className="project-card card group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
            data-type="branding"
            data-industry="education"
            data-year="2023"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pixabay.com/photo/2015/02/05/08/21/marketing-626762_1280.jpg"
                alt="Education platform branding"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                  e.target.onError = null;
                }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-playfair text-lg font-semibold mb-1">
                  EduTech Brand
                </h3>
                <p className="text-sm">Learning platform identity</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">
                Education Platform Branding
              </h3>
              <p className="text-secondary text-sm mb-3">LearnTech • 2023</p>
              <p className="text-secondary mb-4">
                Brand identity for innovative online learning platform
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Branding
                </span>
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Education
                </span>
              </div>
            </div>
          </div>

          {/* Project 7 */}
          <div
            className="project-card card group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
            data-type="ux-ui"
            data-industry="tech"
            data-year="2022"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="SaaS platform design"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.pixabay.com/photo/2015/02/05/08/21/marketing-626762_1280.jpg";
                  e.target.onError = null;
                }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-playfair text-lg font-semibold mb-1">
                  SaaS Platform
                </h3>
                <p className="text-sm">Enterprise solution</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">
                SaaS Platform Design
              </h3>
              <p className="text-secondary text-sm mb-3">CloudTech • 2022</p>
              <p className="text-secondary mb-4">
                Enterprise-grade platform with intuitive user experience
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  UX/UI
                </span>
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Enterprise
                </span>
              </div>
            </div>
          </div>

          {/* Project 8 */}
          <div
            className="project-card card group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
            data-type="development"
            data-industry="healthcare"
            data-year="2022"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Healthcare app development"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3";
                  e.target.onError = null;
                }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-playfair text-lg font-semibold mb-1">
                  HealthTech App
                </h3>
                <p className="text-sm">Patient management system</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">
                Healthcare Management App
              </h3>
              <p className="text-secondary text-sm mb-3">
                HealthTech Solutions • 2022
              </p>
              <p className="text-secondary mb-4">
                Secure patient management system with HIPAA compliance
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Development
                </span>
                <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                  Healthcare
                </span>
              </div>
            </div>
          </div>
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
