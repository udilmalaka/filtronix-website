import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <IndustriesPreview />
      <CTASection />
    </>
  );
}
