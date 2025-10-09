import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Cloud, CheckCircle } from "lucide-react"

export function DeploymentOptions() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 instrument">
            Deploy Your Way
          </h2>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Self-Hosted */}
          <Card variant="default" className="hover:shadow-lg transition-shadow h-full">
            <CardHeader>
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <Server className="size-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Self-Hosted</CardTitle>
              <Badge variant="glass" className="w-fit">Complete Control</Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Benefits List */}
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">Deploy on your own infrastructure</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">Data stays within your jurisdiction</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">Full control over updates and maintenance</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">Meet strict diplomatic security requirements</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">One-time licensing with source code access</span>
                </li>
              </ul>

              {/* Description */}
              <CardDescription className="text-foreground/80 pt-4 border-t">
                Host EMS on your own servers or private cloud infrastructure. We provide the complete source code, deployment documentation, and technical support. Your data never touches external servers.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Managed Hosting */}
          <Card variant="default" className="hover:shadow-lg transition-shadow h-full">
            <CardHeader>
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <Cloud className="size-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Managed Hosting</CardTitle>
              <Badge variant="glass" className="w-fit">We Handle the Infrastructure</Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Benefits List */}
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">Vivid Verse Global manages hosting and updates</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">Automatic backups and security patches</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">24/7 monitoring and support</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">Scalable infrastructure as your needs grow</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">Focus on events, not server administration</span>
                </li>
              </ul>

              {/* Description */}
              <CardDescription className="text-foreground/80 pt-4 border-t">
                Let us handle the technical details while you focus on your mission. We deploy EMS on secure, isolated infrastructure with geographic options to meet your data residency requirements.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Flexibility Message */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-foreground/80 leading-relaxed">
            <strong className="text-foreground">Not sure which option is right?</strong> We&apos;ll help you evaluate your requirements and choose the deployment model that meets your security, compliance, and operational needs. Contact us to discuss your specific situation.
          </p>
        </div>
      </div>
    </section>
  )
}
