import { Menu, Phone, X } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Header.css";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Location & Pricing", path: "/location-pricing" },
  { label: "Contact", path: "/contact" },
  { label: "Blog", path: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const goHome = () => {
    closeMenu();

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="brand" onClick={goHome} aria-label="Go to home">
          <img
            src="/assets/d53a2854-0e08-4a73-91dd-73598b38d140.png"
            alt="KBHECS crest"
            className="brand-logo"
          />

          <span className="brand-copy">
            <span className="brand-name">
              Karnataka Bank Employees
              <br />
              Housing Co-operative Society Ltd.
            </span>

            <span className="brand-kannada">
              ಕರ್ನಾಟಕ ಬ್ಯಾಂಕ್ ಎಂಪ್ಲಾಯೀಸ್<br />
              ಹೌಸಿಂಗ್ ಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ಲಿಮಿಟೆಡ್
            </span>
          </span>
        </button>

        <div className={`header-menu ${menuOpen ? "is-open" : ""}`}>
          <nav className="main-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "is-active" : ""}`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <NavLink className="header-enquire" to="/contact" onClick={closeMenu}>
              Enquire Now
            </NavLink>

            <a className="header-phone" href="tel:+918012345678" aria-label="Call KBHECS">
              <Phone size={18} />
            </a>
          </div>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
