"use client"

import { useEffect, useRef } from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

// Vivid Verse Global brand colors
const VIVID_PINK: [number, number, number] = [178 / 255, 24 / 255, 128 / 255] // #b21880
const VIVID_BLUE: [number, number, number] = [101 / 255, 146 / 255, 204 / 255] // #6592cc
const VIVID_ORANGE: [number, number, number] = [243 / 255, 184 / 255, 101 / 255] // #f3b865

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: VIVID_PINK,
  glowColor: VIVID_BLUE,
  markers: [
    { location: [28.6139, 77.209], size: 0.08 }, // India (New Delhi)
    { location: [24.7136, 46.6753], size: 0.08 }, // Riyadh, Saudi Arabia
    { location: [51.5074, -0.1278], size: 0.08 }, // UK (London)
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const { resolvedTheme } = useTheme()

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  // Theme-aware configuration
  const isDark = resolvedTheme === "dark"
  const themeConfig: COBEOptions = {
    ...config,
    dark: isDark ? 1 : 0,
    baseColor: isDark ? ([0.25, 0.25, 0.35] as [number, number, number]) : ([0.95, 0.95, 0.96] as [number, number, number]),
    glowColor: isDark ? ([0.4, 0.5, 0.7] as [number, number, number]) : ([0.7, 0.75, 0.85] as [number, number, number]),
    markerColor: VIVID_PINK,
    mapBrightness: isDark ? 2.5 : 1.5,
    diffuse: 1.2,
    opacity: 0.6,
  }

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...themeConfig,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005
        state.phi = phi + rs.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0)
    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, themeConfig, resolvedTheme])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        style={{ filter: "blur(0.5px)" }}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX
          updatePointerInteraction(e.clientX)
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
