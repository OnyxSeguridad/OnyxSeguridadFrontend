"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      id="whatsapp-float"
      href="https://wa.me/522211476154?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20seguridad."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-onyx-whatsapp rounded-full flex items-center justify-center shadow-lg shadow-green-900/40 hover:scale-110 transition-transform duration-200 pulse-ring"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
