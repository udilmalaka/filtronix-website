import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, Waves, Shield, Building2, Factory, FlaskConical, Wrench, TestTube2, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";

const services = [
  {
    icon: Droplets,
    title: "Water Filtration Systems",
    desc: "Multi-stage filtration systems designed to remove sediment, chlorine, bacteria, and other impurities from your water supply.",
    features: ["Sediment & carbon filtration", "UV sterilization systems", "Whole-house filtration", "Custom flow-rate design"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/c3546fcb6_generated_0d1c5d64.png"
  },
  {
    icon: Waves,
    title: "Reverse Osmosis (RO) Systems",
    desc: "High-performance RO membranes that remove up to 99.9% of dissolved solids, heavy metals, and contaminants.",
    features: ["Residential & commercial RO", "High-recovery industrial RO", "Energy-efficient designs", "TDS monitoring systems"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/9f33754b7_generated_1ad6ca38.png"
  },
  {
    icon: Shield,
    title: "Water Softeners",
    desc: "Ion-exchange softening technology that eliminates scale buildup, protecting your plumbing, appliances, and equipment.",
    features: ["Automatic regeneration", "Salt & salt-free options", "Multi-valve configurations", "Scale prevention systems"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/dfabb3168_generated_42ba559b.png"
  },
  {
    icon: Building2,
    title: "Commercial Water Treatment",
    desc: "Tailored water solutions for offices, retail spaces, restaurants, hotels, and commercial complexes.",
    features: ["Centralized treatment plants", "Point-of-use dispensers", "Boiler feed water systems", "Cooling tower treatment"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/82fe96be2_generated_748e4d9f.png"
  },
  {
    icon: Factory,
    title: "Industrial Water Treatment",
    desc: "Heavy-duty systems for manufacturing, process water, wastewater recycling, and industrial applications.",
    features: ["Process water systems", "Wastewater recycling", "Deionization (DI) systems", "Chemical dosing systems"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/2e1ce8eda_generated_1c08cf17.png"
  },
  {
    icon: FlaskConical,
    title: "Water Purification Solutions",
    desc: "Complete purification systems meeting WHO and UAE drinking water standards for safe, clean water.",
    features: ["Multi-barrier purification", "Ultrafiltration (UF)", "Ozone treatment", "Mineral enrichment"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/abb4a7452_generated_a6c7be56.png"
  },
  {
    icon: Wrench,
    title: "Maintenance & AMC Services",
    desc: "Comprehensive annual maintenance contracts ensuring your systems operate at peak performance year-round.",
    features: ["Scheduled maintenance", "Emergency repairs 24/7", "Filter replacement programs", "Performance audits"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/76a7504ad_generated_2357b4fc.png"
  },
  {
    icon: TestTube2,
    title: "Water Quality Testing",
    desc: "Comprehensive water analysis and quality assessment using certified laboratory testing protocols.",
    features: ["TDS & pH analysis", "Bacterial testing", "Heavy metal screening", "Compliance reporting"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/dfabb3168_generated_42ba559b.png"
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A192F] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0077FF]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-[0.25em] text-[#0077FF] mb-4">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Precision Water Engineering
            </h1>
            <p className="text-lg font-body text-white/60 leading-relaxed">
              From residential filtration to industrial-scale treatment plants, every Filtronix system is custom-designed and built to exceed international standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0077FF]/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-[#0077FF]" />
                    </div>
                    <span className="text-xs font-display font-semibold uppercase tracking-widest text-[#0077FF]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A192F] mb-4">{service.title}</h2>
                  <p className="text-base font-body text-[#0A192F]/60 leading-relaxed mb-8">{service.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm font-body text-[#0A192F]/70">
                        <CheckCircle className="w-4 h-4 text-[#0077FF] shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="bg-[#0077FF] hover:bg-[#0066DD] text-white font-body font-semibold px-6 py-3 rounded-full group">
                      Request Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-xl shadow-blue-500/10 w-full object-cover aspect-[4/3]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC CTA */}
      <section className="py-20 bg-[#0A192F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Wrench className="w-12 h-12 text-[#0077FF] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Annual Maintenance Contracts
            </h2>
            <p className="text-lg font-body text-white/60 mb-8 max-w-2xl mx-auto">
              Protect your investment with scheduled maintenance, priority support, and guaranteed uptime. AMC plans start from AED 1,500/year.
            </p>
            <Link to="/contact">
              <Button className="bg-[#0077FF] hover:bg-[#0066DD] text-white font-body font-semibold px-8 py-3 rounded-full">
                Get AMC Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}