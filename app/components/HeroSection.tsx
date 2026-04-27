"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaShieldAlt, FaPhone } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      aria-label="Sección principal - ONYX Seguridad Privada y Estratégica"
      className="relative min-h-screen flex items-center overflow-hidden bg-onyx-black"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Oficial de seguridad ONYX en motocicleta de patrullaje"
          fill
          className="object-cover object-[60%_center] md:object-contain md:object-right"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-black/80 via-onyx-black/50 to-onyx-black md:from-onyx-black/60 md:via-transparent md:to-onyx-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx-black/70 via-onyx-black/40 to-transparent md:from-onyx-black md:via-onyx-black/50 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
          >
            <span className="text-onyx-text">Seguridad</span>
            <br />
            <span className="text-gradient-gold">Privada y</span>
            <br />
            <span className="text-gradient-gold">Estratégica</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-onyx-text-muted leading-relaxed mb-8 max-w-lg"
          >
            Protección profesional con vigilantes altamente capacitados y
            tecnología de última generación. Su seguridad es nuestra
            prioridad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              id="hero-whatsapp-cta"
              href="https://wa.me/522211476154?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20seguridad."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar información por WhatsApp - ONYX Seguridad"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-onyx-whatsapp text-white font-semibold text-lg rounded-full hover:bg-green-500 transition-all duration-200 shadow-lg shadow-green-900/30 hover:shadow-green-900/50 hover:scale-105"
            >
              <FaWhatsapp className="text-2xl" aria-hidden="true" />
              Solicitar Información
            </a>
            <a
              href="tel:+522225033916"
              aria-label="Llamar a ONYX Seguridad al 222 503 3916"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-onyx-gold/40 text-onyx-gold font-semibold text-lg rounded-full hover:bg-onyx-gold/10 transition-all duration-200"
            >
              <FaPhone className="text-lg" aria-hidden="true" />
              222 503 3916
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 mt-14 max-w-xl"
        >
          {[
            { value: "24/7", label: "Monitoreo Permanente" },
            { value: "GPS", label: "Geolocalización en vivo" },
            { value: "SSP", label: "Registro Oficial" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="glass rounded-2xl p-5 text-center hover:border-onyx-gold/30 transition-colors"
            >
              <div className="text-2xl lg:text-3xl font-bold text-gradient-gold mb-1">
                {stat.value}
              </div>
              <div className="text-xs lg:text-sm text-onyx-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Registration + Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-onyx-gold/40 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 bg-onyx-gold rounded-full" />
        </motion.div>
        <span className="text-onyx-text-muted/40 text-[10px] tracking-[0.15em] uppercase">
          SSP/SUBCOP/DGSP/033-25/530
        </span>
      </motion.div>
    </section>
  );
}
