"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Sanctum" },
  { href: "/services", label: "Services" },
  { href: "/artists", label: "Artists" },
  { href: "/community", label: "Community" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
              <span className="text-2xl font-gothic text-accent">O</span>
            </div>
            <div>
              <h1 className="text-2xl font-gothic text-accent leading-none">Off Kind</h1>
              <p className="text-xs font-medieval text-muted-foreground">Studios</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-lg font-medieval transition-colors",
                  pathname === item.href
                    ? "text-accent"
                    : "text-muted-foreground hover:text-accent"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medieval text-muted-foreground hover:text-accent transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-accent text-secondary text-sm font-medieval rounded-lg hover:bg-accent/90 transition-colors btn-alchemic"
            >
              Join the Order
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-accent"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-secondary border-t border-border"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-lg font-medieval transition-colors",
                pathname === item.href
                  ? "text-accent"
                  : "text-muted-foreground hover:text-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 space-y-3 border-t border-border">
            <Link
              href="/login"
              className="block text-center px-4 py-2 text-sm font-medieval text-muted-foreground hover:text-accent transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="block text-center px-4 py-2 bg-accent text-secondary text-sm font-medieval rounded-lg hover:bg-accent/90 transition-colors"
            >
              Join the Order
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}
