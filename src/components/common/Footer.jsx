import { Camera, Globe, Play, Briefcase, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img
            src="/assets/d53a2854-0e08-4a73-91dd-73598b38d140.png"
            alt="KBHECS crest"
            className="footer-logo"
          />

          <div>
            <p className="footer-company">
              Karnataka Bank Employees
              <br />
              Housing Co-operative Society Ltd.
            </p>

            <p className="footer-kannada">
              ಕರ್ನಾಟಕ ಬ್ಯಾಂಕ್ ಎಂಪ್ಲಾಯೀಸ್<br />
              ಹೌಸಿಂಗ್ ಕೋ-ಆಪರೇಟಿವ್<br />
              ಸೊಸೈಟಿ ಲಿಮಿಟೆಡ್
            </p>
          </div>
        </div>

        <div>
          <p className="footer-heading">Quick Links</p>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/#gallery">Gallery</Link>
            <Link to="/location-pricing">Plots</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/#services">Services</Link>
          </div>
        </div>

        <div>
          <p className="footer-heading">Follow Us</p>
          <div className="social-links">
            <a href="#home" aria-label="Facebook"><Globe size={16} /></a>
            <a href="#home" aria-label="Instagram"><Camera size={16} /></a>
            <a href="#home" aria-label="YouTube"><Play size={16} /></a>
            <a href="#home" aria-label="LinkedIn"><Briefcase size={16} /></a>
          </div>
        </div>

        <div>
          <p className="footer-heading">RERA & Legal</p>
          <p className="footer-legal">
            RERA No: PRM/KA/RERA/XXXX/XXX/PR/XXXXXX
          </p>
          <p className="footer-copy">
            © 2025 KBHECS Ltd. All rights reserved.
          </p>

          <div className="footer-contact">
            <a href="tel:+918012345678"><Phone size={14} /> +91 80 1234 5678</a>
            <a href="mailto:info@kbhecs.in"><Mail size={14} /> info@kbhecs.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
