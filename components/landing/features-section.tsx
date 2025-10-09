import { FeatureSpotlight } from "./feature-spotlight"
import { Users, Calendar, QrCode, CheckCircle, LayoutDashboard, TrendingUp } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 instrument">
            Everything You Need to Manage Diplomatic Missions
          </h2>
        </div>

        {/* Features */}
        <div className="space-y-24 md:space-y-32">
          {/* Feature 1: Multi-Role Dashboard */}
          <FeatureSpotlight
            icon={<Users className="size-6 text-primary" />}
            title="Multi-Role Access Control"
            description="Three distinct user types with granular permissions ensure the right people have the right access. Separate interfaces for attendees, administrators, and security personnel streamline operations without compromising security."
            capabilities={[
              "USER role for event attendees and applicants",
              "ADMIN role for event coordination and approvals",
              "SECURITY role for check-in verification and document review",
              "Granular permission controls per role",
            ]}
            imagePosition="left"
            imageSrc="/assets/multi-role-access-control/pexels_13007861_original.jpeg"
            imageAlt="Modern security intercom and access control system"
          />

          <Separator className="my-16" />

          {/* Feature 2: Event Management */}
          <FeatureSpotlight
            icon={<Calendar className="size-6 text-primary" />}
            title="Flexible Event Access Levels"
            description="Create events with precisely the right level of access control. From public embassy celebrations to private diplomatic briefings, manage guest lists and approvals with ease."
            capabilities={[
              "OPEN events for public access (cultural celebrations, announcements)",
              "APPROVAL events requiring admin review (visa appointments, consular services)",
              "PRIVATE events with invitation-only access (diplomatic meetings, classified briefings)",
              "Pre-approval whitelists for expedited access",
            ]}
            imagePosition="right"
            imageSrc="/assets/event-management/pexels_7648043.jpeg"
            imageAlt="Event registration desk with conference materials and name tags"
          />

          <Separator className="my-16" />

          {/* Feature 3: QR Check-In System */}
          <FeatureSpotlight
            icon={<QrCode className="size-6 text-primary" />}
            title="Contactless Security Verification"
            description="Generate secure QR codes automatically for approved attendees. Mobile scanner app enables security personnel to verify credentials instantly, track attendance, and maintain real-time logs of who's on premises."
            capabilities={[
              "Automatic QR code generation for approved guests",
              "Mobile scanner app for iOS and Android",
              "Real-time attendance tracking and logs",
              "Document verification integration (passport, national ID)",
            ]}
            imagePosition="left"
            imageSrc="/assets/qr-checkin/pexels_2451622.jpeg"
            imageAlt="Hand scanning QR code with smartphone for contactless check-in"
          />

          <Separator className="my-16" />

          {/* Feature 4: Approval Workflows */}
          <FeatureSpotlight
            icon={<CheckCircle className="size-6 text-primary" />}
            title="Streamlined Application Review"
            description="Review event applications efficiently with bulk actions, detailed applicant profiles, and automated email notifications. Built-in appeals system ensures fair process and maintains diplomatic transparency."
            capabilities={[
              "Application review queue with filtering and search",
              "Bulk approve/deny actions for efficiency",
              "Appeals system with status tracking",
              "Automated email notifications at each stage",
            ]}
            imagePosition="right"
            imageSrc="/assets/approval-workflows/pexels_7947839.jpeg"
            imageAlt="Business planning cycle chart with pencil for workflow management"
          />

          <Separator className="my-16" />

          {/* Feature 5: Dynamic Form Builder */}
          <FeatureSpotlight
            icon={<LayoutDashboard className="size-6 text-primary" />}
            title="Custom Data Collection Forms"
            description="Build tailored registration forms for any event type without writing code. Eight field types cover everything from basic contact info to document uploads. Send invitations, collect responses, and export data in seconds."
            capabilities={[
              "Drag-and-drop form builder with 8 field types",
              "Custom fields for specific data collection needs",
              "Form invitation system with unique RSVP links",
              "Response analytics and CSV export",
            ]}
            imagePosition="left"
            imageSrc="/assets/form-builder/pexels_33349191.jpeg"
            imageAlt="Digital checklist on tablet with stylus for form building"
          />

          <Separator className="my-16" />

          {/* Feature 6: Real-Time Analytics */}
          <FeatureSpotlight
            icon={<TrendingUp className="size-6 text-primary" />}
            title="Event Insights & Attendance Tracking"
            description="Monitor event registrations, approval rates, and attendance patterns in real-time. Track check-ins as they happen and generate reports for security briefings or diplomatic reporting requirements."
            capabilities={[
              "Real-time event registration dashboard",
              "Attendance tracking with check-in/check-out logs",
              "Application approval rate analytics",
              "Exportable reports for official records",
            ]}
            imagePosition="right"
            imageSrc="/assets/analytics/pexels_7947958.jpeg"
            imageAlt="Analytics dashboard displaying graphs and charts on screen"
          />
        </div>
      </div>
    </section>
  )
}
