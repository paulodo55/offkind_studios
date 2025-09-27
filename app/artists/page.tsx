"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { 
  Music, 
  Instagram, 
  Twitter, 
  Youtube,
  ExternalLink,
  Play,
  Filter
} from "lucide-react"

const artists = [
  {
    id: 1,
    name: "Midnight Oracle",
    genre: "Experimental Electronic",
    bio: "Pushing the boundaries of electronic music with dark, atmospheric soundscapes.",
    image: "/api/placeholder/400/400",
    featured: true,
    latestRelease: "Void Whispers EP",
    socials: {
      spotify: "#",
      instagram: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    id: 2,
    name: "The Void Collective",
    genre: "Post-Punk Revival",
    bio: "A sonic rebellion against the mundane, channeling raw energy through distorted guitars.",
    image: "/api/placeholder/400/400",
    featured: true,
    latestRelease: "Shadows Dance",
    socials: {
      spotify: "#",
      instagram: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    id: 3,
    name: "Luna Mystica",
    genre: "Dark Ambient",
    bio: "Ethereal soundscapes that transport listeners to otherworldly realms.",
    image: "/api/placeholder/400/400",
    featured: false,
    latestRelease: "Moonlit Rituals",
    socials: {
      spotify: "#",
      instagram: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    id: 4,
    name: "Crimson Sigil",
    genre: "Industrial Metal",
    bio: "Heavy, mechanical rhythms meet occult symbolism in a sonic assault.",
    image: "/api/placeholder/400/400",
    featured: true,
    latestRelease: "Blood Machine",
    socials: {
      spotify: "#",
      instagram: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    id: 5,
    name: "Astral Serpent",
    genre: "Psychedelic Rock",
    bio: "Mind-bending journeys through cosmic consciousness and earthly rebellion.",
    image: "/api/placeholder/400/400",
    featured: false,
    latestRelease: "Third Eye Visions",
    socials: {
      spotify: "#",
      instagram: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    id: 6,
    name: "Shadow Weaver",
    genre: "Darkwave",
    bio: "Synth-driven narratives of urban decay and neon-lit dystopias.",
    image: "/api/placeholder/400/400",
    featured: false,
    latestRelease: "Neon Prayers",
    socials: {
      spotify: "#",
      instagram: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    id: 7,
    name: "Obsidian Dream",
    genre: "Doom Metal",
    bio: "Slow, crushing riffs that explore the depths of human despair and transcendence.",
    image: "/api/placeholder/400/400",
    featured: true,
    latestRelease: "Eternal Void",
    socials: {
      spotify: "#",
      instagram: "#",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    id: 8,
    name: "Violet Phantom",
    genre: "Gothic Electronic",
    bio: "Haunting vocals layered over pulsating electronic beats and ethereal synths.",
    image: "/api/placeholder/400/400",
    featured: false,
    latestRelease: "Digital Séance",
    socials: {
      spotify: "#",
      instagram: "#",
      twitter: "#",
      youtube: "#"
    }
  }
]

const genres = ["All", "Electronic", "Rock", "Metal", "Ambient", "Experimental", "Gothic"]

export default function ArtistsPage() {
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [hoveredArtist, setHoveredArtist] = useState<number | null>(null)

  const filteredArtists = selectedGenre === "All" 
    ? artists 
    : artists.filter(artist => 
        artist.genre.toLowerCase().includes(selectedGenre.toLowerCase())
      )

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
              The Chosen Ones
            </h1>
            <p className="text-xl font-medieval text-muted-foreground max-w-3xl mx-auto">
              A collective of unorthodox artists who dare to venture beyond conventional boundaries, 
              creating art that speaks to the soul's darker truths.
            </p>
          </motion.div>

          {/* Genre Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-6 py-2 font-medieval rounded-lg transition-all ${
                  selectedGenre === genre
                    ? "bg-accent text-secondary"
                    : "bg-secondary/50 text-muted-foreground hover:bg-accent/20 hover:text-accent border border-accent/20"
                }`}
              >
                {genre}
              </button>
            ))}
          </motion.div>

          {/* Featured Artists */}
          {filteredArtists.some(a => a.featured) && (
            <>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-gothic text-accent mb-8 text-center"
              >
                Featured Artists
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {filteredArtists.filter(a => a.featured).map((artist, index) => (
                  <motion.div
                    key={artist.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                    onMouseEnter={() => setHoveredArtist(artist.id)}
                    onMouseLeave={() => setHoveredArtist(null)}
                  >
                    <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      {hoveredArtist === artist.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/60 flex items-center justify-center"
                        >
                          <Play className="w-16 h-16 text-accent" />
                        </motion.div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-gothic text-accent mb-1">{artist.name}</h3>
                        <p className="text-sm font-medieval text-muted-foreground mb-2">{artist.genre}</p>
                        <p className="text-xs text-foreground/80 mb-3">{artist.bio}</p>
                        <div className="flex space-x-3">
                          <a href={artist.socials.spotify} className="text-accent hover:text-accent/80">
                            <Music className="w-5 h-5" />
                          </a>
                          <a href={artist.socials.instagram} className="text-accent hover:text-accent/80">
                            <Instagram className="w-5 h-5" />
                          </a>
                          <a href={artist.socials.twitter} className="text-accent hover:text-accent/80">
                            <Twitter className="w-5 h-5" />
                          </a>
                          <a href={artist.socials.youtube} className="text-accent hover:text-accent/80">
                            <Youtube className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* All Artists Grid */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-gothic text-accent mb-8 text-center"
          >
            {selectedGenre === "All" ? "All Artists" : `${selectedGenre} Artists`}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtists.filter(a => !a.featured).map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-gothic text-accent mb-1">{artist.name}</h3>
                    <p className="text-sm font-medieval text-muted-foreground">{artist.genre}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm text-foreground/80 mb-4">{artist.bio}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground font-medieval">
                    Latest: {artist.latestRelease}
                  </p>
                  <div className="flex space-x-2">
                    <a href={artist.socials.spotify} className="text-muted-foreground hover:text-accent">
                      <Music className="w-4 h-4" />
                    </a>
                    <a href={artist.socials.instagram} className="text-muted-foreground hover:text-accent">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gradient-radial from-accent/10 via-transparent to-transparent rounded-lg p-12"
          >
            <h2 className="text-4xl font-gothic text-accent mb-4">
              Join Our Collective
            </h2>
            <p className="text-lg font-medieval text-muted-foreground mb-8 max-w-2xl mx-auto">
              Are you an artist who refuses to conform? Join Off Kind Studios and let your unorthodox vision flourish.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-accent text-secondary font-medieval text-lg rounded-lg hover:bg-accent/90 transition-all btn-alchemic"
            >
              Apply to Join
              <ExternalLink className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
