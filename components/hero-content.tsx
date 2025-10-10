"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe } from "@/components/ui/globe"
import { Smartphone, RotateCw } from "lucide-react"

export default function HeroContent() {
  return (
    <>
      {/* Rotate Screen Overlay - Only shows on mobile landscape */}
      <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm items-center justify-center hidden [@media(max-width:768px)_and_(orientation:landscape)]:flex">
        <div className="flex flex-col items-center gap-4 text-center px-6">
          <div className="relative">
            <Smartphone className="size-16 text-primary" />
            <RotateCw className="size-8 text-accent absolute -right-2 -top-2 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <h2 className="text-2xl font-medium text-foreground">Please Rotate Your Device</h2>
          <p className="text-sm text-muted-foreground">
            For the best experience, please view this site in portrait mode
          </p>
        </div>
      </div>

      <main className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 max-md:landscape:py-4 sm:py-12 md:py-0">
      {/* Mobile: Flex column (Globe on top, text below) */}
      {/* Desktop: Flex row (Text left, Globe right) */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-4 max-md:landscape:gap-3 sm:gap-8 md:gap-12">

        {/* Text Content */}
        <div className="text-left md:flex-1 w-full md:max-w-2xl order-2 md:order-1 shrink-0">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm mb-3 sm:mb-4 md:mb-6 relative border border-primary/20"
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full" />
            <span className="text-foreground/90 dark:text-foreground/90 text-xs font-light relative z-10">
              Embassy Management System
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl max-md:portrait:text-4xl max-md:landscape:text-2xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-tight tracking-tight font-light text-foreground dark:text-foreground mb-3 max-md:portrait:mb-4 max-md:landscape:mb-2 sm:mb-4 md:mb-6">
            <span className="font-medium">Your Data.</span> Your Servers.
            <br />
            <span className="font-light tracking-tight italic instrument text-accent">Complete Control.</span>
          </h1>

          {/* Description */}
          <p className="text-sm max-md:portrait:text-base max-md:landscape:text-xs sm:text-base md:text-lg font-light text-foreground/80 dark:text-foreground/80 mb-4 max-md:portrait:mb-5 max-md:landscape:mb-3 sm:mb-5 md:mb-6 leading-relaxed max-w-xl">
            Built for embassies and diplomatic missions. Self-hosted infrastructure means your sensitive data never leaves your control. Your one stop shop.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="https://ems-demo.vividverseglobal.com/" target="_blank">
                Try Full Demo
              </Link>
            </Button>
            <p className="text-xs font-light text-muted-foreground dark:text-muted-foreground">
              Questions?{" "}
              <Link href="mailto:info@vividverseglobal.com" className="text-primary hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>

        {/* Globe */}
        <div className="relative w-full max-w-[380px] max-md:landscape:max-w-[180px] sm:max-w-[320px] md:max-w-[500px] lg:max-w-[600px] aspect-square order-1 md:order-2 opacity-50 shrink-0">
          <Globe />
        </div>
      </div>
    </main>
    </>
  )
}
