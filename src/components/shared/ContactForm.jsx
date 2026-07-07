import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xdarjqll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        }, 4000);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-display font-bold text-[#0A192F] mb-2">Thank You!</h3>
        <p className="text-[#0A192F]/60 font-body">We'll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
        <Input
          placeholder="Full Name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="h-12 bg-white border-[#E2E8F0] font-body placeholder:text-[#0A192F]/30 focus:border-[#0077FF] focus:ring-[#0077FF]/20"
        />
        <Input
          type="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="h-12 bg-white border-[#E2E8F0] font-body placeholder:text-[#0A192F]/30 focus:border-[#0077FF] focus:ring-[#0077FF]/20"
        />
      </div>
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="h-12 bg-white border-[#E2E8F0] font-body placeholder:text-[#0A192F]/30 focus:border-[#0077FF] focus:ring-[#0077FF]/20"
        />
        <Select value={formData.service} onValueChange={(val) => setFormData({ ...formData, service: val })}>
          <SelectTrigger className="h-12 bg-white border-[#E2E8F0] font-body text-[#0A192F]/70">
            <SelectValue placeholder="Select Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="filtration">Water Filtration</SelectItem>
            <SelectItem value="ro">Reverse Osmosis</SelectItem>
            <SelectItem value="softener">Water Softener</SelectItem>
            <SelectItem value="commercial">Commercial Treatment</SelectItem>
            <SelectItem value="industrial">Industrial Treatment</SelectItem>
            <SelectItem value="maintenance">Maintenance & AMC</SelectItem>
            <SelectItem value="testing">Water Testing</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Textarea
        placeholder="Tell us about your requirements..."
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        rows={compact ? 3 : 5}
        className="bg-white border-[#E2E8F0] font-body placeholder:text-[#0A192F]/30 focus:border-[#0077FF] focus:ring-[#0077FF]/20 resize-none"
      />
      {error && (
        <p className="text-sm font-body text-red-500">{error}</p>
      )}
      <Button
        type="submit"
        disabled={submitting}
        className="w-full h-12 bg-[#0077FF] hover:bg-[#0066DD] text-white font-body font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send Inquiry"}
        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
}
