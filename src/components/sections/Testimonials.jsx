import { ArrowRight, Handshake, ShieldCheck, TreePine } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "Transparent process, excellent infrastructure and a truly premium community. The best decision for our family’s future.",
    name: "Ramesh H.",
    role: "Premium Plot Owner",
  },
  {
    quote:
      "Clear titles, zero surprises and a team that answered every question. The layout looks even better than the brochure.",
    name: "Latha & Suresh N.",
    role: "Signature Plot Owners",
  },
  {
    quote:
      "We compared six projects in North Bangalore. The co-operative’s documentation and roads were in a different league.",
    name: "Arun K.",
    role: "Estate Plot Owner",
  },
];

const trustPoints = [
  {
    icon: Handshake,
    title: "Co-operative values. Customer first.",
    text: "The buyers are the members who own the society — every decision answers to them.",
  },
  {
    icon: ShieldCheck,
    title: "Clear titles. Hassle-free papers.",
    text: "Documentation is handled end to end, and shown to you in original before booking.",
  },
  {
    icon: TreePine,
    title: "Planned infrastructure. Lush green spaces.",
    text: "Roads, drainage, lighting and parks are built before handover, not promised after.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[activeIndex];

  return (
    <section className="testimonials-section" id="gallery">
      <div className="testimonials-layout container">
        <div className="testimonial-panel">
          <p className="eyebrow">What Our Clients Say</p>

          <h2 className="display testimonial-title">
            Trusted by
            <br />
            Hundreds of
            <br />
            Happy Families
          </h2>

          <div className="quote-mark">“</div>

          <p className="testimonial-quote">{testimonial.quote}</p>
          <p className="testimonial-name">— {testimonial.name}</p>
          <p className="testimonial-role">{testimonial.role}</p>

          <div className="testimonial-dots">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="trust-panel">
          <p className="eyebrow">Why Families Choose Us</p>

          <h2 className="display trust-title">
            Built on Trust.
            <br />
            Designed for Generations.
          </h2>

          <p className="trust-intro">
            Karnataka Bank Employees Housing Co-operative Society Ltd. brings
            decades of trust, transparency and member-first values to create
            plotted developments that stand the test of time.
          </p>

          <div className="trust-points">
            {trustPoints.map((point) => {
              const Icon = point.icon;

              return (
                <div className="trust-point" key={point.title}>
                  <Icon size={20} />
                  <div>
                    <strong>{point.title}</strong>
                    <p>{point.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link className="text-link text-link-light" to="/about">
            Know More About Us
            <ArrowRight size={17} />
          </Link>

          <div className="featured-project">
            <p className="featured-label">Featured Project</p>

            <div className="featured-image-wrap">
              <img
                src="/assets/409d5d91-3814-4db8-94c6-2e8d57524b4d.png"
                alt="Illuminated landscaped park inside the gated development"
              />
              <span>Doddaballapur</span>
            </div>

            <h3 className="display">
              Premium Gated
              <br />
              Plotted Development
            </h3>

            <p>High appreciation plots zone</p>

            <Link className="text-link text-link-light" to="/about">
              Explore Project
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
