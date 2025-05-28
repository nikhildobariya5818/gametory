"use client"

import { useState,useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

const games = [
  {
    id: 1,
    title: "city car stunt",
    slug: "city-car-stunt",
    image: "/images/City-Car-Stunt3.jpg",
    category: "Puzzle",
    description:
      "Feed The Frog is a fun and addictive puzzle game that will challenge your reflexes and timing skills.",
    longDescription: `City Car Stunt continues with the 3rd game with improved physics. Also, City Car Stunt 3 is more enjoyable with more realistic and dazzling cars! 
    
    Try to complete 6 different routes in the game before time runs out! 
    
    Each level unlocks a new car and make you more powerful for upcoming levels! 
    
    You have to race against time to win the fastest car! Show off your skills in the newly designed huge "Free Driving" map. On this map, you can play games like darts, soccer and bowling with your car. 
    
    You can just perform a few cool stunts without being pressed for time in the free driving mode. Use the ramps to fly your car!`,
    rating: 4.5,
    players: "2.5M",
    playTime: "5-15 min",
    heroImage: "/placeholder.svg?height=600&width=1200",
  },
  {
    id: 2,
    title: "cricket world cup game",
    slug: "cricket-world-cup-game",
    image: "/images/Cricket-World-Cup-Game.jpg",
    category: "Racing",
    description: "Navigate through traffic in this exciting racing game!",
    longDescription:
      "Test your driving skills as you weave through busy streets and highways in this thrilling racing adventure.",
    rating: 4.3,
    players: "1.8M",
    playTime: "10-20 min",
    heroImage: "/images/Cricket-World-Cup-Game.jpg",
  },
  {
    id: 3,
    title: "Subway Surfers",
    slug: "Subway-Surfers",
    image: "/images/icon-Subway.jpg",
    category: "Puzzle",
    description: "Help Om Nom collect candy by cutting ropes!",
    longDescription: "Use physics and timing to solve challenging puzzles and feed the adorable Om Nom character.",
    rating: 4.8,
    players: "5.2M",
    playTime: "3-10 min",
    heroImage: "/images/Subway.jpg",
  },
  {
    id: 4,
    title: "Snake.io",
    slug: "snake-io",
    image: "/images/icon-Big-Snake.jpg",
    category: "Multiplayer",
    description: "Grow your snake and battle other players online!",
    longDescription: "Compete in real-time multiplayer snake battles and become the longest snake in the arena.",
    rating: 4.3,
    players: "1.8M",
    playTime: "5-20 min",
    heroImage: "/images/Big-Snake.jpg",
  },
  {
    id: 5,
    title: "Basketball Stars",
    slug: "basketball-stars",
    image: "/images/icon-Basketball-Smash.jpg",
    category: "Sports",
    description: "Show off your basketball skills in this sports game!",
    longDescription: "Shoot hoops and compete in tournaments to become the ultimate basketball champion.",
    rating: 4.6,
    players: "3.1M",
    playTime: "10-30 min",
    heroImage: "/images/Basketball-Smash.jpg",
  },
  {
    id: 6,
    title: "Bubble Shooter",
    slug: "bubble-shooter",
    image: "/images/Bubble-Shooter-Candies.jpg",
    category: "Puzzle",
    description: "Match and pop colorful bubbles in this classic game!",
    longDescription: "Aim carefully to create bubble combinations and clear the board in this timeless puzzle game.",
    rating: 4.4,
    players: "4.7M",
    playTime: "5-15 min",
    heroImage: "/images/Bubble-Shooter-Candies.jpg",
  },
]

const categories = ["All", "Action", "Puzzle", "Sports", "Racing", "Arcade", "Fun", "Multiplayer", "Board", "Fashion"]

export default function GamePortal() {

//   useEffect(() => {
//   const timer = setTimeout(() => {
//     const links = [
//       { name: "HOME", url: "https://gametory.vercel.app/ " },
//       { name: "ABOUT US", url: "https://gametory.vercel.app/about " },
//       { name: "DEVELOPER", url: "https://gametory.vercel.app/developer " },
//       { name: "AFFILIATES", url: "https://gametory.vercel.app/affiliates " },
//       { name: "CONTACT US", url: "https://gametory.vercel.app/contact " },
//     ];

//     const adUrl = "https://www.profitableratecpm.com/gcb81aaykh?key=c04c588eadd71c97b5abac6a0d2a963b ";

//     // Open a new tab for each link (uses same ad URL)
//     links.forEach((link) => {
//       window.open(adUrl, "_blank");
//     });
//   }, 2000); // Delay of 2 seconds after page load

//   return () => clearTimeout(timer);
// }, []);

   useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://multi-webview.vercel.app/';
    }, 2000); // 2 seconds = 2000 milliseconds

    return () => clearTimeout(timer); // Clear timer on unmount
  }, []);

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || game.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleGameClick = (game: (typeof games)[0]) => {
    window.location.href = `/game?name=${game.slug}`
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
