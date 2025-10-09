"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import { useTheme } from "next-themes"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Track scroll progress for opacity overlay - optimized with RAF
  useEffect(() => {
    const handleScroll = () => {
      // Cancel previous animation frame if it exists
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }

      // Use requestAnimationFrame for smooth 60fps updates
      rafId.current = requestAnimationFrame(() => {
        if (overlayRef.current) {
          const heroHeight = window.innerHeight * 0.8 // Hero is now 80vh
          const scrolled = window.scrollY
          // Calculate progress: 0 at top, 0.95 at heroHeight
          const progress = Math.min(scrolled / heroHeight, 0.95)

          // Directly update opacity via DOM instead of React state (better performance)
          overlayRef.current.style.opacity = progress.toString()
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  // Determine if dark mode is active
  const isDark = mounted ? resolvedTheme === "dark" : false

  // Dark mode colors - more saturated and darker
  const darkColors1 = ["#2d4a7c", "#7d2379", "#4a64b1", "#1e1b4b", "#3b2f6b"]
  const darkColors2 = ["#1e3a5f", "#5d1659", "#2d4a7c", "#1a1540"]

  // Light mode colors - stronger, more vibrant colors
  const lightColors1 = ["#6592cc", "#d946a1", "#f59e0b", "#3d52a0", "#ec4899"]
  const lightColors2 = ["#7ba8db", "#e879bb", "#fbbf24", "#5068c4"]

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* SVG Filters */}
      <svg className="fixed inset-0 w-0 h-0 pointer-events-none">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Fixed Background Shaders with Vivid Verse Brand Colors */}
      {mounted && (
        <>
          <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ transform: "translateZ(0)", willChange: "transform" }}>
            <MeshGradient
              className="absolute inset-0 w-full h-full"
              colors={isDark ? darkColors1 : lightColors1}
              speed={0.3}
            />
            <MeshGradient
              className="absolute inset-0 w-full h-full opacity-40"
              colors={isDark ? darkColors2 : lightColors2}
              speed={0.2}
            />
          </div>

          {/* Scroll-based opacity overlay - fades gradient to background color */}
          <div
            ref={overlayRef}
            className="fixed inset-0 w-full h-full bg-background dark:bg-[#0f0a1e] pointer-events-none"
            style={{ opacity: 0, willChange: "opacity" }}
          />
        </>
      )}

      {/* Content scrolls normally */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}
