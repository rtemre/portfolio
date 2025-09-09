import {
  BlogHero,
  BlogCategoryFilter,
  BlogFeaturedPost,
  BlogRecentArticles,
} from '../components/blog';

function Blog() {
  return (
    <div>
      <BlogHero />
      <BlogCategoryFilter />
      <BlogFeaturedPost />
      <BlogRecentArticles />
    </div>
  );
}

export default Blog;
