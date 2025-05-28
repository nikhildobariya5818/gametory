import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Star, Users, Clock } from "lucide-react"
import { notFound } from "next/navigation"

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
    gameUrl: "https://html5.gamemonetize.co/y3roy6krania1gm0lezahh36rm51wk1u/",
  },
  
]

interface GamePageProps {
  params: Promise<{ slug: string }>
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params
  const game = games.find((g) => g.slug === slug)

  if (!game) {
    notFound()
  }

  const relatedGames = games.filter((g) => g.category === game.category && g.id !== game.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:from-slate-100 light:via-purple-100 light:to-slate-100">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 dark:bg-black/20 light:bg-white/80 backdrop-blur-sm border-b border-white/10 dark:border-white/10 light:border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-red-500">GAME</span>
              <span className="text-yellow-400">TORY</span>
            </Link>
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

      {/* Game Details */}
      <section className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Info */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200 p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    className="w-full aspect-square object-cover rounded-lg border-2 border-yellow-400/20"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {game.category}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-800 mb-4">
                    {game.title}
                  </h1>
                  <p className="text-white/80 dark:text-white/80 light:text-gray-600 mb-6 leading-relaxed">
                    {game.description}
                  </p>

                  {/* Game Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white dark:text-white light:text-gray-800 font-semibold">
                          {game.rating}
                        </span>
                      </div>
                      <p className="text-white/60 dark:text-white/60 light:text-gray-500 text-sm">Rating</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white dark:text-white light:text-gray-800 font-semibold">
                          {game.players}
                        </span>
                      </div>
                      <p className="text-white/60 dark:text-white/60 light:text-gray-500 text-sm">Players</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white dark:text-white light:text-gray-800 font-semibold">
                          {game.playTime}
                        </span>
                      </div>
                      <p className="text-white/60 dark:text-white/60 light:text-gray-500 text-sm">Play Time</p>
                    </div>
                  </div>

                  {/* Play Button */}
                  <a href={game.gameUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-lg py-6 font-bold">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Play Now!
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Related Games */}
          <div>
            <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200 p-6">
              <h2 className="text-xl font-bold text-white dark:text-white light:text-gray-800 mb-4">
                More {game.category} Games
              </h2>
              <div className="space-y-4">
                {relatedGames.map((relatedGame) => (
                  <Link key={relatedGame.id} href={`/games/${relatedGame.slug}`}>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 dark:bg-white/5 light:bg-gray-50 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100 transition-colors cursor-pointer">
                      <img
                        src={relatedGame.image || "/placeholder.svg"}
                        alt={relatedGame.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-white dark:text-white light:text-gray-800 font-medium text-sm">
                          {relatedGame.title}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3 w-3 text-yellow-400" />
                          <span className="text-white/60 dark:text-white/60 light:text-gray-500 text-xs">
                            {relatedGame.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
