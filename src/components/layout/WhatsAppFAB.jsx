import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/971501234567?text=Hello%20Filtronix%2C%20I%27d%20like%20to%20inquire%20about%20your%20water%20solutions."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0077FF] hover:bg-[#0066DD] text-white px-5 py-3.5 rounded-full shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-body font-semibold">
        Direct Support
      </span>
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full border-2 border-[#0077FF] animate-ping opacity-20" />
    </motion.a>
  );
}