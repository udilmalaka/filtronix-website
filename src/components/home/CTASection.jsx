import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F0F9FF] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0077FF]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-[0.25em] text-[#0077FF] mb-4">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0A192F] leading-tight mb-6">
              Ready to Transform Your Water Quality?
            </h2>
            <p className="text-lg font-body text-[#0A192F]/60 leading-relaxed mb-8">
              Our engineering team will assess your requirements and design a custom solution that meets your exact specifications. Free consultation for all inquiries.
            </p>
            <div className="space-y-4 text-sm font-body text-[#0A192F]/60">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0077FF]" />
                Free site assessment & water quality analysis
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0077FF]" />
                Custom-engineered solutions within 48 hours
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0077FF]" />
                Full installation, training & after-sales support
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-blue-500/5 border border-[#E2E8F0]/50"
          >
            <h3 className="text-xl font-display font-bold text-[#0A192F] mb-6">Request a Consultation</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
