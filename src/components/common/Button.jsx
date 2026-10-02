import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
}) {
  const className = `btn btn-${variant}`;

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
