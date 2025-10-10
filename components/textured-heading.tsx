"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import type { RefObject } from "react"

interface TexturedHeadingProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function TexturedHeading({
  children,
  className,
  as: Component = "h2"
}: TexturedHeadingProps) {
  const { ref, isInView } = useInView()

  return (
    <Component
      ref={ref as RefObject<HTMLHeadingElement> as never}
      className={cn(
        "textured-heading",
        isInView && "in-view",
        className
      )}
    >
      {children}
    </Component>
  )
}
