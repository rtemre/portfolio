import SearchIcon from '../../assets/svgs/search'

function BlogHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/creative-workspace.jpeg"
          alt="Creative workspace"
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/images/general-design-image.jpeg'
            e.target.onError = null
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
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogHero
