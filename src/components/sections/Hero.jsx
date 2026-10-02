import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Building2,
  Route,
  ShieldCheck,
  TrendingUp,
  MapPin,
} from "lucide-react";

import Button from "../common/Button";
import "./Hero.css";

const features = [
  { icon: TrendingUp, title: "High Appreciation", subtitle: "Plots Zone" },
  { icon: Building2, title: "Premium Gated", subtitle: "Community" },
  { icon: Route, title: "Wide Roads &", subtitle: "Landscaping" },
  { icon: ShieldCheck, title: "Clear Titles &", subtitle: "Legal Safe" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img
        className="hero-image"
        src="/assets/hero-avenue-hd.jpg"
        alt="Tree-lined avenue through the landscaped layout at sunrise"
      />

      <div className="hero-overlay"></div>
      <div className="hero-bottom-fade"></div>

      <div className="hero-content container">
        <div className="hero-copy">
          <div className="hero-location">
            <MapPin size={17} />
            <span>Doddaballapur</span>
          </div>

          <h1 className="hero-title">
            ಕರ್ನಾಟಕ ಬ್ಯಾಂಕ್
            <br />
            <span>ನೌಕರರ ಗೃಹ ನಿರ್ಮಾಣ ಸಹಕಾರ ಸಂಘ</span>
          </h1>

          <p className="hero-description">
            High appreciation plots zone for a privileged life.
            <br />
            30 minutes from Kempegowda International Airport.
          </p>

          <div className="hero-buttons">
            <Button href="#plots">
              Explore Plots
              <ArrowRight size={18} />
            </Button>

            <Button href="#contact" variant="secondary">
              Schedule a Visit
              <Calendar size={18} />
            </Button>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to Discover</span>
        <ChevronDown size={20} className="floaty" />
      </div>

      <div className="hero-features">
        <div className="hero-features-inner container">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="hero-feature" key={feature.title}>
                <span className="hero-feature-icon">
                  <Icon size={19} />
                </span>

                <span className="hero-feature-text">
                  {feature.title}
                  <br />
                  {feature.subtitle}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
