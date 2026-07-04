import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award, Leaf, ShieldCheck, Users, Zap, Globe } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import StatsCounter from "@/components/shared/StatsCounter";

const values = [
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every system is tested to exceed international water quality standards before deployment." },
  { icon: Leaf, title: "Sustainability", desc: "Water-efficient designs that minimize waste and support the UAE's sustainability vision." },
  { icon: Users, title: "Client Partnership", desc: "We build long-term relationships through dedicated support and transparent communication." },
  { icon: Zap, title: "Innovation", desc: "Continuously adopting cutting-edge filtration and purification technologies." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A192F] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0077FF]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-[0.25em] text-[#0077FF] mb-4">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Pioneering Water Excellence Since 2008
            </h1>
            <p className="text-lg font-body text-white/60 leading-relaxed">
              Filtronix Water Solutions LLC is Abu Dhabi's trusted partner in water treatment engineering, delivering precision-built systems that protect health, enhance operations, and conserve resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/abb4a7452_generated_a6c7be56.png"
                alt="Water purification membrane technology close-up"
                className="rounded-3xl shadow-2xl shadow-blue-500/10 w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0077FF]/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#0077FF]" />
                  </div>
                  <h3 className="text-sm font-display font-semibold uppercase tracking-widest text-[#0077FF]">Our Mission</h3>
                </div>
                <p className="text-lg font-body text-[#0A192F]/70 leading-relaxed">
                  To deliver world-class water treatment solutions that ensure safe, clean, and sustainable water for every community, business, and facility in the UAE — through engineering excellence, innovation, and unwavering commitment to quality.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0077FF]/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#0077FF]" />
                  </div>
                  <h3 className="text-sm font-display font-semibold uppercase tracking-widest text-[#0077FF]">Our Vision</h3>
                </div>
                <p className="text-lg font-body text-[#0A192F]/70 leading-relaxed">
                  To be the Gulf region's most trusted name in water treatment technology — setting the standard for purity, reliability, and environmental responsibility across every sector we serve.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Values */}
      <section className="py-24 lg:py-32 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What Drives Filtronix"
            description="Core principles that guide every project, partnership, and innovation we pursue."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-[#E2E8F0]/50 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/5">
                  <v.icon className="w-7 h-7 text-[#0077FF]" />
                </div>
                <h3 className="text-lg font-display font-semibold text-[#0A192F] mb-2">{v.title}</h3>
                <p className="text-sm font-body text-[#0A192F]/50 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="The Filtronix Advantage"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Certified Excellence", desc: "ISO 9001:2015 certified with full Abu Dhabi Municipality approvals and compliance with UAE drinking water standards." },
              { icon: Globe, title: "Regional Expertise", desc: "Deep understanding of the UAE's unique water challenges, from high TDS levels to extreme temperatures and arid conditions." },
              { icon: Zap, title: "End-to-End Solutions", desc: "From initial water analysis and system design to installation, commissioning, training, and ongoing maintenance support." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-[#F0F9FF] border border-[#E2E8F0]/50"
              >
                <item.icon className="w-8 h-8 text-[#0077FF] mb-4" />
                <h3 className="text-xl font-display font-semibold text-[#0A192F] mb-3">{item.title}</h3>
                <p className="text-sm font-body text-[#0A192F]/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}