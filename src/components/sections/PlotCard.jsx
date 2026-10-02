import { ArrowRight } from "lucide-react";

import "./PlotCard.css";

export default function PlotCard({
  image,
  title,
  size,
  area,
  description,
  featured = false,
}) {
  return (
    <article className={`plot-card ${featured ? "plot-card-featured" : ""}`}>
      <div className="plot-card-image-wrap">
        <img className="plot-card-image" src={image} alt={title} />

        {featured && <span className="plot-card-badge">Most Popular</span>}
      </div>

      <div className="plot-card-content">
        <h3 className="plot-card-title">{title}</h3>
        <p className="plot-card-size">{size}</p>
        <p className="plot-card-area">{area}</p>

        <div className="plot-card-bottom">
          <p>{description}</p>

          <a href="#contact" className="plot-card-arrow" aria-label={`Enquire about ${title}`}>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}
