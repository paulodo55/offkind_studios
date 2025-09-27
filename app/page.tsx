"use client"

import { SpinningGraphic } from "@/components/spinning-graphic"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { 
  Mic, 
  Palette, 
  Video, 
  Share2, 
  Calendar, 
  Compass,
  ArrowRight,
  Star,
  Users,
  Zap
} from "lucide-react"

const services = [
  {
    icon: Mic,
    title: "Recording Studio",
    description: "Professional recording services with state-of-the-art equipment and experienced engineers.",
    href: "/services#recording"
  },
  {
    icon: Palette,
    title: "Branding & Visual",
    description: "Complete visual identity development from logos to album artwork.",
    href: "/services#branding"
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Music videos, documentaries, and visual content that tells your story.",
    href: "/services#video"
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Content strategy and creation for authentic digital presence.",
    href: "/services#social"
  },
  {
    icon: Calendar,
    title: "Event Coordination",
    description: "From intimate showcases to large-scale productions.",
    href: "/services#events"
  },
  {
    icon: Compass,
    title: "Art Direction",
    description: "Creative consulting to bring your vision to life.",
    href: "/services#direction"
  }
]

const featuredArtists = [
  {
    name: "Midnight Oracle",
    genre: "Experimental Electronic",
    image: "/api/placeholder/400/400",
    spotifyUrl: "#"
  },
  {
    name: "The Void Collective",
    genre: "Post-Punk Revival",
    image: "/api/placeholder/400/400",
    spotifyUrl: "#"
  },
  {
    name: "Luna Mystica",
    genre: "Dark Ambient",
    image: "/api/placeholder/400/400",
    spotifyUrl: "#"
  },
  {
    name: "Crimson Sigil",
    genre: "Industrial Metal",
    image: "/api/placeholder/400/400",
    spotifyUrl: "#"
  }
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -500])

  return (
    <div ref={containerRef}>
      {/* Hero Section with Spinning Graphic */}
      <SpinningGraphic />

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-5"
        >
          <div className="absolute top-1/4 right-1/4 text-9xl font-gothic text-accent">☉</div>
          <div className="absolute bottom-1/4 left-1/3 text-9xl font-gothic text-accent">♃</div>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-gothic text-accent mb-4">
              Our Sacred Services
            </h2>
            <p className="text-xl font-medieval text-muted-foreground max-w-2xl mx-auto">
              Complete creative solutions for artists who refuse to conform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.href}>
                  <div className="group bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                    <service.icon className="w-12 h-12 text-accent mb-4 group-hover:animate-pulse-glow" />
                    <h3 className="text-2xl font-gothic text-accent mb-2">{service.title}</h3>
                    <p className="text-muted-foreground font-medieval">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-gothic text-accent mb-4">
              The Chosen Ones
            </h2>
            <p className="text-xl font-medieval text-muted-foreground max-w-2xl mx-auto">
              Artists who dare to venture beyond the ordinary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredArtists.map((artist, index) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-gothic text-accent">{artist.name}</h3>
                    <p className="text-sm font-medieval text-muted-foreground">{artist.genre}</p>
                    <a
                      href={artist.spotifyUrl}
                      className="inline-flex items-center mt-2 text-accent hover:text-accent/80 transition-colors"
                    >
                      <Music className="w-4 h-4 mr-2" />
                      Listen Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/artists"
              className="inline-flex items-center px-8 py-3 bg-accent text-secondary font-medieval text-lg rounded-lg hover:bg-accent/90 transition-all btn-alchemic"
            >
              View All Artists
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Star, stat: "500+", label: "Projects Completed" },
              { icon: Users, stat: "200+", label: "Artists Supported" },
              { icon: Zap, stat: "24/7", label: "Creative Energy" },
              { icon: Compass, stat: "∞", label: "Genres Welcome" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-gothic text-accent mb-2">{item.stat}</div>
                <p className="text-sm font-medieval text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-radial from-accent/10 via-secondary to-secondary">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-gothic text-accent mb-6 text-shadow-glow">
            Ready to Create?
          </h2>
          <p className="text-xl font-medieval text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a collective of artists who refuse to be confined by conventional boundaries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-secondary font-medieval text-lg rounded-lg hover:bg-accent/90 transition-all btn-alchemic"
            >
              Book a Session
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-accent text-accent font-medieval text-lg rounded-lg hover:bg-accent/10 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-gothic text-accent mb-6">
                Join the Order
              </h2>
              <p className="text-lg font-medieval text-muted-foreground mb-6">
                Off Kind Studios isn't just a creative space—it's a sanctuary for those who dare to be different. 
                Our community thrives on authentic expression, pushing boundaries, and supporting fellow artists 
                in their unorthodox journeys.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Access to exclusive events and workshops",
                  "Connect with like-minded creative souls",
                  "Early access to new releases and projects",
                  "Member-only studio time discounts",
                  "Creative collaboration opportunities"
                ].map((item) => (
                  <li key={item} className="flex items-center text-muted-foreground font-medieval">
                    <span className="text-accent mr-3">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/community"
                className="inline-flex items-center px-6 py-3 bg-accent text-secondary font-medieval rounded-lg hover:bg-accent/90 transition-all btn-alchemic"
              >
                Enter the Community
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-accent/20 text-9xl font-gothic animate-spin-slower">☿</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}