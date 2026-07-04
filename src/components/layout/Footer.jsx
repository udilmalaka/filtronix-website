import React from "react";
import { Link } from "react-router-dom";
import { Droplets, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Water Filtration Systems",
  "Reverse Osmosis Systems",
  "Water Softeners",
  "Commercial Treatment",
  "Industrial Treatment",
  "Maintenance & AMC",
];

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white relative overflow-hidden">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-white" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <Droplets className="w-8 h-8 text-[#0077FF]" />
              <div>
                <span className="text-xl font-display font-bold">Filtronix</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-blue-300 -mt-1">
                  Water Solutions
                </span>
              </div>
            </div>
            <p className="text-white/50 font-body text-sm leading-relaxed mb-6">
              Engineering purity for the Emirates. Complete water treatment and management solutions for Abu Dhabi and the UAE.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Trusted by clients across the UAE
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-white/40 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-[#0077FF] font-body text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-white/40 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/60 hover:text-[#0077FF] font-body text-sm transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-white/40 mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a href="tel:+971522572195" className="flex items-start gap-3 text-white/60 hover:text-[#0077FF] transition-colors text-sm font-body">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                +971 5225 72195
              </a>
              <a href="mailto:info@filtronixsolutions.com" className="flex items-start gap-3 text-white/60 hover:text-[#0077FF] transition-colors text-sm font-body">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                info@filtronixsolutions.com
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm font-body">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Abu Dhabi, United Arab Emirates
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} Filtronix Water Solutions LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-white/30 hover:text-white/60 text-xs font-body transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="text-white/30 hover:text-white/60 text-xs font-body transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
