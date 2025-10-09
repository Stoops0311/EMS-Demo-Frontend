# EMS - Event Management System

A modern event management system built for embassies and diplomatic missions, developed by Vivid Verse Global.

## 🌟 Features

- **Multi-Role Access Control** - Separate interfaces for attendees, administrators, and security personnel
- **Flexible Event Access Levels** - OPEN, APPROVAL, and PRIVATE event types
- **Contactless QR Check-In** - Secure QR code generation and mobile scanning
- **Streamlined Approval Workflows** - Efficient application review with bulk actions
- **Dynamic Form Builder** - Custom registration forms without code
- **Real-Time Analytics** - Event insights and attendance tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **UI**: React 19 with Tailwind CSS v4
- **Styling**: shadcn/ui components
- **Theme**: next-themes with light/dark mode
- **Animations**: @paper-design/shaders-react for gradient backgrounds
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/Stoops0311/EMS-Demo-Frontend.git

# Navigate to project directory
cd EMS-Demo-Frontend

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 Available Scripts

```bash
# Development server with Turbopack
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## 🎨 Project Structure

```
ems-frontend/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles with Tailwind v4
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── landing/          # Landing page sections
│   ├── header.tsx        # Site header
│   ├── hero-content.tsx  # Hero section
│   └── theme-toggle.tsx  # Theme switcher
├── lib/                   # Utility functions
│   └── utils.ts          # cn() helper
└── public/               # Static assets
    ├── logo.png          # Vivid Verse Global logo
    └── assets/           # Feature images
```

## 🌈 Theme System

The application uses a modern Tailwind CSS v4 setup with:
- Inline theme configuration in `globals.css`
- CSS variables for color tokens
- OKLCH color space for better perceptual uniformity
- next-themes for system preference detection
- Dark mode via class-based strategy

## 🔒 Self-Hosted Solution

EMS is designed for data sovereignty:
- Self-hosted infrastructure
- No data leaves your control
- Complete audit trails
- Diplomatic-grade security

## 📄 License

© 2025 Vivid Verse Global. All rights reserved.

## 📧 Contact

For inquiries: [info@vividverseglobal.com](mailto:info@vividverseglobal.com)

## 🔗 Links

- [Live Demo](https://ems-demo.vividverseglobal.com/)
- [Vivid Verse Global](https://vividverseglobal.com/)

---

Built with ❤️ by Vivid Verse Global
