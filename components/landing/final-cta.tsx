import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-semibold instrument">
            Experience EMS in Action
          </h2>

          {/* Subtext */}
          <p className="text-lg text-foreground/80 leading-relaxed">
            Try the full system free for 48 hours. No credit card required. See firsthand how EMS simplifies event management while keeping your data secure.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" asChild>
              <a
                href="https://ems-demo.vividverseglobal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                Start Free Demo
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:info@vividverseglobal.com">
                Contact Us
              </a>
            </Button>
          </div>

          {/* Additional Trust Signal */}
          <p className="text-sm text-muted-foreground pt-4">
            Trusted by the Indian Embassy • Independently Security Audited
          </p>
        </div>
      </div>
    </section>
  )
}
