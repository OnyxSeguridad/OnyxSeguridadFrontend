"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaUserTie } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const representantes = [
  {
    name: "Nombre Representante 1",
    role: "Ejecutivo de Cuenta",
    phone: "222 XXX XXXX",
    whatsappLink: "https://wa.me/52222XXXXXXX",
    image: "/images/placeholder-avatar.jpg",
  },
  {
    name: "Nombre Representante 2",
    role: "Ejecutivo de Ventas",
    phone: "222 XXX XXXX",
    whatsappLink: "https://wa.me/52222XXXXXXX",
    image: "/images/placeholder-avatar.jpg",
  },
  {
    name: "Nombre Representante 3",
    role: "Gerente Comercial",
    phone: "222 XXX XXXX",
    whatsappLink: "https://wa.me/52222XXXXXXX",
    image: "/images/placeholder-avatar.jpg",
  },
];

export default function RepresentantesSection() {
  return (
    <section id="representantes" className="py-20 md:py-28 bg-onyx-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Atención Personalizada"
          title="Nuestros Representantes"
          subtitle="Contáctese directamente con nuestros ejecutivos especializados para recibir una propuesta a la medida de sus necesidades de seguridad."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {representantes.map((rep, i) => (
            <motion.div
              key={rep.name + i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-onyx-card border border-onyx-border rounded-2xl overflow-hidden hover:border-onyx-gold/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-onyx-gold/5 flex flex-col"
            >
              {/* Photo Placeholder Area */}
              <div className="aspect-[4/3] bg-onyx-dark relative flex items-center justify-center border-b border-onyx-border/50">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--color-onyx-gold)_0,transparent_100%)]" />
                <FaUserTie className="text-6xl text-onyx-text-muted/30 z-10" />
                {/* 
                  When photos are available, replace the code above inside the div with:
                  <Image src={rep.image} alt={rep.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all" /> 
                */}
              </div>

              {/* Info Area */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-onyx-text mb-1">{rep.name}</h3>
                <p className="text-sm font-medium text-onyx-gold mb-6">{rep.role}</p>

                <div className="mt-auto space-y-3">
                  <a
                    href={rep.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-onyx-whatsapp/10 text-onyx-whatsapp hover:bg-onyx-whatsapp hover:text-white rounded-xl text-sm font-semibold transition-colors"
                  >
                    <FaWhatsapp className="text-lg" />
                    Enviar WhatsApp
                  </a>
                  <a
                    href={`tel:${rep.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-onyx-dark border border-onyx-border hover:border-onyx-gold/50 text-onyx-text-muted hover:text-onyx-text rounded-xl text-sm transition-colors"
                  >
                    <FaPhone />
                    {rep.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
