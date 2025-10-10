import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface FeatureSpotlightProps {
  icon: React.ReactNode
  title: string
  description: string
  capabilities: string[]
  imagePosition: "left" | "right"
  imageSrc?: string
  imageAlt?: string
}

export function FeatureSpotlight({
  icon,
  title,
  description,
  capabilities,
  imagePosition,
  imageSrc,
  imageAlt,
}: FeatureSpotlightProps) {
  return (
    <div
      className={`flex flex-col gap-8 md:gap-12 items-center ${
        imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Feature Image */}
      <div className="w-full md:w-1/2 flex-shrink-0">
        <div className="aspect-square rounded-xl bg-muted/50 border overflow-hidden relative">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          ) : (
            <div className="flex items-center justify-center h-full p-8">
              <p className="text-muted-foreground text-sm">Screenshot Coming Soon</p>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Icon and Title */}
        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-primary/10 w-fit">
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold instrument textured-heading">{title}</h3>
          <p className="text-foreground/80 text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Capabilities List */}
        <div className="space-y-3">
          <Badge variant="glass" className="mb-2">
            Key Capabilities
          </Badge>
          <ul className="space-y-3">
            {capabilities.map((capability, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/80">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
