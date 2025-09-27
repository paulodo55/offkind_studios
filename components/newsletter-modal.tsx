"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem("newsletter-modal-seen")
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000) // Show modal after 1 second
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("newsletter-modal-seen", "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setStatus("success")
        setTimeout(() => {
          handleClose()
        }, 2000)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative bg-secondary border-2 border-accent rounded-lg shadow-2xl max-w-md w-full p-8"
                 style={{
                   boxShadow: "0 0 100px rgba(212, 175, 55, 0.3), inset 0 0 50px rgba(212, 175, 55, 0.1)"
                 }}>
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-accent transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Decorative symbols */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-accent text-5xl font-gothic animate-pulse-glow">☾</div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-accent text-5xl font-gothic animate-pulse-glow">☽</div>

              {/* Content */}
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-gothic text-accent mb-2">
                  Join the Sanctum
                </h2>
                <p className="text-lg font-medieval text-muted-foreground mb-6">
                  Enter the realm of unorthodox artistry
                </p>

                <div className="space-y-4 mb-6">
                  <p className="text-sm text-foreground/80">
                    Subscribe to receive exclusive updates on:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✦ New artist showcases & releases</li>
                    <li>✦ Studio session opportunities</li>
                    <li>✦ Underground events & gatherings</li>
                    <li>✦ Creative industry insights</li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-accent/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />

                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full px-6 py-3 bg-accent text-secondary font-medieval text-lg rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all btn-alchemic"
                  >
                    {status === "loading" && "Inscribing..."}
                    {status === "success" && "Welcome to the Order"}
                    {status === "error" && "Try Again"}
                    {status === "idle" && "Enter the Sanctum"}
                  </button>
                </form>

                <p className="text-xs text-muted-foreground mt-4">
                  Your soul is safe with us. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
