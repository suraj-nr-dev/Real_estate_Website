import { ArrowRight, Building2, MapPin, Navigation, Plane } from "lucide-react";
import { Link } from "react-router-dom";

import "./LocationAdvantages.css";

const advantages = [
  { icon: Plane, text: "30 minutes to Kempegowda International Airport" },
  { icon: Navigation, text: "Direct NH44 access on the Bangalore–Hyderabad corridor" },
  { icon: Building2, text: "Close to the upcoming FASSCON Bangalore development" },
  { icon: MapPin, text: "Town centre, schools and hospitals within easy reach" },
];

export default function LocationAdvantages() {
  return (
    <section className="location-section" id="about">
      <div className="location-layout">
        <div className="location-copy">
          <p className="eyebrow section-label-dark">Location Advantages</p>

          <h2 className="display-location-title">
            Minutes from the Airport.
            <br />
            Ahead of the Curve.
          </h2>

          <p className="location-description">
            North Bangalore is the city's fastest-maturing corridor — the
            airport moved employment north, and land values followed. This
            layout sits inside that pull, not on its edge.
          </p>

          <div className="location-advantage-list">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div className="location-advantage" key={item.text}>
                  <Icon size={20} />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>

          <Link className="location-button" to="/location-pricing">
            See Location & Pricing
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="location-visual">
          <img
            src="/assets/91706abd-4c65-4fdc-933c-eb242dd2889e.png"
            alt="Wide landscaped avenue at sunrise inside the layout"
          />

          <div className="location-stats">
            <Stat value="30" label="Minutes to Airport" />
            <Stat value="NH44" label="Highway Access" />
            <Stat value="100" label="Acre Layout" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="location-stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
