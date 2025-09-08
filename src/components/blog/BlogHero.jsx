import React from "react";

function BlogHero() {
  return (
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
          Exploring the intersection of design, technology, and human behavior.
          Behind-the-scenes insights, industry analysis, and professional
          development perspectives.
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
  );
}

export default BlogHero;
