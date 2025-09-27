"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Instagram,
  Twitter,
  Youtube,
  Music,
  Calendar,
  MessageSquare
} from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    details: "contact@offkindstudios.com",
    action: "Send Email",
    href: "mailto:contact@offkindstudios.com"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (323) 555-0100",
    action: "Call Now",
    href: "tel:+13235550100"
  },
  {
    icon: MapPin,
    title: "Studio",
    details: "Los Angeles, California",
    action: "Get Directions",
    href: "#"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "24/7 for the devoted",
    action: "Book Session",
    href: "/booking"
  }
]

const services = [
  "Recording Studio",
  "Music Production",
  "Video Production",
  "Branding & Design",
  "Event Coordination",
  "Artist Development",
  "Social Media",
  "Other"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    timeline: ""
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate form submission
    setTimeout(() => {
      setStatus("success")
      setTimeout(() => {
        setStatus("idle")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
          timeline: ""
        })
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary pt-24">
      {/* Hero Section */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-7xl font-gothic text-accent mb-6 text-shadow-glow">
              Summon Us
            </h1>
            <p className="text-xl font-medieval text-muted-foreground max-w-3xl mx-auto">
              Ready to manifest your unorthodox vision? Reach out and let&apos;s create something extraordinary together.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all"
              >
                <method.icon className="w-10 h-10 text-accent mb-4 group-hover:animate-pulse-glow" />
                <h3 className="text-lg font-gothic text-accent mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground font-medieval mb-3">{method.details}</p>
                <span className="text-xs text-accent font-medieval group-hover:text-accent/80">
                  {method.action} →
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Main Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-8">
                <h2 className="text-3xl font-gothic text-accent mb-6">Begin Your Journey</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medieval text-muted-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background/50 border border-accent/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medieval text-muted-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background/50 border border-accent/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medieval text-muted-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background/50 border border-accent/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medieval text-muted-foreground mb-2">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background/50 border border-accent/30 rounded-lg text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medieval text-muted-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background/50 border border-accent/30 rounded-lg text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      >
                        <option value="">Select budget</option>
                        <option value="< $1,000">Less than $1,000</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="> $25,000">More than $25,000</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medieval text-muted-foreground mb-2">
                        Timeline
                      </label>
                      <input
                        type="text"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background/50 border border-accent/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="e.g., Next month, ASAP, Flexible"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medieval text-muted-foreground mb-2">
                      Tell Us Your Vision *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background/50 border border-accent/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                      placeholder="Describe your project, goals, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full px-8 py-4 bg-accent text-secondary font-medieval text-lg rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all btn-alchemic flex items-center justify-center"
                  >
                    {status === "idle" && (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                    {status === "loading" && "Summoning..."}
                    {status === "success" && "Message Sent Successfully!"}
                    {status === "error" && "Try Again"}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Quick Actions */}
              <div className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6">
                <h3 className="text-2xl font-gothic text-accent mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="/booking"
                    className="flex items-center justify-between p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-all"
                  >
                    <span className="flex items-center text-sm font-medieval text-accent">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Studio Time
                    </span>
                    <span className="text-accent">→</span>
                  </a>
                  <a
                    href="/faq"
                    className="flex items-center justify-between p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-all"
                  >
                    <span className="flex items-center text-sm font-medieval text-accent">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      View FAQ
                    </span>
                    <span className="text-accent">→</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-radial from-accent/20 to-transparent rounded-lg p-6">
                <h3 className="text-2xl font-gothic text-accent mb-4">Follow the Order</h3>
                <p className="text-sm text-muted-foreground font-medieval mb-4">
                  Stay connected with our latest projects and announcements.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-secondary transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-secondary transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-secondary transition-all"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-secondary transition-all"
                  >
                    <Music className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6">
                <p className="text-sm text-muted-foreground font-medieval italic mb-4">
                  &quot;Off Kind Studios understood our vision when no one else did. They helped us create something truly unorthodox and authentic.&quot;
                </p>
                <p className="text-sm font-gothic text-accent">
                  - Midnight Oracle
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
