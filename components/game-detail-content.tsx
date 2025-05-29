"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, Users, Clock } from "lucide-react"
import { notFound } from "next/navigation"
import Script from "next/script"

// This would typically come from a database or API
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
    heroImage: "/images/City-Car-Stunt3.jpg",
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
    longDescription: "Big Snake.io is one of the most popular .io online multiplayer games that offers hours of fun with its leaderboards and action-packed gameplay. Glide into a world of glowing balls, worms and insatiable hunger. Only the most cautious players survive in Slither.io, the competition is constant. You can't trust anyone, everyone will try to eat you! Avoid other players if you are leading their cunning plan against you, and try to collect as many glowing balls as possible! In contrast to the intense gameplay, Slither.io's controls are pretty straightforward. You only need to use your mouse to move around the map or your finger in the case of a touch screen. Use the LEFT MOUSE BUTTON to activate acceleration. Give your character a name before starting the game. If you want to, you can also change and customize the appearance of your worm. There are many colorful options to choose from. When you first start the game, you will be just a tiny worm, but by absorbing the glowing balls, you will grow quickly. Beware of other players! Touching their body will turn your",
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
    title: "Basketball Stars",
    slug: "basketball-stars",
    image: "/images/Bubble-Shooter-Candies.jpg",
    category: "Sports",
    description: "Show off your basketball skills in this sports game!",
    longDescription: "Shoot hoops and compete in tournaments to become the ultimate basketball champion.",
    rating: 4.6,
    players: "3.1M",
    playTime: "10-30 min",
    heroImage: "/images/Bubble-Shooter-Candies.jpg",
  },
]

export default function GameDetailContent() {
  const searchParams = useSearchParams()
  const gameName = searchParams.get("name")

  if (!gameName) {
    notFound()
  }

  const game = games.find((g) => g.slug === gameName)

  if (!game) {
    notFound()
  }

  const handlePlayGame = () => {
    window.location.href = `/games/${game.slug}/index.html`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-red-500">GAME</span>
              <span className="text-yellow-400">TORY</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
                HOME
              </Link>
              <Link href="/about" className="text-white hover:text-yellow-400 transition-colors">
                ABOUT US
              </Link>
              <Link href="/developer" className="text-white hover:text-yellow-400 transition-colors">
                DEVELOPER
              </Link>
              <Link href="/affiliates" className="text-white hover:text-yellow-400 transition-colors">
                AFFILIATES
              </Link>
              <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors">
                CONTACT US
              </Link>
            </nav>
            <Link href="/">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Games
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Example: Add this to a page or component where you want ads */}
<ins className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client="ca-pub-2242518759668754"
     data-ad-slot="f08c47fec0942fa0"  // Replace with your actual ad slot ID
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<Script id="adsbygoogle-init" strategy="afterInteractive">
  {`(adsbygoogle = window.adsbygoogle || []).push({});`}
</Script>

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${game.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-wider">{game.title}</h1>

          {/* Game Icon */}
          <div className="mb-8">
            <div className="inline-block p-4 bg-orange-500 rounded-3xl shadow-2xl">
              <img
                src={game.image || "/placeholder.svg"}
                alt={game.title}
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl"
              />
            </div>
          </div>

          {/* Play Button */}
          <Button
            onClick={handlePlayGame}
            className="bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-bold px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            PLAY GAME
          </Button>

          {/* Game Stats */}
          <div className="flex justify-center items-center gap-8 mt-8 text-white">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{game.rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{game.players}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{game.playTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Game Description */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold uppercase">
                {game.category}
              </span>
            </div>

            <div className="text-white/90 leading-relaxed space-y-4">
              {game.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Game Features:</h3>
              <ul className="text-white/80 space-y-2">
                <li>
                  • <strong className="text-yellow-400">Simple yet exciting gameplay</strong>
                </li>
                <li>
                  • <strong className="text-yellow-400">Colorful graphics</strong>
                </li>
                <li>
                  • <strong className="text-yellow-400">Fun sound effects</strong> that make every level engaging and
                  enjoyable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
