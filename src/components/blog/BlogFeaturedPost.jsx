import React from "react";

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
  );
}

export default BlogFeaturedPost;
