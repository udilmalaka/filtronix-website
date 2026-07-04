import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsCounter from "@/components/shared/StatsCounter";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <StatsCounter />
      <IndustriesPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}