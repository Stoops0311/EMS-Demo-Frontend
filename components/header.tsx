"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Vivid Verse Global" width={56} height={56} className="size-14" />
      </div>

      {/* Contact Button */}
      <Link
        href="mailto:info@vividverseglobal.com"
        className="px-8 py-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-foreground dark:text-foreground font-normal text-sm transition-all duration-200 hover:bg-primary/20 cursor-pointer"
      >
        Contact Us
      </Link>
    </header>
  )
}
