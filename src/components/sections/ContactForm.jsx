import { CheckCircle2, Flower2, Mail, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

import "./ContactForm.css";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  size: "",
  message: "",
};

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className={`contact-section ${compact ? "contact-section-compact" : ""}`} id={compact ? undefined : "contact"}>
      <div className="contact-layout container">
        <div className="contact-intro">
          <p className="eyebrow section-label-dark">Let's Connect</p>
          <h2 className="display contact-title">Enquire Now</h2>
          <p className="contact-subtitle">
            Our team will get in touch with you shortly.
          </p>

          <div className="contact-details">
            <a href="tel:+918012345678">
              <span><Phone size={17} /></span>
              +91 80 1234 5678
            </a>

            <a href="mailto:info@kbhecs.in">
              <span><Mail size={17} /></span>
              info@kbhecs.in
            </a>
          </div>
        </div>

        <div className="contact-form-wrap">
          {!sent ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                className="form-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name*"
                required
              />

              <input
                className="form-input"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                required
              />

              <input
                className="form-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
              />

              <select
                className="form-input form-select"
                name="size"
                value={form.size}
                onChange={handleChange}
              >
                <option value="">Preferred Plot Size</option>
                <option value="30x40">30' × 40' — Signature</option>
                <option value="40x60">40' × 60' — Premium</option>
                <option value="60x90">60' × 90'+ — Estate</option>
              </select>

              <textarea
                className="form-input form-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
              />

              <button className="form-submit" type="submit">
                Submit Enquiry
                <ArrowRight size={17} />
              </button>

              <p className="form-note">
                The brochure is sent to the number you enter. We call once,
                and only about this project.
              </p>
            </form>
          ) : (
            <div className="success-card">
              <CheckCircle2 size={38} />
              <h3 className="display">
                Thank you, {form.name.trim().split(" ")[0] || "friend"}.
              </h3>
              <p>
                Your enquiry has reached our sales desk. A relationship
                manager will call you on {form.phone || "your registered number"}
                within one working day.
              </p>
            </div>
          )}
        </div>

        <div className="legacy-card">
          <Flower2 size={30} />
          <p className="display">
            Your Legacy
            <br />
            Begins Here.
          </p>
        </div>
      </div>
    </section>
  );
}
