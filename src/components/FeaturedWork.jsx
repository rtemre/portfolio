import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./constants.jsx";

function FeaturedWork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Featured Work
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A curated selection of recent projects showcasing the intersection
            of strategy, creativity, and technical excellence.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card group cursor-pointer overflow-hidden"
              onClick={() => (window.location.href = project.link)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/images/fallback-image.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-playfair text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.client}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
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

        <div className="text-center mt-12">
          <Link to="/work" className="btn-primary text-lg px-8 py-4">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
