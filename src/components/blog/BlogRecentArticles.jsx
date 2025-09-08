import React from "react";

function BlogRecentArticles() {
  return (
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
                <span className="text-sm text-secondary">January 10, 2025</span>
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
                <span className="text-sm text-secondary">January 8, 2025</span>
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
                <span className="text-sm text-secondary">January 5, 2025</span>
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
  );
}

export default BlogRecentArticles;
