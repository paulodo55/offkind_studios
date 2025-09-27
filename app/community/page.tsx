"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Users, 
  MessageCircle, 
  Calendar,
  BookOpen,
  Sparkles,
  Trophy,
  Heart,
  TrendingUp,
  Star
} from "lucide-react"

const communityFeatures = [
  {
    icon: MessageCircle,
    title: "Artist Forums",
    description: "Connect with fellow creators, share experiences, and collaborate on projects.",
    members: "2.3k members"
  },
  {
    icon: Calendar,
    title: "Exclusive Events",
    description: "Members-only showcases, workshops, and networking sessions.",
    members: "48 events/year"
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description: "Access tutorials, industry insights, and creative resources.",
    members: "500+ resources"
  },
  {
    icon: Sparkles,
    title: "Creative Challenges",
    description: "Monthly challenges to push your creative boundaries.",
    members: "New monthly"
  }
]

const recentPosts = [
  {
    id: 1,
    title: "The Art of Dark Ambient Production",
    author: "Luna Mystica",
    category: "Tutorial",
    date: "2 days ago",
    likes: 234,
    comments: 45
  },
  {
    id: 2,
    title: "Finding Your Unorthodox Voice",
    author: "Shadow Weaver",
    category: "Discussion",
    date: "5 days ago",
    likes: 189,
    comments: 67
  },
  {
    id: 3,
    title: "DIY Music Video Techniques",
    author: "Crimson Sigil",
    category: "Guide",
    date: "1 week ago",
    likes: 456,
    comments: 89
  },
  {
    id: 4,
    title: "Building a Cult Following",
    author: "Midnight Oracle",
    category: "Strategy",
    date: "2 weeks ago",
    likes: 678,
    comments: 123
  }
]

const upcomingEvents = [
  {
    title: "Full Moon Showcase",
    date: "December 15, 2024",
    type: "Live Performance",
    spots: "12 spots left"
  },
  {
    title: "Production Masterclass",
    date: "December 20, 2024",
    type: "Workshop",
    spots: "8 spots left"
  },
  {
    title: "Artist Networking Night",
    date: "January 5, 2025",
    type: "Networking",
    spots: "25 spots left"
  },
  {
    title: "Visual Arts Collaboration",
    date: "January 12, 2025",
    type: "Creative Session",
    spots: "5 spots left"
  }
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary pt-24">
      {/* Hero Section */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-gothic text-accent mb-6 text-shadow-glow">
              The Inner Circle
            </h1>
            <p className="text-xl font-medieval text-muted-foreground max-w-3xl mx-auto">
              A sanctuary for unorthodox artists to connect, collaborate, and create without boundaries.
            </p>
          </motion.div>

          {/* Community Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all"
              >
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-gothic text-accent mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-medieval mb-3">
                  {feature.description}
                </p>
                <p className="text-xs text-accent/60 font-medieval">{feature.members}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Posts */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between mb-6"
              >
                <h2 className="text-3xl font-gothic text-accent">Recent Discussions</h2>
                <Link
                  href="/community/forum"
                  className="text-sm font-medieval text-accent hover:text-accent/80"
                >
                  View All →
                </Link>
              </motion.div>

              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medieval rounded-full mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-gothic text-accent">{post.title}</h3>
                      <p className="text-sm text-muted-foreground font-medieval mt-1">
                        by {post.author} • {post.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6"
              >
                <h3 className="text-2xl font-gothic text-accent mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-2 border-accent/50 pl-4">
                      <h4 className="text-lg font-gothic text-accent">{event.title}</h4>
                      <p className="text-xs text-muted-foreground font-medieval">
                        {event.date} • {event.type}
                      </p>
                      <p className="text-xs text-accent/60 font-medieval mt-1">{event.spots}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/events"
                  className="block text-center mt-6 px-4 py-2 bg-accent text-secondary font-medieval rounded-lg hover:bg-accent/90 transition-all btn-alchemic"
                >
                  View All Events
                </Link>
              </motion.div>

              {/* Community Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-radial from-accent/20 to-transparent rounded-lg p-6"
              >
                <h3 className="text-2xl font-gothic text-accent mb-4">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm font-medieval text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-accent" />
                      Total Members
                    </span>
                    <span className="text-accent font-gothic">2,347</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm font-medieval text-muted-foreground">
                      <TrendingUp className="w-4 h-4 mr-2 text-accent" />
                      Active This Week
                    </span>
                    <span className="text-accent font-gothic">892</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm font-medieval text-muted-foreground">
                      <Star className="w-4 h-4 mr-2 text-accent" />
                      Featured Artists
                    </span>
                    <span className="text-accent font-gothic">48</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm font-medieval text-muted-foreground">
                      <Trophy className="w-4 h-4 mr-2 text-accent" />
                      Projects Completed
                    </span>
                    <span className="text-accent font-gothic">567</span>
                  </div>
                </div>
              </motion.div>
            </div>
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
              Ready to Join the Inner Circle?
            </h2>
            <p className="text-lg font-medieval text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with artists who understand your vision. Share, learn, and grow in a community that celebrates the unorthodox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-3 bg-accent text-secondary font-medieval text-lg rounded-lg hover:bg-accent/90 transition-all btn-alchemic"
              >
                Join the Community
              </Link>
              <Link
                href="/community/guidelines"
                className="px-8 py-3 border-2 border-accent text-accent font-medieval text-lg rounded-lg hover:bg-accent/10 transition-all"
              >
                Community Guidelines
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
