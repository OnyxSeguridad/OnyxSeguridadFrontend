"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaBroadcastTower,
  FaEye,
  FaMedkit,
  FaHandPaper,
  FaWalking,
  FaSprayCan,
} from "react-icons/fa";
import { GiHandcuffs } from "react-icons/gi";
import SectionTitle from "./SectionTitle";

const uniforme = [
  "Placa identificativa",
  "Tonfa o bastón PR24",
  "Esposas",
  "Radio de comunicación",
  "Gas pimienta",
  "Chaleco táctico",
];

const equipamiento = [
  { icon: FaWalking, label: "Control de rondas" },
  { icon: FaHandPaper, label: "Bastón retráctil" },
  { icon: FaBroadcastTower, label: "Chícharo de comunicación" },
  { icon: FaSprayCan, label: "Gas pimienta" },
  { icon: FaShieldAlt, label: "Gorra y señalización" },
  { icon: FaMedkit, label: "Primeros auxilios" },
  { icon: FaEye, label: "Visión largo alcance" },
  { icon: GiHandcuffs, label: "Esposas tácticas" },
];

export default function VigilanteSection() {
  return (
    <section id="vigilante" className="py-20 md:py-28 bg-onyx-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Vigilante de Seguridad"
          subtitle="El componente más importante de nuestros servicios. ONYX presta la mayor atención al factor humano, proporcionando a sus vigilantes los medios necesarios para afrontar su labor con la máxima seguridad."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with overlaid badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto glow-gold">
              <Image
                src="/images/PHOTO-2026-04-06-18-50-19 (1).jpg"
                alt="Vigilantes de seguridad ONYX con uniforme homologado completo"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-black/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 sm:right-4 glass rounded-xl p-4 max-w-[200px]"
            >
              <div className="text-onyx-gold font-bold text-lg">Uniforme Homologado</div>
              <div className="text-onyx-text-muted text-xs mt-1">
                Distintivos corporativos y equipamiento completo
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Uniform list */}
            <h3 className="text-xl font-semibold text-onyx-gold mb-4">
              Uniforme Homologado
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {uniforme.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-onyx-text-muted"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-onyx-gold flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* Equipment grid */}
            <h3 className="text-xl font-semibold text-onyx-gold mb-4">
              Equipamiento Especial
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {equipamiento.map((eq, i) => (
                <motion.div
                  key={eq.label}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-2 bg-onyx-card border border-onyx-border rounded-xl px-3 py-2.5 hover:border-onyx-gold/30 transition-colors"
                >
                  <eq.icon className="text-onyx-gold text-sm flex-shrink-0" />
                  <span className="text-xs text-onyx-text-muted leading-tight">
                    {eq.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/522211476154?text=Hola%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20vigilantes%20de%20seguridad."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-onyx-gold/10 border border-onyx-gold/30 text-onyx-gold rounded-full text-sm font-medium hover:bg-onyx-gold/20 transition-colors"
              >
                Más información por WhatsApp →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
