"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Suchona%20%20Sishu%20%20Siksha%20%20Kendra%20logo-BDlEBvzCriQXfNX2vUkoCO4Vd07Jux.jpg"
              alt="Suchona Sishu Siksha Kendra logo"
              width={56}
              height={56}
              className="h-14 w-auto"
            />
            <div className="hidden sm:block font-bold text-sm text-primary">
              Suchona Sishu
              <br />
              Siksha Kendra
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-sm font-medium text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="#community" className="text-sm font-medium text-foreground hover:text-primary transition">
              Community
            </Link>
            <Link href="#resources" className="text-sm font-medium text-foreground hover:text-primary transition">
              Resources
            </Link>
            <Link href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition">
              Contact
            </Link>
            <Link
              href="#community"
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm hover:opacity-90 transition"
            >
              Join
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="#home" className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded">
              Home
            </Link>
            <Link href="#about" className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded">
              About
            </Link>
            <Link href="#community" className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded">
              Community
            </Link>
            <Link href="#resources" className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded">
              Resources
            </Link>
            <Link href="#contact" className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded">
              Contact
            </Link>
            <Link
              href="#community"
              className="block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm"
            >
              Join
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
