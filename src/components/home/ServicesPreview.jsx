import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, Waves, Shield, Building2, Factory, FlaskConical, Wrench, TestTube2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";

const services = [
  { icon: Droplets, title: "Water Filtration", desc: "Advanced multi-stage filtration systems for crystal-clear water quality." },
  { icon: Waves, title: "Reverse Osmosis", desc: "High-efficiency RO systems removing up to 99.9% of contaminants." },
  { icon: Shield, title: "Water Softeners", desc: "Ion-exchange softening technology for scale-free water supply." },
  { icon: Building2, title: "Commercial Treatment", desc: "Tailored solutions for offices, malls, and commercial complexes." },
  { icon: Factory, title: "Industrial Treatment", desc: "Heavy-duty systems for manufacturing and process water needs." },
  { icon: FlaskConical, title: "Water Purification", desc: "Complete purification solutions meeting international standards." },
  { icon: Wrench, title: "Maintenance & AMC", desc: "Scheduled maintenance and annual contracts for peak performance." },
  { icon: TestTube2, title: "Water Quality Testing", desc: "Comprehensive water analysis and quality assessment services." },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0077FF]/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Our Solutions"
          title="Comprehensive Water Treatment Services"
          description="From residential filtration to industrial-scale treatment plants, we deliver precision-engineered solutions tailored to your needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Link
                to="/services"
                className="group block p-7 rounded-2xl bg-[#F0F9FF] hover:bg-white border border-transparent hover:border-[#E2E8F0] hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0077FF]/10 flex items-center justify-center mb-5 group-hover:bg-[#0077FF] group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-[#0077FF] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-display font-semibold text-[#0A192F] mb-2">{service.title}</h3>
                <p className="text-sm font-body text-[#0A192F]/50 leading-relaxed">{service.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button className="bg-[#0A192F] hover:bg-[#0A192F]/90 text-white font-body font-semibold px-8 py-3 rounded-full group">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}