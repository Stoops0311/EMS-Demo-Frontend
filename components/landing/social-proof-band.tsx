import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, Award } from "lucide-react"

export function SocialProofBand() {
  return (
    <section className="py-8 sm:py-10 md:py-6 border-y bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-start md:items-center">
          {/* Indian Embassy Stat */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Award className="size-5 text-primary" />
              <Badge variant="glass">Trusted by the Indian Embassy</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              600+ active users • 1,500+ event check-ins
            </p>
          </div>

          {/* Auriseg Audit Badge */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Shield className="size-5 text-primary" />
              <Badge variant="glass">Independently Audited for Security</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Verified free from OWASP Top 10 and SANS 25 vulnerabilities
            </p>
          </div>

          {/* Production-Proven Badge */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="size-5 text-primary" />
              <Badge variant="glass">Production-Proven System</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Built by Vivid Verse Global
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
