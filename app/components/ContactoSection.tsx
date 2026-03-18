"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactoSection() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${nombre}${empresa ? ` de ${empresa}` : ""}. ${mensaje}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/522211476154?text=${encoded}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-onyx-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-onyx-gold border border-onyx-gold/30 rounded-full mb-4">
            Contáctenos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-onyx-text">
            ¿Necesita Seguridad Profesional?
          </h2>
          <p className="mt-4 text-base md:text-lg text-onyx-text-muted max-w-2xl mx-auto">
            Envíenos un mensaje directamente por WhatsApp y reciba atención
            personalizada de manera inmediata.
          </p>
          <div className="mt-6 mx-auto h-1 w-16 bg-gradient-to-r from-onyx-gold to-onyx-gold-light rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form → WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-onyx-card border border-onyx-border rounded-2xl p-8 space-y-5"
            >
              <h3 className="text-lg font-semibold text-onyx-text mb-2">
                Enviar mensaje por WhatsApp
              </h3>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm text-onyx-text-muted mb-1.5"
                >
                  Nombre completo *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Su nombre"
                  className="w-full px-4 py-3 bg-onyx-black border border-onyx-border rounded-xl text-onyx-text placeholder-onyx-text-muted/50 focus:outline-none focus:border-onyx-gold/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-empresa"
                  className="block text-sm text-onyx-text-muted mb-1.5"
                >
                  Empresa (opcional)
                </label>
                <input
                  id="contact-empresa"
                  type="text"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  placeholder="Nombre de su empresa"
                  className="w-full px-4 py-3 bg-onyx-black border border-onyx-border rounded-xl text-onyx-text placeholder-onyx-text-muted/50 focus:outline-none focus:border-onyx-gold/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm text-onyx-text-muted mb-1.5"
                >
                  Mensaje *
                </label>
                <textarea
                  id="contact-message"
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  rows={4}
                  placeholder="¿En qué podemos ayudarle?"
                  className="w-full px-4 py-3 bg-onyx-black border border-onyx-border rounded-xl text-onyx-text placeholder-onyx-text-muted/50 focus:outline-none focus:border-onyx-gold/50 transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-onyx-whatsapp text-white font-semibold rounded-xl hover:bg-green-500 transition-all duration-200 text-lg"
              >
                <FaPaperPlane />
                Enviar por WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Phone card */}
            <a
              href="tel:+522225033916"
              className="flex items-center gap-4 bg-onyx-card border border-onyx-border rounded-2xl p-6 hover:border-onyx-gold/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-onyx-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-onyx-gold/20 transition-colors">
                <FaPhone className="text-onyx-gold text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-onyx-text">Oficina ONYX</h3>
                <p className="text-onyx-gold font-medium">222 503 3916</p>
              </div>
            </a>

            <a
              href="https://wa.me/522211476154"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-onyx-card border border-onyx-border rounded-2xl p-6 hover:border-onyx-whatsapp/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-onyx-whatsapp/10 flex items-center justify-center flex-shrink-0 group-hover:bg-onyx-whatsapp/20 transition-colors">
                <FaWhatsapp className="text-onyx-whatsapp text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-onyx-text">WhatsApp</h3>
                <p className="text-onyx-whatsapp font-medium">221 147 6154</p>
              </div>
            </a>

            <a
              href="mailto:contacto@onyxseguridad.com"
              className="flex items-center gap-4 bg-onyx-card border border-onyx-border rounded-2xl p-6 hover:border-onyx-gold/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-onyx-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-onyx-gold/20 transition-colors">
                <FaEnvelope className="text-onyx-gold text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-onyx-text">
                  Correo Electrónico
                </h3>
                <p className="text-onyx-text-muted text-sm">
                  contacto@onyxseguridad.com
                </p>
                <p className="text-onyx-text-muted text-sm">
                  enlace@onyxseguridad.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-onyx-card border border-onyx-border rounded-2xl p-6">
              <div className="w-14 h-14 rounded-xl bg-onyx-gold/10 flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-onyx-gold text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-onyx-text">Ubicación</h3>
                <p className="text-onyx-text-muted text-sm">Puebla, Puebla, México</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-onyx-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-onyx-gold to-onyx-gold-dark flex items-center justify-center font-bold text-onyx-black text-sm">
                O
              </div>
              <span className="text-onyx-text-muted text-sm">
                © {new Date().getFullYear()} ONYX Seguridad Privada y Estratégica S.A. de C.V.
              </span>
            </div>
            <div className="flex items-center gap-2 text-onyx-text-muted text-xs">
              <FaShieldAlt className="text-onyx-gold text-sm" />
              Registro SSP/SUBCOP/DGSP/033-25/530
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
