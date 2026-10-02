import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import PlotCard from "./PlotCard";
import "./PlotCategories.css";

const plots = [
  {
    title: "Signature Plots",
    size: "30' × 40'",
    area: "1200 sq. ft. onwards",
    description: "Perfect for elegant villas",
    image: "/assets/e46fd110-3e95-46f2-9c9c-5f0e6fd18006.png",
  },
  {
    title: "Premium Plots",
    size: "40' × 60'",
    area: "2400 sq. ft. onwards",
    description: "More space. More luxury.",
    image: "/assets/1b40a0b7-1099-44e6-892e-9aac7e7b6553.png",
    featured: true,
  },
  {
    title: "Estate Plots",
    size: "60' × 90' +",
    area: "5400 sq. ft. onwards",
    description: "Ultra-luxury living estates",
    image: "/assets/5f8caaed-6735-4e77-a32d-23bcc0a85600.png",
  },
];

export default function PlotCategories() {
  return (
    <section className="plots-section" id="plots">
      <div className="plots-layout container">
        <div className="plots-intro">
          <p className="eyebrow">Curated for Exclusivity</p>

          <h2 className="display section-title-light">
            Our Premium
            <br />
            Plot Categories
          </h2>

          <p className="section-copy-light">
            Spacious plots crafted for those who value privacy, nature and
            long-term appreciation.
          </p>

          <Link className="text-link text-link-light" to="/location-pricing">
            View All Plots
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="plots-grid">
          {plots.map((plot) => (
            <PlotCard key={plot.title} {...plot} />
          ))}
        </div>
      </div>
    </section>
  );
}
