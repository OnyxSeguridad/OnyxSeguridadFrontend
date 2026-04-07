"use client";

import { motion } from "framer-motion";
import { FaExclamationTriangle, FaFire, FaChartBar, FaSearchPlus } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const altoImpacto = [
  {
    icon: FaExclamationTriangle,
    title: "Intervención Inmediata",
    desc: "Respuesta táctica del equipo de seguridad ante cualquier eventualidad grave o catástrofe.",
  },
  {
    icon: FaFire,
    title: "Simulacros Periódicos",
    desc: "Coordinación y ejecución de simulacros contra incendios, catástrofes naturales o atentados.",
  },
  {
    icon: FaChartBar,
    title: "Informes Mensuales",
    desc: "Presentación de reportes detallados y estadísticas sobre incidentes para toma de decisiones.",
  },
  {
    icon: FaSearchPlus,
    title: "Análisis de Riesgos",
    desc: "Evaluación continua y detección de vulnerabilidades para aportar soluciones preventivas e integrales.",
  },
];

export default function AltoImpactoSection() {
  return (
    <section id="alto-impacto" className="py-20 md:py-28 bg-onyx-dark relative overflow-hidden">
      {/* Red/Gold subtle glow for urgency/importance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-red-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Gestión de Crisis"
          title="Asuntos de Alto Impacto"
          subtitle="Manejo profesional y estratégico ante emergencias graves. Nuestra capacidad de respuesta está diseñada para proteger sus activos más críticos bajo cualquier circunstancia."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {altoImpacto.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-onyx-card border border-red-900/20 hover:border-red-500/40 rounded-2xl p-6 transition-all duration-300 group"
            >
              <item.icon className="text-red-500/90 text-3xl mb-6 group-hover:text-red-400 transition-colors" />
              <h3 className="text-xl font-bold text-onyx-text mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-onyx-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
