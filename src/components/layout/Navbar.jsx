import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplets, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Droplets className={`w-9 h-9 transition-colors duration-300 ${scrolled ? 'text-[#0077FF]' : 'text-white'}`} />
              <div className="absolute inset-0 bg-[#0077FF] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <div>
              <span className={`text-xl font-display font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-[#0A192F]' : 'text-white'}`}>
                Filtronix
              </span>
              <span className={`block text-[10px] uppercase tracking-[0.2em] font-body font-medium -mt-1 transition-colors duration-300 ${scrolled ? 'text-[#0077FF]' : 'text-blue-200'}`}>
                Water Solutions
              </span>
              <span className={`block text-[8px] font-body -mt-0.5 transition-colors duration-300 ${scrolled ? 'text-[#0A192F]/40' : 'text-white/40'}`}>
                Pure water. Smarter solutions. Sustainable future.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-body font-medium tracking-wide transition-colors duration-300 rounded-lg ${
                  location.pathname === link.path
                    ? scrolled ? 'text-[#0077FF]' : 'text-white'
                    : scrolled ? 'text-[#0A192F]/70 hover:text-[#0077FF]' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#0077FF] rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden lg:block">
              <Button className="bg-[#0077FF] hover:bg-[#0066DD] text-white font-body font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0077FF] to-[#00AAFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-[#0A192F]' : 'text-white'}`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-body font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-[#0077FF]/10 text-[#0077FF]'
                      : 'text-[#0A192F]/70 hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="block pt-4">
                <Button className="w-full bg-[#0077FF] hover:bg-[#0066DD] text-white font-body font-semibold py-3 rounded-full">
                  Get a Quote
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
