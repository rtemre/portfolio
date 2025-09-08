import React from "react";
import ArrowRightIcon from "../../assets/svgs/arrow-right";

const articles = [
  {
    id: 1,
    category: "design-process",
    image: {
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "UX research methods",
      fallback:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    badge: {
      text: "Design Process",
      bgColor: "bg-success/10",
      textColor: "text-success",
    },
    date: "January 10, 2025",
    title: "The Psychology of User Experience Design",
    description:
      "How cognitive biases and psychological principles can inform better design decisions and create more intuitive user experiences.",
    readTime: "6 min read",
  },
  {
    id: 2,
    category: "tools-resources",
    image: {
      src: "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      alt: "Design tools comparison",
      fallback:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    badge: {
      text: "Tools & Resources",
      bgColor: "bg-warning/10",
      textColor: "text-warning",
    },
    date: "January 8, 2025",
    title: "Figma vs. Adobe XD: A 2025 Comparison",
    description:
      "An in-depth analysis of the leading design tools, comparing features, performance, and workflow integration for modern design teams.",
    readTime: "12 min read",
  },
  {
    id: 3,
    category: "case-studies",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "E-commerce redesign case study",
      fallback:
        "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    },
    badge: {
      text: "Case Study Deep-Dive",
      bgColor: "bg-accent/10",
      textColor: "text-accent",
    },
    date: "January 5, 2025",
    title: "E-commerce Redesign: From 2% to 8% Conversion",
    description:
      "A detailed breakdown of how strategic UX improvements and data-driven design decisions quadrupled conversion rates.",
    readTime: "15 min read",
  },
];
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
          <a href="/resources" className="btn-secondary text-lg px-8 py-4">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}

export default BlogRecentArticles;
