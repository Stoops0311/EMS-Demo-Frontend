import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fingerprint, MessageSquare } from "lucide-react"

export function ComingSoonFeatures() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="glass" className="mb-4">Coming Soon</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 instrument">
            Future Enhancements
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            We&apos;re continuously improving EMS with cutting-edge features to enhance security and communication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Biometrics Feature */}
          <Card variant="default" className="hover:shadow-lg transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            <CardHeader>
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <Fingerprint className="size-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Biometric Authentication</CardTitle>
              <Badge variant="outline" className="w-fit">In Development</Badge>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80 leading-relaxed">
                Advanced fingerprint and facial recognition systems for enhanced security at check-in points. Biometric verification will provide an additional layer of authentication for high-security diplomatic events and restricted areas.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                <li>• Fingerprint scanning integration</li>
                <li>• Facial recognition check-in</li>
                <li>• Multi-factor biometric authentication</li>
                <li>• Secure biometric data storage</li>
              </ul>
            </CardContent>
          </Card>

          {/* Internal Chat Feature */}
          <Card variant="default" className="hover:shadow-lg transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            <CardHeader>
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <MessageSquare className="size-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Internal Communication Hub</CardTitle>
              <Badge variant="outline" className="w-fit">In Development</Badge>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80 leading-relaxed">
                Secure, encrypted messaging system for real-time communication between embassy staff, security personnel, and event coordinators. Streamline coordination during events with instant notifications and group channels.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                <li>• End-to-end encrypted messaging</li>
                <li>• Role-based chat channels</li>
                <li>• Real-time event coordination</li>
                <li>• File sharing and attachments</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
