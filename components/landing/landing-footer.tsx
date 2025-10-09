import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Mail } from "lucide-react"

export function LandingFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Company Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Vivid Verse Global" width={48} height={48} className="size-12" />
              <h3 className="font-semibold text-lg instrument">Vivid Verse Global</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Building secure, self-hostable software for diplomatic missions and government organizations worldwide.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <a
              href="mailto:info@vividverseglobal.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
              <Mail className="size-4" />
              info@vividverseglobal.com
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2023-2025 Vivid Verse Global Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
