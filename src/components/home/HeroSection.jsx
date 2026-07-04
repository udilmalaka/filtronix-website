import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a3657f2b4cdf4465a5db68f/76a7504ad_generated_2357b4fc.png"
          alt="Modern water treatment facility with industrial RO systems"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/80 to-[#0A192F]/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00AAFF]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm font-body text-blue-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0077FF] animate-pulse" />
              Trusted Water Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
            
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077FF] to-[#00CCFF]">
              Purity
            </span>{" "}
            for the Emirates
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl font-body text-white/60 leading-relaxed mb-10 max-w-2xl">
            
            Complete water treatment and management solutions for residential, commercial, hospitality, healthcare, and industrial clients across the UAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4">
            
            <Link to="/contact">
              <Button className="h-14 px-8 bg-[#0077FF] hover:bg-[#0066DD] text-white font-body font-semibold text-base rounded-full shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 group">
                Request a Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                className="h-14 px-8 border-white/20 text-white hover:bg-white/10 font-body font-semibold text-base rounded-full backdrop-blur-sm">
                
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          










          
        </div>
      </div>
    </section>);

}