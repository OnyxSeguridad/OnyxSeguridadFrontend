"use client";

import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaCertificate,
  FaCheckCircle,
  FaIdBadge,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const requisitos = [
  "Examen psicométrico y médico",
  "Estudio socioeconómico",
  "Examen de control y confianza",
  "Estudio laboral",
  "Carta de no antecedentes penales",
  "Exámenes antidoping aleatorios y sistemáticos",
];

export default function ReclutamientoSection() {
  return (
    <section
      id="reclutamiento"
      className="py-20 md:py-28 bg-onyx-black relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Estándares ISO"
          title="Reclutamiento y Selección"
          subtitle="Nuestra área de selección está conformada por profesionales especializados en sistemas de gestión de calidad, con los procesos más exhaustivos bajo estándares ISO 9001-2008."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-onyx-gold/15 flex items-center justify-center flex-shrink-0">
                <FaCertificate className="text-onyx-gold text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-onyx-gold mb-1">
                  ISO 9001-2008
                </h3>
                <p className="text-sm text-onyx-text-muted leading-relaxed">
                  Procesos exhaustivos de reclutamiento y selección bajo los
                  más altos estándares internacionales de gestión de calidad.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-onyx-gold/15 flex items-center justify-center flex-shrink-0">
                <FaIdBadge className="text-onyx-gold text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-onyx-gold mb-1">
                  C.U.I.P.
                </h3>
                <p className="text-sm text-onyx-text-muted leading-relaxed">
                  Todos nuestros elementos están registrados ante la Secretaría
                  de Seguridad Pública del Estado de Puebla, quien les expide
                  la Cédula Única de Identificación Policial.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-onyx-gold/15 flex items-center justify-center flex-shrink-0">
                <FaUserCheck className="text-onyx-gold text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-onyx-gold mb-1">
                  Registro SSP
                </h3>
                <p className="text-sm text-onyx-text-muted leading-relaxed">
                  Autorización oficial SSP/SUBCOP/DGSP/033-25/530 que avala
                  nuestras operaciones de seguridad en el estado.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-onyx-card border border-onyx-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-onyx-text mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-onyx-gold" />
                Pruebas y Requisitos
              </h3>
              <div className="space-y-4">
                {requisitos.map((req, i) => (
                  <motion.div
                    key={req}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-onyx-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-onyx-gold/20 transition-colors">
                      <span className="text-onyx-gold font-bold text-sm">
                        {i + 1}
                      </span>
                    </div>
                    <span className="text-onyx-text-muted text-sm group-hover:text-onyx-text transition-colors">
                      {req}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://wa.me/522211476154?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20su%20proceso%20de%20reclutamiento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-onyx-gold/10 border border-onyx-gold/30 text-onyx-gold rounded-full text-sm font-medium hover:bg-onyx-gold/20 transition-colors"
              >
                Solicitar información por WhatsApp →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
