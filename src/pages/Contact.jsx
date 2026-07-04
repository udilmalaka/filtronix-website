import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/shared/ContactForm";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+971 5225 72195", href: "tel:+971522572195" },
  { icon: Mail, label: "Email", value: "info@filtronixsolutions.com", href: "mailto:info@filtronixsolutions.com" },
  { icon: MapPin, label: "Location", value: "Abu Dhabi, United Arab Emirates", href: null },
  { icon: Clock, label: "Working Hours", value: "Mon–Fri: 9AM–6PM", href: null },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A192F] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0077FF]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-[0.25em] text-[#0077FF] mb-4">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Let's Engineer Your Solution
            </h1>
            <p className="text-lg font-body text-white/60 leading-relaxed">
              Whether you need a quick consultation or a full-scale water treatment project, our engineering team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-display font-bold text-[#0A192F] mb-2">Send Us a Message</h2>
              <p className="text-sm font-body text-[#0A192F]/50 mb-8">Fill out the form below and we'll respond within 24 hours.</p>
              <ContactForm />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-xl font-display font-bold text-[#0A192F] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#0077FF]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[#0077FF]" />
                      </div>
                      <div>
                        <p className="text-xs font-display font-semibold uppercase tracking-widest text-[#0A192F]/40 mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-base font-body text-[#0A192F] hover:text-[#0077FF] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-base font-body text-[#0A192F]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 rounded-2xl bg-[#0A192F] text-white">
                <MessageCircle className="w-8 h-8 text-[#0077FF] mb-4" />
                <h4 className="text-lg font-display font-bold mb-2">Direct Engineering Support</h4>
                <p className="text-sm font-body text-white/50 mb-4">Get instant answers from our technical team via WhatsApp.</p>
                <a
                  href="https://wa.me/971522572195?text=Hello%20Filtronix%2C%20I%27d%20like%20to%20inquire%20about%20your%20water%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#0077FF] hover:bg-[#0066DD] text-white font-body font-semibold rounded-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#F0F9FF] p-8 text-center">
                <MapPin className="w-8 h-8 text-[#0077FF] mx-auto mb-3" />
                <h4 className="font-display font-semibold text-[#0A192F] mb-1">Abu Dhabi Office</h4>
                <p className="text-sm font-body text-[#0A192F]/50">
                  Filtronix Water Solutions LLC<br />
                  Abu Dhabi, UAE
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
