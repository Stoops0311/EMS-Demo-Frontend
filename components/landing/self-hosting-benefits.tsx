import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Lock, Shield, Server } from "lucide-react"

export function SelfHostingBenefits() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 instrument textured-heading">
            Why Self-Hosting Matters for Diplomatic Missions
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Benefit 1: Data Sovereignty */}
          <Card variant="default" className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <Lock className="size-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Complete Data Sovereignty</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80">
                Your event data, attendee information, and sensitive documents stay exclusively on your infrastructure. No third-party cloud storage. No data transfers across borders.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Benefit 2: Compliance */}
          <Card variant="default" className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <Shield className="size-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Meet National Compliance Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80">
                Satisfy your country&apos;s data protection laws and diplomatic security requirements. Full audit trails and access controls built for government accountability.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Benefit 3: Infrastructure Control */}
          <Card variant="default" className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <Server className="size-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Infrastructure You Control</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80">
                Deploy on your own servers or private cloud. Scale resources as needed. Complete visibility into where your data lives and who can access it.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
