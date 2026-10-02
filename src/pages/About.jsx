import {
  ArrowRight,
  Check,
  FileCheck2,
  Fence,
  Landmark,
  Lightbulb,
  Map,
  Park,
  Route,
  ShieldCheck,
  Droplets,
  Zap,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import "./About.css";

const plotSizes = [
  {
    size: "30' × 40'",
    area: "1200 sq. ft.",
    description:
      "The entry size — the easiest installment load and the most liquid on resale.",
    image: "/assets/6ba8661c-87b7-43eb-b02d-c1477d989c2e.png",
  },
  {
    size: "30' × 50'",
    area: "1500 sq. ft.",
    description:
      "Extra depth for a setback garden or a two-car porch on the same budget band.",
    image: "/assets/f1358fad-5619-4e84-9f13-a19086f60f1a.png",
  },
  {
    size: "40' × 60'",
    area: "2400 sq. ft.",
    description:
      "The independent-house size, and the strongest appreciation history in the corridor.",
    image: "/assets/bd4de035-d689-4577-a3fb-fa53f1aa6056.png",
  },
];

const comparisons = [
  [
    "Who the layout is built for",
    "Members of the society — the buyers are the owners of the entity developing the land.",
    "Shareholders of a private company; buyer interest is a cost line.",
  ],
  [
    "Pricing motive",
    "Priced to make ownership reachable for salaried members.",
    "Priced to the maximum the market will absorb.",
  ],
  [
    "Documentation",
    "Society records, member registers and sale documents open to member scrutiny.",
    "Varies by developer; buyer carries the verification burden.",
  ],
  [
    "Payment flexibility",
    "Down payment plus four installments, published up front.",
    "Usually full payment or bank-loan dependent.",
  ],
  [
    "If something goes wrong",
    "Governed by co-operative society rules with a named committee answerable to members.",
    "Contractual remedy only — typically arbitration or court.",
  ],
];

const amenities = [
  [Fence, "Compound wall around the layout"],
  [Landmark, "Grand entrance arch"],
  [Route, "Asphalted internal roads"],
  [Lightbulb, "Street lighting"],
  [Droplets, "Underground drainage"],
  [Droplets, "Water connection"],
  [Zap, "Electricity connection"],
  [Park, "Landscaped park"],
];

const approvals = [
  ["RERA", "Project registration number"],
  ["DTCP / BMRDA", "Layout approval status"],
  ["Khata", "Khata type and transfer route"],
  ["Title", "Encumbrance certificate & title chain"],
];

export default function About() {
  return (
    <main>
      <PageHero
        label="About the Society & Project"
        title="Together We Build"
        highlight="Better Homes"
        description="A 100-acre plotted development near Devanahalli, promoted by a co-operative society of bank employees — answerable to its members, not to margins."
        image="/assets/837eab29-391c-4e8b-849b-b0ad4eece23a.png"
      />

      <section className="about-intro page-section">
        <div className="about-intro-grid page-section-inner">
          <div>
            <p className="eyebrow section-label-dark">Background & Mission</p>
            <h2 className="display light-title">
              A society formed to make
              <br />
              land ownership simple.
            </h2>

            <p className="light-copy">
              Karnataka Bank Employees Housing Co-operative Society Ltd. exists
              for one reason — to help its members own land without the guesswork
              that surrounds plot buying around Bangalore. Layout planning,
              pricing, documentation and payment terms are decided in the
              interest of the members who own the society, and recorded in its books.
            </p>

            <p className="light-copy small-top">
              That mandate shapes this project near Devanahalli: one 100-acre
              layout, three plot sizes, a published installment structure, and no
              claim on this website until the paperwork behind it is verified.
            </p>

            <div className="about-tags">
              <span>Member-owned</span>
              <span>Bank-employee promoters</span>
              <span>Installment-friendly</span>
            </div>
          </div>

          <div className="about-intro-visual">
            <img
              src="/assets/c7f5de63-3b3d-4764-8eb1-80e1a0ed9f2e.png"
              alt="Internal road and landscaping inside the KBEHCS plotted layout near Devanahalli"
            />

            <div className="about-intro-stats">
              <Stat value="100" label="Acres Layout" />
              <Stat value="3" label="Plot Size Options" />
              <Stat value="4" label="Installments After Booking" />
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-section page-section">
        <div className="page-section-inner">
          <div className="comparison-heading">
            <p className="eyebrow">Why a Co-operative Society</p>
            <h2 className="display dark-title">
              Lower risk than a private
              <br />
              developer plot — structurally.
            </h2>
            <p>
              The difference is not marketing. It is who the layout is being
              built for, and who answers when something goes wrong.
            </p>
          </div>

          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div>What you are comparing</div>
              <div>Co-operative society layout</div>
              <div>Typical private developer plot</div>
            </div>

            {comparisons.map((row) => (
              <div className="comparison-row" key={row[0]}>
                <div>{row[0]}</div>
                <div>{row[1]}</div>
                <div>{row[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overview-section page-section">
        <div className="page-section-inner">
          <div className="overview-heading">
            <div>
              <p className="eyebrow section-label-dark">Project Overview</p>
              <h2 className="display light-title">
                One layout. Three plot sizes.
                <br />
                100 acres near Devanahalli.
              </h2>
            </div>

            <p>
              Plot inventory is released in phases. Total plot count and
              phase-wise availability are confirmed by the sales desk at the
              time of enquiry.
            </p>
          </div>

          <div className="overview-grid">
            {plotSizes.map((plot) => (
              <article className="overview-card" key={plot.size}>
                <img src={plot.image} alt={`${plot.size} plot frontage`} />
                <div>
                  <h3 className="display">{plot.size}</h3>
                  <p className="overview-area">{plot.area}</p>
                  <p>{plot.description}</p>
                </div>
              </article>
            ))}

            <article className="price-card">
              <p>Indicative price</p>
              <strong>₹1,300 <span>/ sq. ft.</span></strong>
              <small>
                Final price slab and installment schedule are confirmed in
                writing before booking.
              </small>
              <Link to="/location-pricing">
                See pricing <ArrowRight size={16} />
              </Link>
            </article>
          </div>

          <div className="master-plan">
            <div className="master-plan-heading">
              <h3 className="display">Master plan viewer</h3>
              <span>alt=“KBEHCS plotted layout master plan near Devanahalli”</span>
            </div>

            <div className="master-plan-placeholder">
              <Map size={34} />
              <span>high-res master plan render</span>
              <small>Drops in without a rebuild — zoom + phase overlay ready</small>
            </div>
          </div>
        </div>
      </section>

      <section className="amenities-section page-section">
        <div className="page-section-inner">
          <p className="eyebrow">Infrastructure & Amenities</p>
          <h2 className="display dark-title">
            Built before handover,
            <br />
            not promised after it.
          </h2>

          <div className="amenities-grid">
            {amenities.map(([Icon, label]) => (
              <div className="amenity-card" key={label}>
                <Icon size={30} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="approval-section page-section">
        <div className="approval-layout page-section-inner">
          <div>
            <p className="eyebrow section-label-dark">Approvals & Legal</p>
            <h2 className="display light-title">
              We publish approvals
              <br />
              only after verification.
            </h2>
            <p className="light-copy">
              Khata disputes and approval claims that do not survive due diligence
              are the two biggest risks in this category. So this page carries no
              approval number until the document behind it is in hand — ask the
              sales desk for the current status and we will share it as it stands.
            </p>
            <Link className="location-button" to="/contact">
              Request legal status
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="approval-cards">
            {approvals.map(([kind, title]) => (
              <div className="approval-card" key={kind}>
                <span>{kind}</span>
                <strong className="display">{title}</strong>
                <small>
                  <CalendarDays size={14} />
                  Confirmation pending
                </small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-inner container">
          <div>
            <h2 className="display">See the layout in person.</h2>
            <p>Site visits run seven days a week. Pick a date and we will confirm by phone.</p>
          </div>

          <div className="about-cta-actions">
            <Link to="/contact">Book a site visit <ArrowRight size={18} /></Link>
            <Link to="/location-pricing">Get full price list</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }) {
  return (
    <div className="about-stat">
      <strong className="display">{value}</strong>
      <span>{label}</span>
    </div>
  );
}
