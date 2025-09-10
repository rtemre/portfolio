import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../assets/svgIcons";
import { articles } from "./constants";
function BlogRecentArticles() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Recent Articles
          </h2>
          <p className="text-lg text-secondary">
            Insights, tutorials, and industry perspectives
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="articles-grid"
        >
          {articles.map((article) => (
            <article
              key={article.id}
              className="card group cursor-pointer overflow-hidden article-item"
              data-category={article.category}
              onClick={() => (window.location.href = "/case-study")}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image.src}
                  alt={article.image.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = article.image.fallback;
                    e.target.onError = null;
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className={`px-3 py-1 ${article.badge.bgColor} ${article.badge.textColor} text-sm rounded-full`}
                  >
                    {article.badge.text}
                  </span>
                  <span className="text-sm text-secondary">{article.date}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-secondary mb-4">{article.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">
                    {article.readTime}
                  </span>
                  <div className="flex items-center text-accent font-medium">
                    Read More
                    <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/resources" className="btn-secondary text-lg px-8 py-4">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogRecentArticles;
