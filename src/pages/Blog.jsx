import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Blog() {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Creative workspace"
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
              Insights & <span className="text-accent">Thought Leadership</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up">
              Exploring the intersection of design, technology, and human
              behavior. Behind-the-scenes insights, industry analysis, and
              professional development perspectives.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto animate-scale-in">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-6 py-4 pr-12 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                  id="search-input"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary hover:text-accent transition-colors duration-300">
                  <svg
                    className="w-5 h-5"
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
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-surface border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="filter-btn active px-6 py-2 rounded-full bg-accent text-white font-medium transition-all duration-300"
                data-category="all"
              >
                All Posts
              </button>
              <button
                className="filter-btn px-6 py-2 rounded-full bg-white text-secondary border border-gray-200 font-medium hover:bg-accent hover:text-white transition-all duration-300"
                data-category="design-process"
              >
                Design Process
              </button>
              <button
                className="filter-btn px-6 py-2 rounded-full bg-white text-secondary border border-gray-200 font-medium hover:bg-accent hover:text-white transition-all duration-300"
                data-category="industry-trends"
              >
                Industry Trends
              </button>
              <button
                className="filter-btn px-6 py-2 rounded-full bg-white text-secondary border border-gray-200 font-medium hover:bg-accent hover:text-white transition-all duration-300"
                data-category="case-studies"
              >
                Case Study Deep-Dives
              </button>
              <button
                className="filter-btn px-6 py-2 rounded-full bg-white text-secondary border border-gray-200 font-medium hover:bg-accent hover:text-white transition-all duration-300"
                data-category="tools-resources"
              >
                Tools & Resources
              </button>
              <button
                className="filter-btn px-6 py-2 rounded-full bg-white text-secondary border border-gray-200 font-medium hover:bg-accent hover:text-white transition-all duration-300"
                data-category="professional-dev"
              >
                Professional Development
              </button>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-display font-playfair mb-4 text-primary">
                Featured Article
              </h2>
              <p className="text-lg text-secondary">
                Latest insights from the design world
              </p>
            </div>

            <article
              className="card overflow-hidden group cursor-pointer"
              onClick={() => (window.location.href = "/case-study")}
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Design trends 2025"
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                      e.target.onError = null;
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-surface text-secondary text-sm rounded-full">
                      Industry Trends
                    </span>
                    <span className="text-sm text-secondary">
                      January 15, 2025
                    </span>
                    <span className="text-sm text-secondary">8 min read</span>
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                    Design Trends Shaping 2025: The Future of Digital
                    Experiences
                  </h3>
                  <p className="text-secondary mb-6 leading-relaxed">
                    Exploring the intersection of AI, accessibility, and
                    human-centered design in the coming year. From
                    micro-interactions to macro-experiences, discover what's
                    driving innovation in digital design.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-accent font-medium">
                      Read Full Article
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        className="text-secondary hover:text-accent transition-colors duration-300"
                        title="Share on Twitter"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </button>
                      <button
                        className="text-secondary hover:text-accent transition-colors duration-300"
                        title="Share on LinkedIn"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Recent Articles Grid */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display font-playfair mb-4 text-primary">
                Recent Articles
              </h2>
              <p className="text-lg text-secondary">
                Insights, tutorials, and industry perspectives
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              id="articles-grid"
            >
              {/* Article 1 */}
              <article
                className="card group cursor-pointer overflow-hidden article-item"
                data-category="design-process"
                onClick={() => (window.location.href = "/case-study")}
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="UX research methods"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3";
                      e.target.onError = null;
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-success/10 text-success text-sm rounded-full">
                      Design Process
                    </span>
                    <span className="text-sm text-secondary">
                      January 10, 2025
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                    The Psychology of User Experience Design
                  </h3>
                  <p className="text-secondary mb-4">
                    How cognitive biases and psychological principles can inform
                    better design decisions and create more intuitive user
                    experiences.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary">6 min read</span>
                    <div className="flex items-center text-accent font-medium">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>

              {/* Article 2 */}
              <article
                className="card group cursor-pointer overflow-hidden article-item"
                data-category="tools-resources"
                onClick={() => (window.location.href = "/case-study")}
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
                    alt="Design tools comparison"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                      e.target.onError = null;
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-warning/10 text-warning text-sm rounded-full">
                      Tools & Resources
                    </span>
                    <span className="text-sm text-secondary">
                      January 8, 2025
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                    Figma vs. Adobe XD: A 2025 Comparison
                  </h3>
                  <p className="text-secondary mb-4">
                    An in-depth analysis of the leading design tools, comparing
                    features, performance, and workflow integration for modern
                    design teams.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary">12 min read</span>
                    <div className="flex items-center text-accent font-medium">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>

              {/* Article 3 */}
              <article
                className="card group cursor-pointer overflow-hidden article-item"
                data-category="case-studies"
                onClick={() => (window.location.href = "/case-study")}
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="E-commerce redesign case study"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg";
                      e.target.onError = null;
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                      Case Study Deep-Dive
                    </span>
                    <span className="text-sm text-secondary">
                      January 5, 2025
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                    E-commerce Redesign: From 2% to 8% Conversion
                  </h3>
                  <p className="text-secondary mb-4">
                    A detailed breakdown of how strategic UX improvements and
                    data-driven design decisions quadrupled conversion rates.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary">15 min read</span>
                    <div className="flex items-center text-accent font-medium">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="text-center mt-12">
              <a href="/resources" className="btn-secondary text-lg px-8 py-4">
                View All Posts
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
