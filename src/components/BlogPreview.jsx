import React from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../assets/svgs/arrow-right";

function BlogPreview() {
  const posts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      date: "January 15, 2025",
      title: "Design Trends Shaping 2025",
      excerpt:
        "Exploring the intersection of AI, accessibility, and human-centered design in the coming year.",
      link: "/blog",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "January 10, 2025",
      title: "The Psychology of User Experience",
      excerpt:
        "How cognitive biases and psychological principles can inform better design decisions.",
      link: "/blog",
    },
    {
      id: 3,
      image:
        "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      date: "January 5, 2025",
      title: "Building a Portfolio That Tells Stories",
      excerpt:
        "Moving beyond galleries to create portfolios that demonstrate process and thinking.",
      link: "/blog",
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Latest Insights
          </h2>
          <p className="text-lg text-secondary">
            Thoughts on design, technology, and the evolving digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="card group cursor-pointer overflow-hidden"
              onClick={() => (window.location.href = post.link)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                  }}
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-accent mb-2">{post.date}</div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-secondary mb-4">{post.excerpt}</p>
                <div className="flex items-center text-accent font-medium">
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-secondary text-lg px-8 py-4">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;
