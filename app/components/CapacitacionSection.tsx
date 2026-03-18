"use client";

import { motion } from "framer-motion";
import {
  FaClock,
  FaGraduationCap,
  FaMedkit,
  FaComments,
  FaShieldAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const capacidades = [
  {
    icon: FaGraduationCap,
    title: "Capacitación Continua",
    desc: "Talleres adaptados a las necesidades de cada cliente para mejorar habilidades, aptitudes y conocimientos.",
  },
  {
    icon: FaMedkit,
    title: "Primeros Auxilios",
    desc: "Cursos certificados de primeros auxilios y protocolos de emergencia para todo el personal.",
  },
  {
    icon: FaShieldAlt,
    title: "Equipo de Defensa",
    desc: "Equipamiento completo de defensa y medios de comunicación efectiva asignados a cada elemento.",
  },
  {
    icon: FaComments,
    title: "Valores Profesionales",
    desc: "Respuesta garantizada con disciplina, honestidad y ética profesional en cada servicio.",
  },
];

const turnos = [
  { label: "12 × 12", desc: "Turnos balanceados", icon: FaClock },
  { label: "24 × 24", desc: "Cobertura extendida", icon: FaClock },
  { label: "Diurno", desc: "Horario de día", icon: FaSun },
  { label: "Nocturno", desc: "Horario nocturno", icon: FaMoon },
];

export default function CapacitacionSection() {
  return (
    <section
      id="capacitacion"
      className="py-20 md:py-28 bg-onyx-dark relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Excelencia"
          title="Capacitación y Turnos"
          subtitle="Contamos con un equipo de trabajo calificado y productivo, con capacitación continua adaptada a las necesidades de cada cliente."
        />

        {/* Capabilities */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {capacidades.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 bg-onyx-card border border-onyx-border rounded-2xl p-6 hover:border-onyx-gold/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-onyx-gold/10 flex items-center justify-center flex-shrink-0">
                <cap.icon className="text-onyx-gold text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-onyx-text mb-1">
                  {cap.title}
                </h3>
                <p className="text-sm text-onyx-text-muted leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Turnos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-onyx-text mb-8">
            Turnos Disponibles
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {turnos.map((turno, i) => (
              <motion.div
                key={turno.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-onyx-card border border-onyx-border rounded-xl p-5 hover:border-onyx-gold/30 transition-colors"
              >
                <turno.icon className="text-onyx-gold text-2xl mx-auto mb-2" />
                <div className="text-xl font-bold text-onyx-gold">
                  {turno.label}
                </div>
                <div className="text-xs text-onyx-text-muted mt-1">
                  {turno.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
