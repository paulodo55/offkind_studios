"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { 
  ShoppingCart, 
  Star,
  TrendingUp,
  Package,
  Truck,
  Shield,
  CreditCard
} from "lucide-react"

const products = [
  {
    id: 1,
    name: "Alchemist's Hoodie",
    category: "Apparel",
    price: 89.99,
    image: "/api/placeholder/400/500",
    featured: true,
    bestseller: true,
    description: "Premium black hoodie with gold alchemic symbols"
  },
  {
    id: 2,
    name: "Sigil Pendant",
    category: "Accessories",
    price: 45.00,
    image: "/api/placeholder/400/500",
    featured: true,
    bestseller: false,
    description: "Handcrafted brass pendant with mystical engravings"
  },
  {
    id: 3,
    name: "Limited Vinyl Collection",
    category: "Music",
    price: 125.00,
    image: "/api/placeholder/400/500",
    featured: false,
    bestseller: true,
    description: "Exclusive pressings from our featured artists"
  },
  {
    id: 4,
    name: "Gothic T-Shirt",
    category: "Apparel",
    price: 35.00,
    image: "/api/placeholder/400/500",
    featured: false,
    bestseller: false,
    description: "100% organic cotton with gothic typography"
  },
  {
    id: 5,
    name: "Studio Session Voucher",
    category: "Services",
    price: 500.00,
    image: "/api/placeholder/400/500",
    featured: true,
    bestseller: false,
    description: "4-hour recording session at Off Kind Studios"
  },
  {
    id: 6,
    name: "Mystical Art Print Set",
    category: "Art",
    price: 75.00,
    image: "/api/placeholder/400/500",
    featured: false,
    bestseller: true,
    description: "Set of 5 limited edition prints by resident artists"
  },
  {
    id: 7,
    name: "Producer Pack",
    category: "Digital",
    price: 99.99,
    image: "/api/placeholder/400/500",
    featured: true,
    bestseller: false,
    description: "Exclusive samples and presets from Off Kind producers"
  },
  {
    id: 8,
    name: "Ritual Candle Set",
    category: "Accessories",
    price: 55.00,
    image: "/api/placeholder/400/500",
    featured: false,
    bestseller: false,
    description: "Hand-poured soy candles with mystical scents"
  }
]

const categories = ["All", "Apparel", "Accessories", "Music", "Art", "Digital", "Services"]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cartCount, setCartCount] = useState(0)

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory)

  const addToCart = () => {
    setCartCount(prev => prev + 1)
    // In production, this would add to actual cart state/database
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
              The Sanctum Shop
            </h1>
            <p className="text-xl font-medieval text-muted-foreground max-w-3xl mx-auto">
              Exclusive merchandise, music, and mystical artifacts for the devoted
            </p>
          </motion.div>

          {/* Shop Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { icon: Truck, label: "Free Shipping", desc: "Orders over $100" },
              { icon: Shield, label: "Secure Payment", desc: "SSL Encrypted" },
              { icon: Package, label: "Fast Dispatch", desc: "Within 24 hours" },
              { icon: CreditCard, label: "Easy Returns", desc: "30-day policy" }
            ].map((feature, index) => (
              <div
                key={feature.label}
                className="flex items-center space-x-3 bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-4"
              >
                <feature.icon className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm font-gothic text-accent">{feature.label}</p>
                  <p className="text-xs text-muted-foreground font-medieval">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 font-medieval rounded-lg transition-all ${
                  selectedCategory === category
                    ? "bg-accent text-secondary"
                    : "bg-secondary/50 text-muted-foreground hover:bg-accent/20 hover:text-accent border border-accent/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Shopping Cart Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed top-24 right-8 z-30"
          >
            <button className="relative bg-accent text-secondary p-3 rounded-full hover:bg-accent/90 transition-all">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-gothic">
                  {cartCount}
                </span>
              )}
            </button>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg overflow-hidden hover:border-accent/50 transition-all">
                  {/* Product Badges */}
                  <div className="absolute top-4 left-4 z-10 space-y-2">
                    {product.featured && (
                      <span className="block px-3 py-1 bg-accent text-secondary text-xs font-medieval rounded-full">
                        Featured
                      </span>
                    )}
                    {product.bestseller && (
                      <span className="block px-3 py-1 bg-primary text-white text-xs font-medieval rounded-full">
                        Bestseller
                      </span>
                    )}
                  </div>

                  {/* Product Image */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-accent/20 to-primary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => addToCart()}
                        className="px-6 py-2 bg-accent text-secondary font-medieval rounded-lg hover:bg-accent/90 transition-all transform -translate-y-2 group-hover:translate-y-0"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground font-medieval mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-gothic text-accent mb-2">{product.name}</h3>
                    <p className="text-xs text-muted-foreground font-medieval mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-gothic text-accent">
                        ${product.price.toFixed(2)}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < 4 ? "text-accent fill-accent" : "text-accent/30"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gradient-radial from-accent/10 via-transparent to-transparent rounded-lg p-12"
          >
            <h2 className="text-4xl font-gothic text-accent mb-4">
              Exclusive Member Benefits
            </h2>
            <p className="text-lg font-medieval text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our inner circle for early access to limited editions, member-only discounts, and exclusive releases.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center px-8 py-3 bg-accent text-secondary font-medieval text-lg rounded-lg hover:bg-accent/90 transition-all btn-alchemic"
            >
              Become a Member
              <TrendingUp className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
