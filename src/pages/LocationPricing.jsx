import {
  Building2,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Navigation,
  Plane,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import "./LocationPricing.css";

const connectivity = [
  { icon: Plane, value: "~20 min", label: "To Kempegowda International Airport" },
  { icon: Navigation, value: "NH44", label: "Highway access on the Bangalore–Hyderabad corridor" },
  { icon: Building2, value: "FASSCON", label: "Upcoming FASSCON Bangalore development nearby" },
  { icon: MapPin, value: "Devanahalli", label: "Town centre, schools and hospitals within reach" },
];

const prices = [
  { size: "30' × 40'", area: "1,200 sq. ft.", rate: "₹1,300 / sq. ft.", total: "₹15.60 L" },
  { size: "30' × 50'", area: "1,500 sq. ft.", rate: "₹1,300 / sq. ft.", total: "₹19.50 L" },
  { size: "40' × 60'", area: "2,400 sq. ft.", rate: "₹1,300 / sq. ft.", total: "₹31.20 L" },
];

const steps = [
  ["Step 01", "Down payment", "Paid at booking; plot number is blocked in your name.", "Share to be confirmed"],
  ["Step 02", "Installment 1", "First of four equal installments after booking.", "Date set at booking"],
  ["Step 03", "Installment 2", "Receipt issued against every payment.", "Date set at booking"],
  ["Step 04", "Installment 3", "Statement of account available on request.", "Date set at booking"],
  ["Step 05", "Installment 4", "Registration process begins on clearance of dues.", "Then registration"],
];

export default function LocationPricing() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [size, setSize] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <PageHero
        label="Devanahalli · North Bangalore"
        title="20 Minutes from"
        highlight="the Airport"
        description="Location, indicative pricing and the installment schedule — in one place, with nothing dressed up."
        image="/assets/fd684063-3184-4a5d-9a95-2df15ba4984b.png"
      />

      <section className="connectivity-section page-section">
        <div className="page-section-inner">
          <p className="eyebrow">Connectivity</p>

          <div className="connectivity-grid">
            <div className="connectivity-list">
              {connectivity.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="connectivity-item" key={item.value}>
                    <Icon size={22} />
                    <div>
                      <strong className="display">{item.value}</strong>
                      <p>{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="map-card">
              <MapPin size={28} />
              <span>Embedded map · project location</span>
              <small>Near Devanahalli, North Bangalore</small>
            </div>
          </div>

          <div className="corridor-copy">
            <h2 className="display-light-title">
              Why North Bangalore is Bangalore's next growth corridor
            </h2>
            <p>
              The airport rewrote the map. Everything that followed it — hotels,
              business parks, the NH44 upgrade, the hardware and aerospace clusters —
              pulled employment north of the city, and land values followed employment,
              as they always do.
            </p>
            <p>
              Devanahalli sits inside that pull. The upcoming FASSCON Bangalore
              development and continued NH44 widening keep adding reasons for people
              to live here rather than commute here.
            </p>
            <p>
              For a mid-term investor the arithmetic is simple: buy land in a corridor
              where infrastructure is still being commissioned, hold it while the
              corridor matures, and let the plot do the work.
            </p>
          </div>
        </div>
      </section>

      <section className="pricing-section page-section">
        <div className="page-section-inner">
          <div className="pricing-heading">
            <div>
              <p className="eyebrow section-label-dark">Pricing</p>
              <h2 className="display light-title">
                Indicative cost,
                <br />
                plot size by plot size.
              </h2>
            </div>
            <p>
              Based on an indicative ₹1,300 per sq. ft. The final price slab is
              confirmed in writing before booking — figures below are for comparison,
              not a quotation.
            </p>
          </div>

          <div className="price-table">
            <div className="price-row price-header">
              <span>Plot size</span>
              <span>Area</span>
              <span>Rate</span>
              <span>Total</span>
            </div>

            {prices.map((row) => (
              <div className="price-row" key={row.size}>
                <strong>{row.size}</strong>
                <span>{row.area}</span>
                <span>{row.rate}</span>
                <strong>{row.total}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="payment-section page-section">
        <div className="page-section-inner">
          <p className="eyebrow">Payment Plan</p>
          <h2 className="display dark-title">
            Down payment,
            <br />
            then four installments.
          </h2>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div className="payment-step" key={step[0]}>
                <span>{step[0]}</span>
                <strong className="display">{step[1]}</strong>
                <p>{step[2]}</p>
                <small className={index === 0 || index === 4 ? "is-accent" : ""}>{step[3]}</small>
              </div>
            ))}
          </div>

          <div className="finance-note">
            <span>Loan & finance tie-up</span>
            <p>
              Bank tie-up details for plot loans are being finalised. This section
              will name the lending partners and eligibility once confirmed — we will
              not list a bank we cannot process a file with.
            </p>
          </div>
        </div>
      </section>

      <section className="price-list-section page-section" id="price-list">
        <div className="price-list-layout page-section-inner">
          <div>
            <p className="eyebrow section-label-dark">Get Full Price List</p>
            <h2 className="display light-title">Two fields. One call back.</h2>
            <p className="price-list-copy">
              We send the current price slab, installment schedule and site-visit details.
            </p>
          </div>

          <div className="price-list-form-wrap">
            {!sent ? (
              <form className="price-list-form" onSubmit={handleSubmit}>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your Name*"
                  required
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Phone Number*"
                  required
                />
                <select value={size} onChange={(event) => setSize(event.target.value)}>
                  <option value="">Preferred Plot Size</option>
                  <option value="30x40">30' × 40' — Signature</option>
                  <option value="30x50">30' × 50' — Premium</option>
                  <option value="40x60">40' × 60' — Estate</option>
                </select>
                <button type="submit">
                  Get Full Price List
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div className="price-list-success">
                <CheckCircle2 size={38} />
                <h3 className="display">On its way, {name.trim().split(" ")[0] || "friend"}.</h3>
                <p>
                  The price list request is recorded. We will call {phone || "your number"}
                  {size ? ` regarding the ${size} plot option` : ""}.
                </p>
                <Link to="/contact">Talk to the sales desk <ArrowRight size={16} /></Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
