import React from "react";

function WorkFilters() {
  return (
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
            <div className="relative">
              <select
                id="type-filter"
                className="form-input min-w-40 appearance-none pr-10"
              >
                <option value="">All Types</option>
                <option value="web-design">Web Design</option>
                <option value="branding">Branding</option>
                <option value="ux-ui">UX/UI</option>
                <option value="development">Development</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Industry Filter */}
            <div className="relative">
              <select
                id="industry-filter"
                className="form-input min-w-40 appearance-none pr-10"
              >
                <option value="">All Industries</option>
                <option value="tech">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="ecommerce">E-commerce</option>
                <option value="nonprofit">Non-profit</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Year Filter */}
            <div className="relative">
              <select
                id="year-filter"
                className="form-input min-w-32 appearance-none pr-10"
              >
                <option value="">All Years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

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
  );
}

export default WorkFilters;
