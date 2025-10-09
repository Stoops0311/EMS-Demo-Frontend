"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  SocialProofBand,
  SelfHostingBenefits,
  FeaturesSection,
  TechnicalExcellence,
  DeploymentOptions,
  ComingSoonFeatures,
  FinalCTA,
  LandingFooter,
} from "@/components/landing"

export default function EMSLandingPage() {
  return (
    <ShaderBackground>
      {/* Fixed elements */}
      <ThemeToggle />
      <Header />

      {/* Hero Section - Reduced height so social proof band shows on load */}
      <div className="h-[80vh] relative">
        <HeroContent />
      </div>

      {/* Content Sections - Will scroll over gradient (no bg-background yet, waiting for scroll opacity implementation) */}
      <div className="relative">
        <SocialProofBand />
        <SelfHostingBenefits />
        <FeaturesSection />
        <TechnicalExcellence />
        <DeploymentOptions />
        <ComingSoonFeatures />
        <FinalCTA />
        <LandingFooter />
      </div>
    </ShaderBackground>
  )
}
