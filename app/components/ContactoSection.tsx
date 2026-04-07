"use client";

import { useState } from "react";
import Image from "next/image";
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-onyx-text font-serif tracking-wide">
            ¿Necesita Seguridad Profesional?
          </h2>
          <p className="mt-4 text-base md:text-lg text-onyx-text-muted max-w-2xl mx-auto">
            Envíenos un mensaje directamente por WhatsApp y reciba atención
            personalizada de manera inmediata.
          </p>
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

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-max"
          >
            {/* Phone Cards */}
            <a
              href="tel:+522225033916"
              className="flex flex-col items-center text-center gap-3 bg-onyx-card border border-onyx-border rounded-2xl p-5 hover:border-onyx-gold/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-onyx-gold/10 flex items-center justify-center group-hover:bg-onyx-gold/20 transition-colors">
                <FaPhone className="text-onyx-gold text-lg" />
              </div>
              <div>
                <h3 className="text-sm text-onyx-text-muted mb-1">Oficina Central</h3>
                <p className="text-onyx-gold font-bold text-lg">222 503 3916</p>
              </div>
            </a>

            {/* WhatsApp Cards */}
            <a
              href="https://wa.me/522211476154"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-3 bg-onyx-card border border-onyx-border rounded-2xl p-5 hover:border-onyx-whatsapp/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-onyx-whatsapp/10 flex items-center justify-center group-hover:bg-onyx-whatsapp/20 transition-colors">
                <FaWhatsapp className="text-onyx-whatsapp text-xl" />
              </div>
              <div>
                <h3 className="text-sm text-onyx-text-muted mb-1">WhatsApp Ventas</h3>
                <p className="text-onyx-whatsapp font-bold text-lg">221 147 6154</p>
              </div>
            </a>

            {/* Email Cards */}
            <a
              href="mailto:enlace@onyxseguridad.com"
              className="flex flex-col items-center text-center gap-2 bg-onyx-card border border-onyx-border rounded-2xl p-5 hover:border-onyx-gold/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-onyx-gold/10 flex items-center justify-center group-hover:bg-onyx-gold/20 transition-colors">
                <FaEnvelope className="text-onyx-gold text-lg" />
              </div>
              <div className="w-full">
                <h3 className="text-sm text-onyx-text-muted mb-1">Enlace</h3>
                <p className="text-onyx-gold font-medium text-xs break-all">enlace@onyxseguridad.com</p>
              </div>
            </a>

            <a
              href="mailto:contacto@onyxseguridad.com"
              className="flex flex-col items-center text-center gap-2 bg-onyx-card border border-onyx-border rounded-2xl p-5 hover:border-onyx-gold/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-onyx-gold/10 flex items-center justify-center group-hover:bg-onyx-gold/20 transition-colors">
                <FaEnvelope className="text-onyx-gold text-lg" />
              </div>
              <div className="w-full">
                <h3 className="text-sm text-onyx-text-muted mb-1">General</h3>
                <p className="text-onyx-gold font-medium text-xs break-all">contacto@onyxseguridad.com</p>
              </div>
            </a>

            {/* Ubicación */}
            <div className="sm:col-span-2 flex flex-col items-center text-center gap-3 bg-onyx-card/50 border border-onyx-border/50 rounded-2xl p-4 mt-2">
              <div className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-onyx-gold text-lg" />
                <span className="font-medium text-onyx-text">Puebla, Puebla, México</span>
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
              <Image 
                src="/images/LogoOnyx.svg" 
                alt="Logo ONYX Seguridad" 
                width={48} 
                height={48} 
                className="object-contain" 
              />
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
