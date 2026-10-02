import { MessageCircle } from "lucide-react";

import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/918012345678"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
