import { resources } from "./constants";
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
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="card group cursor-pointer overflow-hidden resource-item"
              data-category={resource.category}
            >
              <div className="relative overflow-hidden">
                <img
                  src={resource.image.src}
                  alt={resource.image.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = resource.image.fallback;
                    e.target.onError = null;
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 ${resource.badge.bgColor} text-white text-sm rounded-full`}
                  >
                    {resource.badge.text}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-secondary mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">
                    {resource.meta}
                  </span>
                  {resource.action.type === "download" ? (
                    <button
                      className="btn-primary text-sm px-4 py-2"
                      onClick={() => {
                        // Handle download logic here
                        console.log("Download started for:", resource.title);
                      }}
                    >
                      {resource.action.text}
                    </button>
                  ) : (
                    <a
                      href={resource.action.href}
                      className="btn-secondary text-sm px-4 py-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.action.text}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesGrid;
