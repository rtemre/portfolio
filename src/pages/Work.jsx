import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Work() {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-hero font-playfair mb-6 text-primary">
                Portfolio <span className="text-accent">Showcase</span>
              </h1>
              <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
                A curated collection of projects spanning web design, branding,
                UX/UI, and development. Each piece represents a unique challenge
                solved through strategic thinking and creative execution.
              </p>
            </div>

            {/* Portfolio Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">
                  24
                </div>
                <div className="text-secondary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">
                  5
                </div>
                <div className="text-secondary">Years Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">
                  8
                </div>
                <div className="text-secondary">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">
                  18
                </div>
                <div className="text-secondary">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Search Section */}
        <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search projects..."
                  className="form-input pl-12 pr-4"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap gap-4 items-center">
                {/* Project Type Filter */}
                <select id="type-filter" className="form-input min-w-40">
                  <option value="">All Types</option>
                  <option value="web-design">Web Design</option>
                  <option value="branding">Branding</option>
                  <option value="ux-ui">UX/UI</option>
                  <option value="development">Development</option>
                </select>

                {/* Industry Filter */}
                <select id="industry-filter" className="form-input min-w-40">
                  <option value="">All Industries</option>
                  <option value="tech">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="nonprofit">Non-profit</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                </select>

                {/* Year Filter */}
                <select id="year-filter" className="form-input min-w-32">
                  <option value="">All Years</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>

                {/* Clear Filters */}
                <button
                  id="clear-filters"
                  className="btn-secondary text-sm px-4 py-2"
                >
                  Clear All
                </button>

                {/* Surprise Me Button */}
                <button
                  id="surprise-me"
                  className="btn-primary text-sm px-4 py-2 bg-warning hover:bg-warning/90"
                >
                  Surprise Me
                </button>
              </div>
            </div>

            {/* Active Filters Display */}
            <div id="active-filters" className="mt-4 flex-wrap gap-2 hidden">
              <span className="text-sm text-secondary">Active filters:</span>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
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
                    Comprehensive brand identity for healthcare technology
                    startup
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
                  <p className="text-secondary text-sm mb-3">
                    StartupXYZ • 2024
                  </p>
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
                  <p className="text-secondary text-sm mb-3">
                    LearnTech • 2023
                  </p>
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
                  <p className="text-secondary text-sm mb-3">
                    CloudTech • 2022
                  </p>
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
              <svg
                className="w-24 h-24 mx-auto text-secondary mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                />
              </svg>
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

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-display font-playfair mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's collaborate to create something extraordinary. Every great
              project starts with a conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary bg-accent hover:bg-accent/90 text-lg px-8 py-4"
              >
                Start a Project
              </a>
              <a
                href="/process"
                className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                Learn My Process
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Work;
