import React from "react";

function BlogCategoryFilter() {
  return (
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
  );
}

export default BlogCategoryFilter;
