"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-onyx-gold border border-onyx-gold/30 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-onyx-text leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-onyx-text-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
