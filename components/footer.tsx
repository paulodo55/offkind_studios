import Link from "next/link"
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Music, 
  Mail,
  MapPin
} from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "Youtube" },
  { icon: Music, href: "https://spotify.com", label: "Spotify" },
]

const footerLinks = {
  "The Order": [
    { label: "About", href: "/about" },
    { label: "Artists", href: "/artists" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  "Community": [
    { label: "Blog", href: "/blog" },
    { label: "Events", href: "/events" },
    { label: "Forum", href: "/community" },
    { label: "Shop", href: "/shop" },
  ],
  "Resources": [
    { label: "Booking", href: "/booking" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/support" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                <span className="text-2xl font-gothic text-accent">O</span>
              </div>
              <div>
                <h2 className="text-2xl font-gothic text-accent leading-none">Off Kind</h2>
                <p className="text-xs font-medieval text-muted-foreground">Studios</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 font-medieval">
              A creative sanctum for unorthodox artists seeking genuine expression.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-gothic text-accent mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medieval text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-medieval text-muted-foreground">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Los Angeles, California</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:contact@offkindstudios.com" className="hover:text-accent transition-colors">
                contact@offkindstudios.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Music className="w-4 h-4 text-accent" />
              <span>Open 24/7 for the devoted</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs font-medieval text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Off Kind Studios. All rights reserved to the unorthodox.
            </p>
            <div className="flex space-x-6 text-xs font-medieval">
              <Link href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Mystical Symbol */}
        <div className="flex justify-center mt-8">
          <div className="text-accent/20 text-6xl font-gothic animate-pulse-glow">☿</div>
        </div>
      </div>
    </footer>
  )
}
