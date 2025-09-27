"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Mic, 
  Palette, 
  Video, 
  Share2, 
  Calendar, 
  Compass,
  Music,
  Camera,
  Megaphone,
  Sparkles,
  Monitor,
  HeadphonesIcon,
  CheckCircle
} from "lucide-react"

const services = [
  {
    id: "recording",
    icon: Mic,
    title: "Recording Studio Services",
    subtitle: "Professional Sound Engineering",
    description: "State-of-the-art recording facilities with experienced engineers who understand your vision.",
    features: [
      "24-track analog and digital recording",
      "Professional mixing and mastering",
      "Live room for full bands",
      "Isolation booths for vocals",
      "Vintage and modern equipment",
      "Remote collaboration options"
    ],
    pricing: "Starting at $150/hour"
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding & Visual Identity",
    subtitle: "Aesthetic Alchemy",
    description: "Complete visual identity development that captures your essence and speaks to your audience.",
    features: [
      "Logo design and brand guidelines",
      "Album artwork and singles covers",
      "Merchandise design",
      "Press kit materials",
      "Social media templates",
      "Website design consultation"
    ],
    pricing: "Packages from $2,500"
  },
  {
    id: "video",
    icon: Video,
    title: "Music Video Production",
    subtitle: "Visual Storytelling",
    description: "From concept to final cut, we bring your music to life through compelling visual narratives.",
    features: [
      "Concept development and storyboarding",
      "Professional cinematography",
      "Location scouting",
      "Post-production and color grading",
      "Visual effects and animation",
      "Multi-format delivery"
    ],
    pricing: "Starting at $5,000"
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Content",
    subtitle: "Digital Presence",
    description: "Authentic content creation and strategy to build genuine connections with your audience.",
    features: [
      "Content calendar planning",
      "Photo and video shoots",
      "Reels and TikTok creation",
      "Story highlights design",
      "Engagement strategy",
      "Analytics and optimization"
    ],
    pricing: "Monthly retainers from $1,500"
  },
  {
    id: "events",
    icon: Calendar,
    title: "Event Coordination",
    subtitle: "Memorable Experiences",
    description: "From intimate showcases to full-scale productions, we handle every detail.",
    features: [
      "Venue sourcing and booking",
      "Production management",
      "Artist hospitality",
      "Marketing and promotion",
      "Ticketing solutions",
      "Live streaming setup"
    ],
    pricing: "Custom quotes available"
  },
  {
    id: "direction",
    icon: Compass,
    title: "Art Direction Consulting",
    subtitle: "Creative Vision",
    description: "Strategic creative guidance to ensure your artistic vision is fully realized.",
    features: [
      "Creative concept development",
      "Campaign planning",
      "Aesthetic consultation",
      "Collaboration facilitation",
      "Project timeline management",
      "Industry connections"
    ],
    pricing: "Starting at $200/hour"
  }
]

const additionalServices = [
  { icon: Music, name: "Music Distribution", description: "Get your music on all major platforms" },
  { icon: Camera, name: "Photography", description: "Professional shoots for press and promotion" },
  { icon: Megaphone, name: "PR & Marketing", description: "Press releases and media outreach" },
  { icon: Sparkles, name: "Stage Design", description: "Create unforgettable live experiences" },
  { icon: Monitor, name: "Web Development", description: "Custom websites and online platforms" },
  { icon: HeadphonesIcon, name: "Podcast Production", description: "Full podcast recording and editing" }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary pt-24">
      {/* Hero Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-gothic text-accent mb-6 text-shadow-glow">
              Sacred Services
            </h1>
            <p className="text-xl font-medieval text-muted-foreground max-w-3xl mx-auto">
              Comprehensive creative solutions for artists who refuse to be confined. 
              From conception to execution, we manifest your vision into reality.
            </p>
          </motion.div>

          {/* Main Services Grid */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center mb-4">
                    <service.icon className="w-12 h-12 text-accent mr-4" />
                    <div>
                      <h2 className="text-3xl font-gothic text-accent">{service.title}</h2>
                      <p className="text-sm font-medieval text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-foreground/80 mb-6 font-medieval">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-medieval">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-gothic text-accent">{service.pricing}</p>
                    <Link
                      href="/contact"
                      className="px-6 py-2 bg-accent text-secondary font-medieval rounded-lg hover:bg-accent/90 transition-all btn-alchemic"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-accent/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-4xl font-gothic text-accent text-center mb-12">
              Additional Offerings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service) => (
                <div
                  key={service.name}
                  className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all"
                >
                  <service.icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-gothic text-accent mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground font-medieval">{service.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gradient-radial from-accent/10 via-transparent to-transparent rounded-lg p-12"
          >
            <h2 className="text-4xl font-gothic text-accent mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg font-medieval text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us help you manifest your creative vision. Contact us to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-accent text-secondary font-medieval text-lg rounded-lg hover:bg-accent/90 transition-all btn-alchemic"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3 border-2 border-accent text-accent font-medieval text-lg rounded-lg hover:bg-accent/10 transition-all"
              >
                View Full Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
