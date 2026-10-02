import { CalendarDays, ChevronDown, Map, MessageCircle, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

import PageHero from "../components/common/PageHero";
import "./Contact.css";

const faqs = [
  ["What khata will the plot have?", "Khata type and the transfer route are being confirmed with the local authority. We publish the exact khata classification only once the document is in hand — ask the sales desk for the current status and we will share it as it stands today."],
  ["Which approvals does the layout hold?", "RERA registration and DTCP/BMRDA layout approval status are pending confirmation and are not published here until verified. Every approval we do hold is shown to you in original at the office before booking."],
  ["How does resale or transfer work?", "Plots allotted through the society can be transferred following the society transfer procedure, with dues cleared and the transfer recorded in the member register. The desk will walk you through the paperwork and applicable fees."],
  ["What exactly are the installment terms?", "A down payment at booking followed by four installments. Percentages and dates are fixed against the final price slab at booking and recorded in your allotment letter — there is no floating balloon payment at the end."],
  ["How do site visits work?", "Visits run seven days a week between 9:00 am and 6:00 pm. Book two days ahead for a weekend slot. A society representative meets you at the entrance arch and walks the layout, phase boundaries and plot numbers with you."],
  ["When is possession and registration?", "The possession and registration timeline is confirmation pending and will be published against the phase schedule once finalised. Registration begins on clearance of dues for your plot."],
];

export default function Contact() {
  const [intent, setIntent] = useState("visit");
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    size: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <PageHero
        label="Site Visits · Brochure · Questions"
        title="Come See the Land"
        highlight="Before You Decide"
        description="Pick a date, and we will confirm by phone. Visits run seven days a week, and a society representative walks the layout with you."
        image="/assets/2b9aa0d1-4834-470f-b8c8-cafa55ff3e77.png"
      />

      <section className="contact-main page-section">
        <div className="contact-main-grid page-section-inner">
          <div className="contact-form-panel">
            <div className="intent-switcher">
              <button
                className={intent === "visit" ? "is-active" : ""}
                type="button"
                onClick={() => setIntent("visit")}
              >
                Book a Visit
              </button>
              <button
                className={intent === "brochure" ? "is-active" : ""}
                type="button"
                onClick={() => setIntent("brochure")}
              >
                Get Brochure
              </button>
            </div>

            {!sent ? (
              <form className="visit-form" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name*"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  required
                />

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  aria-label={intent === "visit" ? "Preferred visit date" : "Preferred callback date"}
                />

                <select name="size" value={form.size} onChange={handleChange}>
                  <option value="">Preferred Plot Size</option>
                  <option value="30x40">30' × 40' — Signature</option>
                  <option value="40x60">40' × 60' — Premium</option>
                  <option value="60x90">60' × 90'+ — Estate</option>
                </select>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                />

                <button type="submit">
                  {intent === "visit" ? "Book Site Visit" : "Send Me the Brochure"}
                  <ArrowRight size={17} />
                </button>

                <p>
                  The brochure is sent to the number you enter. We call once,
                  and only about this project.
                </p>
              </form>
            ) : (
              <div className="contact-success">
                <CheckCircle2 size={38} />
                <h2 className="display">Thank you, {form.name.trim().split(" ")[0] || "friend"}.</h2>
                <p>
                  {intent === "visit"
                    ? `Your visit request is in. We will call ${form.phone || "your number"} to confirm the date and share directions to the site.`
                    : `The brochure is on its way to ${form.phone || "your number"} on WhatsApp, along with the current price list.`}
                </p>
              </div>
            )}
          </div>

          <div className="contact-side">
            <a className="contact-side-card" href="https://wa.me/918012345678">
              <MessageCircle size={22} />
              <span>
                <small>WhatsApp</small>
                Chat with the sales desk
              </span>
            </a>

            <a className="contact-side-card" href="tel:+918012345678">
              <Phone size={22} />
              <span>
                <small>Call</small>
                +91 80 1234 5678
              </span>
            </a>

            <div className="office-card">
              <div className="office-heading">
                <Map size={20} />
                <span>Office & site</span>
              </div>

              <p>
                Karnataka Bank Employees Housing Co-operative Society Ltd.
                <br />
                <small>Office address to be confirmed</small>
              </p>

              <p>
                Project site: near Devanahalli, North Bangalore
              </p>

              <div className="office-map">
                <Map size={24} />
                <span>Office location map</span>
              </div>
            </div>

            <div className="visit-hours">
              <small>Visit hours</small>
              <p>
                Seven days a week, 9:00 am – 6:00 pm.
                <br />
                Weekend slots fill first — book two days ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section page-section">
        <div className="faq-layout page-section-inner">
          <div className="faq-intro">
            <p className="eyebrow">FAQ</p>
            <h2 className="display dark-title">
              The questions buyers
              <br />
              actually ask.
            </h2>
            <p>
              Where an answer depends on a document we have not yet received,
              it says so. That is deliberate.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;

              return (
                <div className="faq-item" key={question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span className="display">{question}</span>
                    {isOpen ? <ChevronDown size={22} /> : <ArrowRight size={22} />}
                  </button>

                  {isOpen && <p>{answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
