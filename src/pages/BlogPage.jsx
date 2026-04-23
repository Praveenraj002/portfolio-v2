import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { blogPosts } from "../data/blogPosts";

const BlogPage = () => {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);
  const hasPosts = blogPosts.length > 0;

  return (
    <main className="blog-page">
      <Reveal as="section" className="section blog-hero">
        <div className="section-inner blog-hero-inner">
          <div>
            <p className="eyebrow">Blog</p>
            <h1>Real talk on software engineering, developer thinking, AI stuff and occasional rants.</h1>
          </div>
          <p className="lead">
            Practical writing about AI, maintainable code, debugging, quality systems, technical tradeoffs, and the everyday decisions behind
            shipping software.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section blog-list-section">
        <div className="section-inner">
          {!hasPosts && (
            <div className="blog-empty-card">
              <p className="eyebrow">No posts yet</p>
              <h2>Blog posts are coming soon.</h2>
              <p>
                Good writing takes time. 
              </p>
              <Link className="blog-card-action" to="/#contact">
                Start a conversation
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          )}

          {hasPosts && (
            <>
              <article className="blog-featured-card">
                <div className="blog-card-content">
                  <div className="blog-meta-row">
                    <span className="blog-latest-badge">Latest blog</span>
                    <span className="pill">{featuredPost.category}</span>
                    <span>{featuredPost.date}</span>
                    <span className="blog-read-time">
                      <FiClock aria-hidden="true" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2>{featuredPost.title}</h2>
                  <p>{featuredPost.excerpt}</p>
                  <div className="pill-row">
                    {featuredPost.tags.map((tag) => (
                      <span className="pill subtle" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  className="blog-card-action"
                  to={`/blog/${featuredPost.slug}`}
                >
                  Read article
                  <FiArrowUpRight aria-hidden="true" />
                </Link>
              </article>

              <div className="blog-grid">
                {remainingPosts.map((post) => (
                  <Link
                    className="blog-card"
                    key={post.title}
                    to={`/blog/${post.slug}`}
                  >
                    <div className="blog-meta-row">
                      <span className="pill">{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-read-time">
                        <FiClock aria-hidden="true" />
                        {post.readTime}
                      </span>
                      <div className="pill-row">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span className="pill subtle" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </Reveal>
    </main>
  );
};

export default BlogPage;
