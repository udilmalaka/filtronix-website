import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description, light = false, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''} mb-16`}
    >
      {label && (
        <span className="inline-block text-xs font-display font-semibold uppercase tracking-[0.25em] text-[#0077FF] mb-4">
          {label}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 ${light ? 'text-white' : 'text-[#0A192F]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg font-body leading-relaxed ${light ? 'text-white/60' : 'text-[#0A192F]/60'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}