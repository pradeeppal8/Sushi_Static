import "./blog.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ThemeLoader } from "../../components/ThemeLoader";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Natural Light Photography",
    excerpt:
      "Discover how to use natural light to create stunning photographs that tell a story.",
    category: "Photography",
    date: "November 4, 2025",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&auto=format&fit=crop",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Composition Techniques for Beginners",
    excerpt:
      "Learn the fundamental principles of composition that will transform your photography.",
    category: "Tutorials",
    date: "November 3, 2025",
    image:
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=800&auto=format&fit=crop",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "Essential Camera Settings Explained",
    excerpt:
      "Master the technical aspects of photography with this comprehensive guide.",
    category: "Education",
    date: "November 2, 2025",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop",
    readTime: "6 min read",
  },
];

const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Animate hero section
    gsap.fromTo(
      ".blog-hero-content h1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".blog-hero-content p",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
    );

    // Animate blog cards with stagger
    gsap.fromTo(
      ".blog-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        ease: "power2.out",
      }
    );

    // Animate newsletter section
    gsap.fromTo(
      ".blog-newsletter",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" }
    );
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds timeout

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ThemeLoader isLoading={isLoading} />
      <div className="blog-page">
        <div className="blog-hero">
          <div className="blog-hero-content">
            <h1>Our Journal</h1>
            <p>Stories, tutorials, and insights from our photography journey</p>
          </div>
        </div>

        <div className="blog-container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-readtime">{post.readTime}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <button className="read-more">Read Article</button>
                </div>
              </article>
            ))}
          </div>

          <div className="blog-newsletter">
            <div className="newsletter-content">
              <h3>Stay Updated</h3>
              <p>
                Subscribe to our newsletter for the latest articles and
                photography tips.
              </p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
