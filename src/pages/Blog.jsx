import React from "react";
import {
  BlogHero,
  BlogCategoryFilter,
  BlogFeaturedPost,
  BlogRecentArticles,
} from "../components/blog";

function Blog() {
  return (
    <>
      <BlogHero />
      <BlogCategoryFilter />
      <BlogFeaturedPost />
      <BlogRecentArticles />
    </>
  );
}

export default Blog;
