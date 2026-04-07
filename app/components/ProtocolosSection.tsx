"use client";

import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaExclamationTriangle,
  FaGavel,
  FaHandshake,
  FaClipboardCheck,
  FaUserTie,
  FaClock,
  FaTshirt,
  FaCogs,
  FaChartBar,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const protocolosPilares = [
  {
    icon: FaExclamationTriangle,
    title: "Valoración de Riesgos",
    desc: "Evaluación exhaustiva de riesgos y vulnerabilidades existentes en cada instalación.",
  },
  {
    icon: FaGavel,
    title: "Órdenes de Puesto",
    desc: "Pautas claras de actuación e intervención ante un probable delito o incidencia.",
  },
  {
    icon: FaHandshake,
    title: "Convenios con Autoridades",
    desc: "Comunicación y coordinación directa con autoridades locales para respuesta efectiva.",
  },
];

const supervisiones = [
  { icon: FaTshirt, label: "Uniformidad y equipamiento" },
  { icon: FaClock, label: "Horarios establecidos" },
  { icon: FaClipboardCheck, label: "Protocolos de actuación" },
  { icon: FaCogs, label: "Medios técnicos" },
];

const serviciosVigilancia = [
  "Análisis de riesgos y detección de vulnerabilidades con soluciones integrales",
  "Presentación de informes mensuales y estadísticas sobre incidentes",
  "Intervención del equipo de seguridad ante una catástrofe",
  "Simulacros periódicos de incendios, catástrofes o atentados",
  "Información al cliente de las normas internas de seguridad",
];

export default function ProtocolosSection() {
  return (
    <section
      id="protocolos"
      className="py-20 md:py-28 bg-onyx-dark relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Manual Operativo y Protocolos"
          subtitle="Redactamos un manual operativo y protocolos de actuación tras un estudio exhaustivo de cada servicio, coordinando todas las medidas de seguridad."
        />

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {protocolosPilares.map((pilar, i) => (
            <motion.div
              key={pilar.title}
              initial={{ opacity: 0, x: i === 0 ? -30 : i === 2 ? 30 : 0, y: i === 1 ? 20 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-onyx-card border border-onyx-border rounded-2xl p-6 text-center hover:border-onyx-gold/30 transition-all duration-300 group"
            >
              <pilar.icon className="text-onyx-gold text-3xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-onyx-text mb-2">
                {pilar.title}
              </h3>
              <p className="text-sm text-onyx-text-muted leading-relaxed">
                {pilar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Supervisiones e Inspecciones */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-onyx-card border border-onyx-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaUserTie className="text-onyx-gold text-2xl" />
              <h3 className="text-xl font-semibold text-onyx-text">
                Supervisiones e Inspecciones Digitalizadas
              </h3>
            </div>
            <p className="text-sm text-onyx-text-muted leading-relaxed mb-6">
              Inspector de servicios asignado que coordina un programa de
              supervisión para asegurar el cumplimiento de protocolos y el buen
              funcionamiento. Como cliente, recibirá un informe detallado de
              inspecciones realizadas y resultados.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {supervisiones.map((sup) => (
                <div
                  key={sup.label}
                  className="flex items-center gap-2 text-sm text-onyx-text-muted bg-onyx-black/40 rounded-lg px-3 py-2"
                >
                  <sup.icon className="text-onyx-gold text-sm flex-shrink-0" />
                  {sup.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Servicios de Vigilancia */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-onyx-card border border-onyx-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaChartBar className="text-onyx-gold text-2xl" />
              <h3 className="text-xl font-semibold text-onyx-text">
                Servicios de Vigilancia Integral
              </h3>
            </div>
            <div className="space-y-4">
              {serviciosVigilancia.map((svc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-onyx-gold/60 font-bold text-xs mt-0.5 flex-shrink-0 w-5 text-right">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm text-onyx-text-muted leading-relaxed">
                    {svc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
