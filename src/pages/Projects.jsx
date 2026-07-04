import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";

const projects = [
  {
    title: "Al Reem Island Commercial Complex",
    location: "Abu Dhabi",
    year: "2023",
    category: "Commercial",
    challenge: "High TDS levels (1,800 ppm) affecting tenant water quality and building equipment lifespan across 12 floors.",
    solution: "Installed a centralized 50,000 LPD RO plant with automated monitoring and backup softener system.",
    result: "TDS reduced to 45 ppm. Equipment maintenance costs dropped 60%. Zero water quality complaints.",
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/9f33754b7_generated_1ad6ca38.png"
  },
  {
    title: "Saadiyat Beach Resort",
    location: "Saadiyat Island",
    year: "2023",
    category: "Hospitality",
    challenge: "Inconsistent water quality affecting guest experience, spa operations, and kitchen output.",
    solution: "Multi-zone treatment system: guest-room filtration, spa water balancing, and kitchen-grade RO with mineral enrichment.",
    result: "Guest satisfaction scores increased 25%. Spa equipment lifespan extended 3x. F&B water costs reduced 40%.",
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/82fe96be2_generated_748e4d9f.png"
  },
  {
    title: "Cleveland Clinic Abu Dhabi Expansion",
    location: "Al Maryah Island",
    year: "2022",
    category: "Healthcare",
    challenge: "New wing required ultra-pure water for dialysis, laboratory, and sterilization operations.",
    solution: "Pharmaceutical-grade double-pass RO system with UV disinfection, DI polishing, and real-time quality monitoring.",
    result: "Consistent 0.1 µS/cm conductivity. 100% compliance with healthcare water regulations.",
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/8ef054555_generated_95eb3e53.png"
  },
  {
    title: "KIZAD Manufacturing Facility",
    location: "Khalifa Industrial Zone",
    year: "2022",
    category: "Industrial",
    challenge: "Process water contamination causing production defects and increased chemical consumption.",
    solution: "100,000 LPD industrial RO plant with wastewater recycling, reducing freshwater intake by 70%.",
    result: "Production defect rate dropped 85%. Annual water cost savings of AED 500,000+.",
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/2e1ce8eda_generated_1c08cf17.png"
  },
  {
    title: "Abu Dhabi Government Office Complex",
    location: "Al Bateen",
    year: "2021",
    category: "Government",
    challenge: "Aging water infrastructure in a 15-building government campus with 5,000+ daily occupants.",
    solution: "Complete system retrofit with central RO, building-level softeners, and network of drinking water stations.",
    result: "Water quality compliance achieved across all buildings. 45% reduction in bottled water procurement.",
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/76a7504ad_generated_2357b4fc.png"
  },
  {
    title: "Al Wahda Residential Community",
    location: "Abu Dhabi",
    year: "2021",
    category: "Residential",
    challenge: "Community of 200+ villas experiencing hard water damage to plumbing and appliances.",
    solution: "Centralized water softening plant with individual villa filtration units and quarterly maintenance program.",
    result: "Plumbing maintenance calls reduced 70%. Resident satisfaction increased to 96%.",
    image: "https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/c3546fcb6_generated_0d1c5d64.png"
  },
];

export default function Projects() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A192F] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0077FF]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-[0.25em] text-[#0077FF] mb-4">Case Studies</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Proven Results, Real Impact
            </h1>
            <p className="text-lg font-body text-white/60 leading-relaxed">
              Explore how Filtronix has transformed water quality for organizations across the UAE with measurable, lasting results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch"
              >
                <div className="lg:col-span-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl shadow-xl shadow-blue-500/10 w-full h-full object-cover min-h-[280px]"
                  />
                </div>
                <div className="lg:col-span-3 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 mb-3 text-xs font-body text-[#0A192F]/50">
                    <span className="px-3 py-1 rounded-full bg-[#0077FF]/10 text-[#0077FF] font-semibold">{project.category}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{project.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{project.year}</span>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-[#0A192F] mb-4">{project.title}</h2>
                  
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                      <span className="text-xs font-display font-semibold uppercase tracking-widest text-red-400 block mb-1">Challenge</span>
                      <p className="text-xs font-body text-[#0A192F]/70 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                      <span className="text-xs font-display font-semibold uppercase tracking-widest text-[#0077FF] block mb-1">Solution</span>
                      <p className="text-xs font-body text-[#0A192F]/70 leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                      <span className="text-xs font-display font-semibold uppercase tracking-widest text-green-500 block mb-1">Result</span>
                      <p className="text-xs font-body text-[#0A192F]/70 leading-relaxed">{project.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact">
              <Button className="bg-[#0077FF] hover:bg-[#0066DD] text-white font-body font-semibold px-8 py-3 rounded-full group">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}