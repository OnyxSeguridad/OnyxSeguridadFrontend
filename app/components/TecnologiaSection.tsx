"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaHelicopter,
  FaCamera,
  FaBell,
  FaCalendarAlt,
  FaHeadset,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const tecnologias = [
  {
    icon: FaMapMarkerAlt,
    title: "Geolocalización Permanente",
    desc: "Sistema de última generación de control de rondas con posicionamiento en tiempo real.",
  },
  {
    icon: FaHelicopter,
    title: "Vigilancia con Drones",
    desc: "Vigilancia aérea y control de rondas mediante drones equipados con cámaras de alta resolución.",
  },
  {
    icon: FaCamera,
    title: "Fotografía Geolocalizada",
    desc: "Fotografías geolocalizadas insertadas en informes de incidencias para análisis y verificación.",
  },
  {
    icon: FaBell,
    title: "Alerta de Emergencia",
    desc: "Alerta de incidencia con reporte inmediato a Jefatura de Seguridad e instrucciones de intervención.",
  },
  {
    icon: FaCalendarAlt,
    title: "Registro Fecha y Hora",
    desc: "Registro detallado de cada ronda, incidencia e intervención realizada para su posterior revisión.",
  },
  {
    icon: FaHeadset,
    title: "Asistencia Exclusiva",
    desc: "Número de teléfono asignado al servicio con asistencia personalizada e intervención inmediata.",
  },
];

const clientesConLogo = [
  { name: "FEMSA", src: "/images/clients/FEMSA_Logo.svg", darkBg: false },
  { name: "Fratta", src: "/images/clients/Fratta.png", darkBg: false },
  { name: "Loxitec", src: "/images/clients/loxitec.gif", darkBg: false },
  { name: "Brecasa", src: "/images/clients/brecasa.png", darkBg: true },
  { name: "Lomas de Angelópolis", src: "/images/clients/lomasdeangelopolis.png", darkBg: false },
  { name: "Cinuk", src: "/images/clients/cinuk.png.webp", darkBg: false },
  { name: "Indasa", src: "/images/clients/indasa.jpg", darkBg: false },
  { name: "Tresguerras", src: "/images/clients/tresguerras.webp", darkBg: false },
  { name: "Bimbo", src: "/images/clients/Logo_Grupo_BIMBO.svg.png", darkBg: false },
];


export default function TecnologiaSection() {
  return (
    <section id="tecnologia" className="py-20 md:py-28 bg-onyx-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nuestra Tecnología"
          subtitle="Implementamos sistemas de última generación para garantizar la seguridad de nuestros clientes con geolocalización, drones y monitoreo en tiempo real."
        />

        {/* Tech grid with image */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden aspect-square glow-gold"
          >
            <Image
              src="/images/tecnologia.png"
              alt="Dashboard de tecnología de seguridad ONYX con geolocalización y drones"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-black/50 to-transparent" />
          </motion.div>

          {/* Tech cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {tecnologias.map((tech, i) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-3 bg-onyx-card border border-onyx-border rounded-xl p-4 hover:border-onyx-gold/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-onyx-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-onyx-gold/20 transition-colors">
                  <tech.icon className="text-onyx-gold text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-onyx-text mb-1">
                    {tech.title}
                  </h3>
                  <p className="text-xs text-onyx-text-muted leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="section-divider mb-20" />

        {/* Experiencias de Trabajo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-onyx-text mb-4">
            Clientes que Confían en ONYX
          </h2>
        </motion.div>

        {/* Client logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {clientesConLogo.map((cliente, i) => (
            <motion.div
              key={cliente.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group rounded-2xl p-5 flex items-center justify-center h-24 border border-onyx-border hover:border-onyx-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-onyx-gold/10 ${cliente.darkBg ? "bg-onyx-card" : "bg-white"}`}
            >
              <Image
                src={cliente.src}
                alt={`Logo de ${cliente.name}`}
                width={140}
                height={60}
                className="object-contain max-h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
              />
            </motion.div>
          ))}
          {/* Phimsa — solo texto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: clientesConLogo.length * 0.06 }}
            className="bg-onyx-card rounded-2xl p-5 flex items-center justify-center h-24 border border-onyx-border hover:border-onyx-gold/40 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="text-onyx-text-muted font-semibold text-sm text-center leading-tight hover:text-onyx-gold transition-colors">
              Comercializadora<br />Phimsa
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
