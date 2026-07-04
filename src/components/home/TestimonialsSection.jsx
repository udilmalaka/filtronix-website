import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    name: "Ahmed Al Mansoori",
    role: "Facilities Director, Abu Dhabi Mall",
    text: "Filtronix transformed our building's water quality. Their commercial RO system reduced our maintenance costs by 40% and ensured consistent water quality across all 200+ units.",
    stars: 5,
  },
  {
    name: "Sarah Chen",
    role: "Operations Manager, Marriott Abu Dhabi",
    text: "The hospitality-grade filtration system exceeded our expectations. Guests have noticed the difference, and our kitchen team reports improved equipment longevity.",
    stars: 5,
  },
  {
    name: "Dr. Khalid Rahman",
    role: "Chief Engineer, Al Noor Hospital",
    text: "For healthcare, water purity is non-negotiable. Filtronix delivered a system that consistently meets our stringent medical-grade requirements with 24/7 monitoring.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Client Testimonials"
          title="Trusted by Industry Leaders"
          description="Hear from the organizations that rely on Filtronix for their critical water infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl bg-[#F0F9FF] border border-[#E2E8F0]/50 hover:border-[#0077FF]/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 h-full flex flex-col">
                <Quote className="w-8 h-8 text-[#0077FF]/20 mb-4" />
                <p className="text-[#0A192F]/70 font-body text-sm leading-relaxed flex-1 mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#0077FF] text-[#0077FF]" />
                  ))}
                </div>
                <div>
                  <p className="font-display font-semibold text-[#0A192F] text-sm">{t.name}</p>
                  <p className="text-xs font-body text-[#0A192F]/40 mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}