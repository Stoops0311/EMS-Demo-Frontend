import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const pricingTiers = [
  {
    name: "Essential",
    price: "$20,000",
    summary: "For missions running focused event programs",
    features: [
      "Event management included",
      "Up to 100 total events",
      "Role-based access for core teams",
      "Email support and onboarding guidance",
    ],
    badge: "Entry Tier",
    featured: false,
  },
  {
    name: "Growth",
    price: "$40,000",
    summary: "For embassies managing frequent public activities",
    features: [
      "Unlimited events",
      "All core event workflows",
      "Priority support response",
      "No forms or appointment modules",
    ],
    badge: "Most Popular",
    featured: true,
  },
  {
    name: "Complete",
    price: "$60,000",
    summary: "For full-spectrum diplomatic operations",
    features: [
      "Unlimited events",
      "Dynamic forms and data collection",
      "Appointment scheduling and approvals",
      "Full EMS module access (workflows, analytics, and more)",
    ],
    badge: "Full Suite",
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="glass" className="mb-4">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 instrument textured-heading">
            Choose the Right EMS Package
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Transparent, one-time licensing built for diplomatic teams. Start with events only or unlock the complete EMS platform as your operational needs expand.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              variant={tier.featured ? "glass" : "default"}
              className={tier.featured ? "relative border-primary/40 shadow-lg" : "h-full"}
            >
              <CardHeader className="space-y-3">
                <Badge variant={tier.featured ? "default" : "outline"} className="w-fit">
                  {tier.badge}
                </Badge>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <p className="text-4xl font-semibold text-primary">{tier.price}</p>
                <p className="text-sm text-foreground/80">{tier.summary}</p>
              </CardHeader>

              <CardContent className="flex flex-col gap-6 h-full">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 items-start">
                      <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={tier.featured ? "default" : "outline"} className="mt-auto w-full" asChild>
                  <a href="mailto:info@vividverseglobal.com">Discuss This Tier</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
