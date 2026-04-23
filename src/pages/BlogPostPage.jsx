import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { getBlogPostBySlug } from "../data/blogPosts";

const renderContentBlock = (block) => {
  if (typeof block === "string") {
    return <p key={block}>{block}</p>;
  }

  if (block.type === "heading") {
    return <h2 key={block.text}>{block.text}</h2>;
  }

  if (block.type === "image") {
    return (
      <figure className="blog-post-image" key={block.src}>
        <img src={block.src} alt={block.alt} />
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    );
  }

  if (block.type === "code") {
    return (
      <figure className="blog-code-block" key={`${block.filename}-${block.code}`}>
        {(block.filename || block.language) && (
          <figcaption>
            <span>{block.filename}</span>
            <span>{block.language}</span>
          </figcaption>
        )}
        <pre>
          <code>{block.code}</code>
        </pre>
      </figure>
    );
  }

  return <p key={block.text}>{block.text}</p>;
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="blog-page">
      <Reveal as="article" className="section blog-post">
        <div className="section-inner blog-post-inner">
          <Link className="blog-back-link" to="/blog">
            <FiArrowLeft aria-hidden="true" />
            Back to blog
          </Link>

          <header className="blog-post-header">
            <p className="eyebrow">{post.category}</p>
            <h1>{post.title}</h1>
            <div className="blog-meta-row">
              <span>{post.date}</span>
              <span className="blog-read-time">
                <FiClock aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
            <p className="lead">{post.excerpt}</p>
          </header>

          <div className="blog-post-body">
            {post.content.map((block) => renderContentBlock(block))}
          </div>

          <div className="pill-row">
            {post.tags.map((tag) => (
              <span className="pill subtle" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </main>
  );
};

export default BlogPostPage;
