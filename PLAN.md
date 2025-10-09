# EMS Landing Page - Complete Plan

## Project Overview

**Goal**: Convert warm leads (embassy contacts) to demo users
**Primary CTA**: https://ems.vividverseglobal.com/ (48-hour demo)
**Target Audience**: Embassy officials, diplomatic staff, event coordinators
**Key Value Proposition**: Self-hosted event management = complete data sovereignty

---

## 1. Site Architecture

### Single-Page Scroll Layout

```
┌─────────────────────────────────────┐
│ 1. HERO SECTION                     │ ← Fixed gradient background (bold)
│    - Headline + subheadline         │
│    - Demo CTA button                │
│    - Contact email                  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 2. SOCIAL PROOF BAND                │ ← Content scrolls, gradient mellows
│    - Indian Embassy stats           │
│    - Security audit badge           │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 3. WHY SELF-HOSTING MATTERS         │
│    - 3-column benefits              │
│    - Data sovereignty focus         │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 4. FEATURE SPOTLIGHT (6 sections)   │ ← Alternating image/text
│    - Multi-role dashboard           │
│    - Event management               │
│    - QR check-in system             │
│    - Approval workflows             │
│    - Dynamic forms                  │
│    - Real-time analytics            │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 5. TECHNICAL EXCELLENCE             │
│    - Security audit                 │
│    - Real-time sync                 │
│    - Modern stack                   │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 6. DEPLOYMENT OPTIONS               │
│    - Self-hosted vs Managed         │
│    - 2-column comparison            │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 7. FINAL CTA                        │
│    - Try demo now                   │
│    - Contact us                     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 8. FOOTER                           │
│    - Vivid Verse Global branding    │
│    - Contact email                  │
└─────────────────────────────────────┘
```

---

## 2. Technical Architecture

### Component Structure

```
app/
  page.tsx                          → Main landing page

components/
  landing/
    hero-section.tsx                → Fixed gradient + headline + CTA
    social-proof-band.tsx           → Stats + badges
    self-hosting-benefits.tsx       → 3-column grid
    feature-spotlight.tsx           → Reusable alternating section
    technical-excellence.tsx        → Security + tech stack
    deployment-options.tsx          → Self-hosted vs Managed
    final-cta.tsx                   → Bottom conversion section
    landing-footer.tsx              → Footer with contact

  ui/
    button.tsx                      → shadcn button (already exists)
    badge.tsx                       → Stats badges
    card.tsx                        → Feature cards

  shader-background.tsx             → Keep existing (with modifications)
  header.tsx                        → Keep existing navigation
```

### Scroll-Based Gradient Effect

**Technical Implementation:**

1. **Hero Section (0-100vh)**
   ```tsx
   // Fixed position gradient at full opacity
   <div className="fixed inset-0 z-0">
     <ShaderBackground />
   </div>

   // Hero content overlays on top
   <section className="relative z-10 min-h-screen">
     <HeroContent />
   </section>
   ```

2. **Content Sections (100vh+)**
   ```tsx
   // Overlay with increasing opacity as user scrolls
   <div className="fixed inset-0 z-5 bg-background transition-opacity"
        style={{ opacity: scrollProgress }}>
   </div>

   // Content sections scroll normally
   <div className="relative z-10">
     <SocialProofBand />
     <FeatureSpotlight />
     // ... rest of sections
   </div>
   ```

3. **Scroll Progress Calculation**
   ```tsx
   const [scrollProgress, setScrollProgress] = useState(0)

   useEffect(() => {
     const handleScroll = () => {
       const heroHeight = window.innerHeight
       const scrolled = window.scrollY
       const progress = Math.min(scrolled / heroHeight, 0.95) // Max 95% opacity
       setScrollProgress(progress)
     }

     window.addEventListener('scroll', handleScroll)
     return () => window.removeEventListener('scroll', handleScroll)
   }, [])
   ```

### Animation Strategy

- **Hero**: Bold shader animations (current speed: 0.3/0.2)
- **Content sections**: Fade in on scroll (Framer Motion)
- **Feature screenshots**: Slide in from left/right alternating
- **Stats counters**: Count up animation when in viewport
- **Buttons**: Subtle hover effects with gradient borders

### Responsive Breakpoints

- **Mobile (< 768px)**: Stack all content, reduce gradient intensity
- **Tablet (768px - 1024px)**: 2-column layouts where applicable
- **Desktop (1024px+)**: Full alternating image/text layout

---

## 3. Copy Strategy

### Messaging Hierarchy

**Level 1: Hero (What + Why)**
- Headline: Clear value prop (data sovereignty)
- Subheadline: Who it's for + key benefit
- CTA: Low-friction demo access

**Level 2: Social Proof (Trust)**
- Real production stats (600+ users, 1500+ check-ins)
- Third-party validation (Auriseg audit)

**Level 3: Problem/Solution (Why Self-Hosting)**
- Embassy-specific pain points
- Data sovereignty benefits
- Compliance advantages

**Level 4: Features (How)**
- 6 core features with screenshots
- Use case focused (not tech specs)
- Alternating sections for visual rhythm

**Level 5: Technical Credibility (Trust + Depth)**
- Security standards
- Modern tech stack
- Real-time capabilities

