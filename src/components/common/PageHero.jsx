import "./PageHero.css";

export default function PageHero({
  label,
  title,
  highlight,
  description,
  image,
}) {
  return (
    <section className="page-hero">
      {image && (
        <img className="page-hero-image" src={image} alt="" aria-hidden="true" />
      )}

      <div className="page-hero-overlay"></div>

      <div className="page-hero-content container">
        <p className="eyebrow">{label}</p>

        <h1 className="display page-hero-title">
          {title}
          {highlight && (
            <>
              <br />
              <span>{highlight}</span>
            </>
          )}
        </h1>

        {description && <p className="page-hero-description">{description}</p>}
      </div>
    </section>
  );
}
