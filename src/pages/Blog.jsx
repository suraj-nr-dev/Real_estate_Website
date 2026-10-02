import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import "./Blog.css";

const posts = [
  {
    category: "Location Intelligence",
    title: "Why Devanahalli Is Bangalore's Next Big Real Estate Growth Corridor",
    excerpt:
      "The airport moved employment north, and land follows employment. We map what has actually been commissioned around Devanahalli, what is still on paper, and what that separation means for a buyer holding land for five to seven years.",
    featured: true,
    image: "/assets/91706abd-4c65-4fdc-933c-eb242dd2889e.png",
  },
  {
    category: "Plot Sizes",
    title: "30x40 vs 40x60 Plots — Which Investment Fits Your Budget?",
    excerpt:
      "Cost, installment load, resale liquidity and build potential compared side by side, with the arithmetic shown.",
    image: "/assets/e46fd110-3e95-46f2-9c9c-5f0e6fd18006.png",
  },
  {
    category: "Legal",
    title: "A Khata vs B Khata: What Every Plot Buyer Near Bangalore Should Know",
    excerpt:
      "What each khata actually permits, how conversion works, and the questions to ask before you pay a token amount.",
    image: "/assets/6ba8661c-87b7-43eb-b02d-c1477d989c2e.png",
  },
  {
    category: "Payments",
    title: "How Installment-Based Plot Payments Work (and Why They're Lower Risk)",
    excerpt:
      "Down payment plus four installments, what each receipt should say, and how it compares with a plot loan.",
    image: "/assets/1b40a0b7-1099-44e6-892e-9aac7e7b6553.png",
  },
  {
    category: "Location Intelligence",
    title: "Kempegowda Airport Expansion and Its Impact on North Bangalore Land Prices",
    excerpt:
      "What the terminal expansion and NH44 works have already done to land values along the corridor.",
    image: "/assets/5f8caaed-6735-4e77-a32d-23bcc0a85600.png",
  },
  {
    category: "Trust & Approvals",
    title: "Cooperative Society Plots vs Private Developer Plots: What's the Difference",
    excerpt:
      "Ownership structure, pricing motive, documentation access and buyer recourse — where the two genuinely diverge.",
    image: "/assets/409d5d91-3814-4db8-94c6-2e8d57524b4d.png",
  },
];

const categories = ["All", "Buying Guide", "Investment"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [subscribed, setSubscribed] = useState(false);
  const [subscriber, setSubscriber] = useState({ name: "", phone: "" });

  const visiblePosts = posts.filter((post) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Buying Guide") {
      return ["Plot Sizes", "Legal", "Payments"].includes(post.category);
    }
    return ["Location Intelligence", "Trust & Approvals"].includes(post.category);
  });

  const handleSubscribe = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <main>
      <section className="blog-hero">
        <div className="blog-hero-content container">
          <p className="eyebrow">Blog & Resources</p>
          <h1 className="display">
            Plot Buying,
            <br />
            <span>Explained Plainly</span>
          </h1>
          <p>
            Khata types, installment structures, corridor economics — the things
            that decide whether a plot purchase works out, written without the
            sales gloss.
          </p>
        </div>
      </section>

      <section className="blog-content page-section">
        <div className="page-section-inner">
          <div className="blog-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "is-active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {visiblePosts.map((post) => (
              <article className={`blog-card ${post.featured ? "blog-card-featured" : ""}`} key={post.title}>
                <div className="blog-card-image-wrap">
                  <img src={post.image} alt={post.title} />
                  {post.featured && <span className="featured-tag">Featured</span>}
                </div>

                <div className="blog-card-body">
                  <span className="blog-category">{post.category}</span>
                  <h2 className="display">{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <Link to="/contact">
                    Read More <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-subscribe page-section">
        <div className="blog-subscribe-inner page-section-inner">
          <div>
            <p className="eyebrow">Stay in the loop</p>
            <h2 className="display dark-title">Get new posts and the current price list.</h2>
            <p>One message when something worth reading goes up. No daily mail.</p>
          </div>

          {!subscribed ? (
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                value={subscriber.name}
                onChange={(event) => setSubscriber({ ...subscriber, name: event.target.value })}
                placeholder="Your Name*"
                required
              />
              <input
                type="tel"
                value={subscriber.phone}
                onChange={(event) => setSubscriber({ ...subscriber, phone: event.target.value })}
                placeholder="Phone Number*"
                required
              />
              <button type="submit">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <div className="subscribe-success">
              <CheckCircle2 size={34} />
              <h3 className="display">You're on the list.</h3>
              <p>We'll share the next useful update and current price list with you.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
