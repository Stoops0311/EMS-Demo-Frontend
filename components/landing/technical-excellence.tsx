import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Zap } from "lucide-react"

export function TechnicalExcellence() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 instrument">
            Built for Security. Designed for Reliability.
          </h2>
        </div>

        {/* Excellence Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Security Audit */}
          <Card variant="glass" className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <Shield className="size-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Independently Verified Security</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80 space-y-3">
                <p>
                  EMS has completed Web Application Vulnerability Assessment and Penetration Testing by Auriseg Optimum Security.
                </p>
                <p>
                  Our system has been declared free from OWASP Top 10, SANS 25, and other known vulnerabilities—safe for hosting sensitive diplomatic data.
                </p>
              </CardDescription>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card variant="glass" className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <Code className="size-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Modern, Enterprise-Grade Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80 space-y-3">
                <p>
                  Built with React 19, TypeScript, and Convex serverless backend.
                </p>
                <p>
                  Industry-standard security practices including encrypted data transmission, secure authentication, and comprehensive access logging.
                </p>
              </CardDescription>
            </CardContent>
          </Card>

          {/* Real-Time Sync */}
          <Card variant="glass" className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <Zap className="size-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Instant Updates Across All Devices</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80 space-y-3">
                <p>
                  Changes sync in real-time across all connected clients. When security checks someone in, admins see it instantly.
                </p>
                <p>
                  When an application is approved, the applicant receives their QR code immediately. No delays, no refresh required.
                </p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Badge */}
        <div className="mt-12 flex justify-center">
          <Badge variant="glass" className="text-sm">
            Audited by Auriseg Optimum Security
          </Badge>
        </div>
      </div>
    </section>
  )
}
