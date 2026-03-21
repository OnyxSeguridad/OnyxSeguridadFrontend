"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#vigilante", label: "Vigilantes" },
  { href: "#capacitacion", label: "Capacitación" },
  { href: "#reclutamiento", label: "Reclutamiento" },
  { href: "#protocolos", label: "Protocolos" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-onyx-black/95 backdrop-blur-md border-b border-onyx-gold/20 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <Image 
              src="/images/LogoOnyx.svg" 
              alt="Logo ONYX Seguridad" 
              width={60} 
              height={60} 
              className="object-contain transition-transform group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="text-onyx-gold font-bold text-lg leading-tight tracking-wide">
                ONYX
              </span>
              <span className="text-onyx-text-muted text-[10px] uppercase tracking-[0.2em] leading-tight">
                Seguridad
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-onyx-text-muted hover:text-onyx-gold transition-colors duration-200 rounded-lg hover:bg-onyx-gold/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/522211476154?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20seguridad."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 bg-onyx-gold text-onyx-black font-semibold text-sm rounded-full hover:bg-onyx-gold-light transition-all duration-200 hover:shadow-lg hover:shadow-onyx-gold/20"
            >
              Cotizar Ahora
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-onyx-gold hover:bg-onyx-gold/10 rounded-lg transition-colors"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-onyx-black/98 backdrop-blur-xl fixed inset-0 top-20 z-40 flex flex-col items-center justify-start pt-12 gap-2 overflow-y-auto"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-xl text-onyx-text-muted hover:text-onyx-gold transition-colors py-3 px-6 w-full text-center"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/522211476154?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20seguridad."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="mt-4 px-8 py-3 bg-onyx-gold text-onyx-black font-semibold rounded-full text-lg"
            >
              Cotizar Ahora
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
