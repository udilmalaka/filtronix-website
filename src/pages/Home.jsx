import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <IndustriesPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
