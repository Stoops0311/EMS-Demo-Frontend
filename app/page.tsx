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

      {/* Hero Section - Responsive height with mobile optimization */}
      <div className="min-h-[100vh] landscape:min-h-[120vh] sm:landscape:min-h-[100vh] md:h-[85vh] lg:h-[80vh] relative pb-16 sm:pb-20 md:pb-8">
        <HeroContent />
      </div>

      {/* Content Sections - Will scroll over gradient (no bg-background yet, waiting for scroll opacity implementation) */}
      <div className="relative mt-8 sm:mt-12 md:mt-0">
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
