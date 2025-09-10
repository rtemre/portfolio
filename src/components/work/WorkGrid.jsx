import { SearchIcon } from "../../assets/svgIcons";
import { projects } from "./constants";
function WorkGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Portfolio Grid */}
        <div
          id="portfolio-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card card group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
              data-type={project.type}
              data-industry={project.industry}
              data-year={project.year}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className={`w-full ${project.image.height} object-cover transition-transform duration-500 group-hover:scale-110`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = project.image.fallback;
                    e.target.onError = null;
                  }}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-playfair text-lg font-semibold mb-1">
                    {project.hover.title}
                  </h3>
                  <p className="text-sm">{project.hover.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm mb-3">
                  {project.client} • {project.year}
                </p>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface text-secondary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
            Try adjusting your filters or search terms to find what you are
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
