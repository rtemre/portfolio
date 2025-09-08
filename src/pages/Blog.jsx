import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {
  BlogHero,
  BlogCategoryFilter,
  BlogFeaturedPost,
  BlogRecentArticles,
} from "../components/blog";

function Blog() {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        <BlogHero />
        <BlogCategoryFilter />
        <BlogFeaturedPost />
        <BlogRecentArticles />
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
