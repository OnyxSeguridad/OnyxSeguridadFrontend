"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaSearchPlus,
  FaIdCard,
  FaVideo,
  FaSatelliteDish,
  FaTruck,
  FaBroadcastTower,
  FaFingerprint,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const servicios = [
  {
    icon: FaShieldAlt,
    title: "Vigilante de Seguridad",
    desc: "Personal altamente capacitado con uniformidad homologada y equipamiento completo para su protección.",
  },
  {
    icon: FaTruck,
    title: "Custodia de Bienes",
    desc: "Protección y resguardo profesional de sus activos durante traslados y en ubicaciones fijas.",
  },
  {
    icon: FaSearchPlus,
    title: "Análisis de Riesgos",
    desc: "Evaluación integral de vulnerabilidades con soluciones personalizadas de seguridad.",
  },
  {
    icon: FaSatelliteDish,
    title: "Servicios de Monitoreo",
    desc: "Vigilancia constante con tecnología de última generación y respuesta inmediata ante incidencias.",
  },
  {
    icon: FaIdCard,
    title: "Acceso e Identificación",
    desc: "Sistemas de control de acceso para gestionar entradas y salidas de manera eficiente y segura.",
  },
  {
    icon: FaVideo,
    title: "Sistemas Electrónicos",
    desc: "Integración de sistemas electrónicos de seguridad adaptados a las necesidades de cada cliente.",
  },
  {
    icon: FaBroadcastTower,
    title: "Monitoreo por Radiofrecuencia",
    desc: "Comunicación segura y monitoreo continuo mediante sistemas de radiofrecuencia dedicados.",
  },
  {
    icon: FaFingerprint,
    title: "Alarma y Biométricos",
    desc: "Alarma sonora integrada con biométricos de asistencia para un control total del personal.",
  },
];

export default function ServiciosSection() {
  return (
    <section
      id="servicios"
      className="py-20 md:py-28 bg-onyx-dark relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Portafolio"
          title="Nuestros Servicios"
          subtitle="Ofrecemos un ecosistema integral de seguridad adaptado a las necesidades de cada cliente, desde vigilancia física hasta tecnología de punta."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group bg-onyx-card border border-onyx-border rounded-2xl p-6 hover:border-onyx-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-onyx-gold/5"
            >
              <s.icon className="text-onyx-gold text-3xl mb-5" />
              <h3 className="text-lg font-semibold text-onyx-text mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-onyx-text-muted leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Servicios adicionales note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-onyx-text-muted text-sm">
            Los dos últimos son{" "}
            <span className="text-onyx-gold font-medium">Servicios Adicionales</span>{" "}
            que complementan nuestra oferta integral de seguridad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
