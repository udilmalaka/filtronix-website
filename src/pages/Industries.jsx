import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Building2, Hotel, UtensilsCrossed, HeartPulse, GraduationCap, Factory, Landmark, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";

const industries = [
  {
    icon: Home,
    name: "Residential",
    tagline: "Pure water for every home",
    desc: "Whole-house filtration, under-sink RO systems, and water softeners designed for villas and apartments across Abu Dhabi. Protect your family with water that exceeds drinking standards.",
    solutions: ["Under-sink RO systems", "Whole-house filtration", "Water softeners", "Kitchen purifiers"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/c3546fcb6_generated_0d1c5d64.png"
  },
  {
    icon: Building2,
    name: "Commercial Buildings",
    tagline: "Scalable water infrastructure",
    desc: "Centralized treatment plants for office towers, retail complexes, and mixed-use developments. Engineered for high-demand environments with consistent quality output.",
    solutions: ["Central plant systems", "Lobby water features", "Fire system pre-treatment", "Tenant sub-metering"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/9f33754b7_generated_1ad6ca38.png"
  },
  {
    icon: Hotel,
    name: "Hotels & Resorts",
    tagline: "Luxury-grade water experiences",
    desc: "Premium water solutions that enhance guest experiences — from spa pools to kitchen operations. Compliant with international hospitality standards.",
    solutions: ["Guest room filtration", "Pool & spa treatment", "Laundry water systems", "Central kitchen RO"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/82fe96be2_generated_748e4d9f.png"
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants & Cafes",
    tagline: "F&B-grade water quality",
    desc: "Protect equipment longevity and enhance beverage quality with precision water treatment designed for commercial kitchens and coffee operations.",
    solutions: ["Espresso machine filters", "Ice machine pre-treatment", "Dishwasher softening", "Point-of-use RO"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/abb4a7452_generated_a6c7be56.png"
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    tagline: "Medical-grade purity",
    desc: "Ultra-pure water systems for hospitals, clinics, dialysis centers, and pharmaceutical facilities. Meeting stringent healthcare compliance requirements.",
    solutions: ["Dialysis water systems", "Lab-grade purification", "Sterile water supply", "Autoclave feed water"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/8ef054555_generated_95eb3e53.png"
  },
  {
    icon: GraduationCap,
    name: "Schools & Universities",
    tagline: "Safe water for education",
    desc: "Reliable, low-maintenance water purification for educational institutions. Providing safe drinking water for students, staff, and campus facilities.",
    solutions: ["Drinking water stations", "Cafeteria filtration", "Laboratory water", "Sports facility treatment"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/dfabb3168_generated_42ba559b.png"
  },
  {
    icon: Factory,
    name: "Manufacturing",
    tagline: "Process-critical water",
    desc: "Industrial water treatment for manufacturing plants, process water recycling, and wastewater management. Engineered for continuous high-volume operation.",
    solutions: ["Process water RO", "Wastewater recycling", "Boiler feed treatment", "Cooling tower systems"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/2e1ce8eda_generated_1c08cf17.png"
  },
  {
    icon: Landmark,
    name: "Government Projects",
    tagline: "Infrastructure-scale solutions",
    desc: "Large-scale water treatment infrastructure for government facilities, public utilities, and national development projects across the UAE.",
    solutions: ["Municipal treatment", "Public facility upgrades", "Desalination support", "Compliance monitoring"],
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/76a7504ad_generated_2357b4fc.png"
  },
];

export default function Industries() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A192F] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0077FF]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-[0.25em] text-[#0077FF] mb-4">Industries</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Sector-Specific Expertise
            </h1>
            <p className="text-lg font-body text-white/60 leading-relaxed">
              Every industry has unique water requirements. We engineer solutions that address your sector's specific quality, volume, and compliance demands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? '' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-3">
                    <ind.icon className="w-6 h-6 text-[#0077FF]" />
                    <span className="text-xs font-display font-semibold uppercase tracking-widest text-[#0077FF]">{ind.tagline}</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-[#0A192F] mb-4">{ind.name}</h2>
                  <p className="text-base font-body text-[#0A192F]/60 leading-relaxed mb-6">{ind.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {ind.solutions.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm font-body text-[#0A192F]/70">
                        <CheckCircle className="w-4 h-4 text-[#0077FF] shrink-0" />
                        {s}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button variant="outline" className="border-[#0077FF]/30 text-[#0077FF] hover:bg-[#0077FF] hover:text-white font-body font-semibold rounded-full group">
                      Discuss Your Needs
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={ind.image}
                    alt={`${ind.name} water treatment solutions`}
                    className="rounded-2xl shadow-xl shadow-blue-500/10 w-full object-cover aspect-[4/3]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}