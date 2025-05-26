"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import GameModal from "@/components/game-modal"

const games = [
  {
    id: 1,
    title: "Racing Limits",
    image: "/images/racing-limits.avif",
    category: "Racing",
    iframeUrl: "https://www.crazygames.com/embed/racing-limits",
  },
  {
    id: 2,
    title: "CG FC 25",
    image: "/images/CGFC25.avif",
    category: "Sports",
    iframeUrl: "https://www.crazygames.com/embed/cg-fc-24",
  },
  {
    id: 3,
    title: "Gully Cricket",
    image: "/images/gully-cricket.avif",
    category: "Sports",
    iframeUrl: "https://www.crazygames.com/embed/gully-cricket",
  },
  {
    id: 4,
    title: "Bus and Subway Runner",
    image: "/images/busandsubwayrunner.avif",
    category: "Arcade",
    iframeUrl: "https://www.crazygames.com/embed/bus-and-subway-runner",
  },
  {
    id: 5,
    title: "Count Masters: Stickman Games",
    image: "/images/count-masters-stickman-games.avif",
    category: "Arcade",
    iframeUrl: "https://www.crazygames.com/embed/count-masters-stickman-games",
  },
  {
    id: 6,
    title: "Snake.io",
    image: "/images/snake-io-cover.avif",
    category: "Multiplayer",
    iframeUrl: "https://www.crazygames.com/embed/worms-zone",
  },
  {
    id: 7,
    title: "Words of Wonders",
    image: "/images/words-of-wonders.avif",
    category: "Puzzle",
    iframeUrl: "https://www.crazygames.com/embed/words-of-wonders",
  },
  {
    id: 8,
    title: "Block Puzzle",
    image: "/images/Block-Puzzle.avif",
    category: "Puzzle",
    iframeUrl: "https://www.crazygames.com/embed/block-puzzle-plus",
  },
  {
    id: 9,
    title: "Space Waves",
    image: "/images/space-waves.avif",
    category: "Casual",
    iframeUrl: "https://www.crazygames.com/embed/space-waves",
  },
  {
    id: 10,
    title: "Ragdoll Archers",
    image: "/images/ragdoll-archers.avif",
    category: "Arcade",
    iframeUrl: "https://www.crazygames.com/embed/ragdoll-archers",
  },
  {
    id: 11,
    title: "Fortzone Battle Royale",
    image: "/images/fortzone-battle-royale-xkd.avif",
    category: "Action",
    iframeUrl: "https://www.crazygames.com/embed/fortzone-battle-royale-xkd",
  },
  {
    id: 12,
    title: "Squid Game Online",
    image: "/images/squid-game-online.avif",
    category: "Action",
    iframeUrl: "https://www.crazygames.com/embed/squid-game-online",
  },
]

const categories = ["All", "Action", "Puzzle", "Sports", "Racing", "Arcade", "Multiplayer"]

export default function GamePortal() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState<(typeof games)[0] | null>(null)
  const { theme, setTheme } = useTheme()

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || game.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleGameClick = (game: (typeof games)[0]) => {
    setSelectedGame(game)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:from-slate-100 light:via-purple-100 light:to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 dark:bg-black/20 light:bg-white/80 backdrop-blur-sm border-b border-white/10 dark:border-white/10 light:border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-red-500">GAME</span>
                <span className="text-yellow-400">TORY</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                HOME
              </Link>
              <Link
                href="/about"
                className="text-white dark:text-white light:text-gray-700 hover:text-yellow-400 transition-colors"
              >
                ABOUT US
              </Link>
              <Link
                href="/developer"
                className="text-white dark:text-white light:text-gray-700 hover:text-yellow-400 transition-colors"
              >
                DEVELOPER
              </Link>
              <Link
                href="/affiliates"
                className="text-white dark:text-white light:text-gray-700 hover:text-yellow-400 transition-colors"
              >
                AFFILIATES
              </Link>
              <Link
                href="/contact"
                className="text-white dark:text-white light:text-gray-700 hover:text-yellow-400 transition-colors"
              >
                CONTACT US
              </Link>
            </nav>

            {/* Theme Toggle, Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-white dark:text-white light:text-gray-700 hover:text-yellow-400"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white dark:text-white light:text-gray-700 hover:text-yellow-400"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white dark:text-white light:text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/10 dark:border-white/10 light:border-gray-200 pt-4">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  HOME
                </Link>
                <Link
                  href="/about"
                  className="text-white dark:text-white light:text-gray-700 hover:text-yellow-400 transition-colors"
                >
                  ABOUT US
                </Link>
                <Link
                  href="/developer"
                  className="text-white dark:text-white light:text-gray-700 hover:text-yellow-400 transition-colors"
                >
                  DEVELOPER
                </Link>
                <Link
                  href="/affiliates"
                  className="text-white dark:text-white light:text-gray-700 hover:text-yellow-400 transition-colors"
                >
                  AFFILIATES
                </Link>
                <Link
                  href="/contact"
                  className="text-white dark:text-white light:text-gray-700 hover:text-yellow-400 transition-colors"
                >
                  CONTACT US
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-white light:text-gray-800 mb-8">
          PLAY YOUR FAVORITE GAME
        </h1>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-300 text-white dark:text-white light:text-gray-700 placeholder:text-gray-400 focus:border-yellow-400"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                  : "border-white/20 dark:border-white/20 light:border-gray-300 text-white dark:text-white light:text-gray-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Games Grid */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredGames.map((game) => (
            <Card
              key={game.id}
              className="group cursor-pointer bg-white/5 dark:bg-white/5 light:bg-white border-white/10 dark:border-white/10 light:border-gray-200 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              onClick={() => handleGameClick(game)}
            >
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-sm truncate">{game.title}</h3>
                    <p className="text-xs text-gray-300">{game.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/60 dark:text-white/60 light:text-gray-500 text-lg">
              No games found matching your criteria.
            </p>
          </div>
        )}
      </section>

      {/* Game Modal */}
      {selectedGame && <GameModal game={selectedGame} isOpen={!!selectedGame} onClose={() => setSelectedGame(null)} />}

      {/* Footer */}
      <footer className="relative z-10 bg-black/30 dark:bg-black/30 light:bg-gray-100 border-t border-white/10 dark:border-white/10 light:border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-red-500">GAME</span>
            <span className="text-yellow-400">TORY</span>
          </div>
          <p className="text-white/60 dark:text-white/60 light:text-gray-600 mb-4">Play the best free online games</p>
          <div className="flex justify-center space-x-6 text-sm text-white/60 dark:text-white/60 light:text-gray-600">
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
