import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, Hotel, UtensilsCrossed, HeartPulse, GraduationCap, Factory, Landmark, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

const industries = [
  { icon: Home, name: "Residential", desc: "Pure, safe water for homes and villas across Abu Dhabi.", color: "from-blue-500 to-cyan-400" },
  { icon: Building2, name: "Commercial", desc: "Scalable solutions for offices, malls, and commercial buildings.", color: "from-blue-600 to-blue-400" },
  { icon: Hotel, name: "Hotels & Resorts", desc: "Premium water quality for luxury hospitality experiences.", color: "from-cyan-500 to-teal-400" },
  { icon: UtensilsCrossed, name: "Restaurants & Cafes", desc: "F&B-grade water treatment for kitchen and beverage operations.", color: "from-blue-500 to-indigo-400" },
  { icon: HeartPulse, name: "Healthcare", desc: "Ultra-pure water systems for hospitals and medical facilities.", color: "from-teal-500 to-cyan-400" },
  { icon: GraduationCap, name: "Education", desc: "Safe drinking water solutions for schools and universities.", color: "from-indigo-500 to-blue-400" },
  { icon: Factory, name: "Manufacturing", desc: "Industrial-grade water treatment for production facilities.", color: "from-slate-600 to-blue-500" },
  { icon: Landmark, name: "Government", desc: "Large-scale projects for government and public infrastructure.", color: "from-blue-700 to-blue-500" },
];

export default function IndustriesPreview() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-24 lg:py-32 bg-[#F0F9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Industries We Serve"
          title="Sector-Specific Water Solutions"
          description="Tailored water treatment expertise across every major industry in the UAE."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                to="/industries"
                className="group block relative p-6 lg:p-8 rounded-2xl bg-white border border-[#E2E8F0]/50 hover:border-[#0077FF]/20 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 h-full"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077FF]/10 to-[#00AAFF]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <ind.icon className="w-6 h-6 text-[#0077FF]" />
                  </div>
                  <h3 className="text-base font-display font-semibold text-[#0A192F] mb-2">{ind.name}</h3>
                  <p className="text-xs font-body text-[#0A192F]/50 leading-relaxed hidden lg:block">{ind.desc}</p>
                </div>
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
          <Link to="/industries">
            <Button variant="outline" className="border-[#0A192F]/20 text-[#0A192F] hover:bg-[#0A192F] hover:text-white font-body font-semibold px-8 py-3 rounded-full group">
              Explore All Industries
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}