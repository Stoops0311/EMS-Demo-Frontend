"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroContent() {
  return (
    <main className="absolute top-1/2 -translate-y-1/2 left-8 z-20 max-w-2xl">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm mb-6 relative border border-primary/20"
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
        <h1 className="text-5xl md:text-6xl md:leading-tight tracking-tight font-light text-foreground dark:text-foreground mb-6">
          <span className="font-medium">Your Data.</span> Your Servers.
          <br />
          <span className="font-light tracking-tight italic instrument text-accent">Complete Control.</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg font-light text-foreground/80 dark:text-foreground/80 mb-6 leading-relaxed max-w-xl">
          Event management built for embassies and diplomatic missions. Self-hosted infrastructure means your sensitive
          data never leaves your control.
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
    </main>
  )
}