**Level 6: Deployment Options (Flexibility)**
- Self-hosted (primary pitch)
- Managed hosting (alternative)
- No lock-in message

**Level 7: Final CTA (Conversion)**
- Reinforced demo CTA
- Contact fallback

### Tone & Voice

**Professional Modern Diplomat:**
- Confident but not arrogant
- Technical but accessible
- Security-focused but user-friendly
- Example: "Your data stays on your infrastructure. Period."

**Avoid:**
- Marketing fluff ("revolutionary", "game-changing")
- Overly casual language
- Tech jargon without explanation
- Pushy sales language

**Embrace:**
- Clear, direct statements
- Security-first language
- Practical benefits
- Diplomatic sensitivity

---

## 4. Visual Design System

### Color Usage

**Hero Section:**
- Full vibrancy Vivid Verse colors
- Strong gradients (current shader setup)
- High contrast text (white on gradient)

**Content Sections:**
- Clean white/dark backgrounds (theme-aware)
- Subtle gradient accents
- Primary blue (#3d52a0) for CTAs
- Vivid pink (#b21880) for highlights

**Feature Screenshots:**
- Subtle shadow/border for depth
- Glass-morphism effect on cards
- Gradient borders on focus elements

### Typography Hierarchy

**Headlines:**
- H1 (Hero): 4xl/5xl, Instrument Serif, font-medium
- H2 (Sections): 3xl/4xl, Figtree, font-semibold
- H3 (Features): 2xl, Figtree, font-medium

**Body:**
- Large (Hero subtext): lg/xl, Figtree, font-light
- Regular (Descriptions): base, Figtree, font-normal
- Small (Captions): sm, Figtree, font-light

### Iconography

**Using Lucide Icons:**
- Shield (Security)
- Users (Multi-role)
- Calendar (Events)
- QrCode (Check-in)
- CheckCircle (Approvals)
- LayoutDashboard (Forms)
- TrendingUp (Analytics)
- Server (Self-hosting)
- Cloud (Managed hosting)
- Lock (Data sovereignty)

---

## 5. Feature Spotlight Details

### 6 Core Features (Alternating Layout)

**Section Pattern:**
```
[Image Left] ←→ [Content Right]
  or
[Content Left] ←→ [Image Right]
```

**Each Feature Includes:**
- Lucide icon (accent color)
- Feature name (H3)
- Description (2-3 sentences, benefit-focused)
- Key capabilities (3-4 bullet points)
- Screenshot/mockup (1400x800px approx)

**Feature Order & Screenshots:**

1. **Multi-Role Dashboard** [Image Left]
   - Icon: Users
   - Screenshot: Admin dashboard with user list
   - Highlight: Three distinct user roles (USER, ADMIN, SECURITY)

2. **Event Management** [Image Right]
   - Icon: Calendar
   - Screenshot: Event creation form
   - Highlight: OPEN/APPROVAL/PRIVATE access levels

3. **QR Check-In System** [Image Left]
   - Icon: QrCode
   - Screenshot: QR code + mobile scanner
   - Highlight: Contactless security verification

4. **Approval Workflows** [Image Right]
   - Icon: CheckCircle
   - Screenshot: Approval queue interface
   - Highlight: Application review + appeals

5. **Dynamic Form Builder** [Image Left]
   - Icon: LayoutDashboard
   - Screenshot: Form builder with drag-drop
   - Highlight: 8 custom field types

6. **Real-Time Analytics** [Image Right]
   - Icon: TrendingUp
   - Screenshot: Analytics dashboard
   - Highlight: Event insights + attendance tracking

---

## 6. Screenshots Needed (From User)

**Quality Requirements:**
- Resolution: 1920x1080 or 1600x900
- Clean data (no test names like "Test User 123")
- Active state (not empty/placeholder screens)
- Light/dark theme: (specify which you prefer)

**6 Screenshots:**

1. **Admin Dashboard** - User management view with list of users
2. **Event Creation** - Form showing event details + access level selector
3. **QR System** - Split view: QR code display + mobile scanner in action
4. **Approval Queue** - List of pending applications with approve/deny actions
5. **Form Builder** - Interface showing drag-drop form fields
6. **Analytics Dashboard** - Charts/graphs showing event statistics

**Delivery**: Share via file upload or image hosting when ready

---

## 7. Success Metrics

**Primary Goal**: Demo sign-ups via https://ems.vividverseglobal.com/

**Secondary Goals**:
- Time on page > 2 minutes
- Scroll depth > 80%
- Contact form submissions (nuaym@vividverseglobal.com)

**Future Tracking** (post-launch):
- Add Google Analytics event tracking
- Track demo conversion rate
- Monitor feature section engagement

---

## Next Steps

See **TODO.md** for complete implementation checklist.

**Current Focus:**
1. User reviews PLAN.md - Approve architecture + copy strategy
2. Write all copy (see TODO.md Phase 2)
3. Build hero section with fixed gradient effect
4. Iterate through TODO.md phases sequentially

**Questions for User:**
- Does this technical architecture make sense?
- Any sections missing or unnecessary?
- Preferred theme for screenshots (light/dark)?
- Timeline expectations?
