import React from "react";

const categories = [
  {
    id: 1,
    category: "all",
    label: "All Posts",
    isActive: true,
  },
  {
    id: 2,
    category: "design-process",
    label: "Design Process",
    isActive: false,
  },
  {
    id: 3,
    category: "industry-trends",
    label: "Industry Trends",
    isActive: false,
  },
  {
    id: 4,
    category: "case-studies",
    label: "Case Study Deep-Dives",
    isActive: false,
  },
  {
    id: 5,
    category: "tools-resources",
    label: "Tools & Resources",
    isActive: false,
  },
  {
    id: 6,
    category: "professional-dev",
    label: "Professional Development",
    isActive: false,
  },
];
function BlogCategoryFilter() {
  return (
    <section className="py-8 bg-surface border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${
                category.isActive
                  ? "active px-6 py-2 rounded-full bg-accent text-white font-medium transition-all duration-300"
                  : "px-6 py-2 rounded-full bg-white text-secondary border border-gray-200 font-medium hover:bg-accent hover:text-white transition-all duration-300"
              }`}
              data-category={category.category}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogCategoryFilter;
