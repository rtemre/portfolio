import React from "react";
import ArrowRightIcon from "../../assets/svgs/arrow-right";
import TwitterIcon from "../../assets/svgs/twitter";
import LinkedInIcon from "../../assets/svgs/linkedin";

function BlogFeaturedPost() {
  return (
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
                src="/images/design-trends-showcase.jpeg"
                alt="Design trends 2025"
                className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "/images/general-design-image.jpeg";
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
                <span className="text-sm text-secondary">January 15, 2025</span>
                <span className="text-sm text-secondary">8 min read</span>
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                Design Trends Shaping 2025: The Future of Digital Experiences
              </h3>
              <p className="text-secondary mb-6 leading-relaxed">
                Exploring the intersection of AI, accessibility, and
                human-centered design in the coming year. From
                micro-interactions to macro-experiences, discover what's driving
                innovation in digital design.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-accent font-medium">
                  Read Full Article
                  <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    className="text-secondary hover:text-accent transition-colors duration-300"
                    title="Share on Twitter"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </button>
                  <button
                    className="text-secondary hover:text-accent transition-colors duration-300"
                    title="Share on LinkedIn"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BlogFeaturedPost;
