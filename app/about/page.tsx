import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Users, Trophy, Zap } from "lucide-react"

export default function AboutPage() {
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
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white dark:text-white light:text-gray-700 hover:text-yellow-400 transition-colors"
              >
                HOME
              </Link>
              <span className="text-yellow-400 font-medium">ABOUT US</span>
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
            <Link href="/">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                Back to Games
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-white light:text-gray-800 mb-6">
            About Pokii Game
          </h1>
          <p className="text-xl text-white/80 dark:text-white/80 light:text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing you the best free online gaming experience. Our platform hosts thousands of
            games across all genres.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <Gamepad2 className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">1000+ Games</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-center">
                Extensive collection of games across all genres and categories
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">10M+ Players</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-center">
                Trusted by millions of gamers worldwide
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">Award Winning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-center">
                Recognized as the best gaming platform
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">100% Free</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-center">
                All games are completely free to play
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white dark:text-white light:text-gray-800 mb-6">Our Mission</h2>
            <p className="text-white/80 dark:text-white/80 light:text-gray-600 mb-4">
              At Pokii Game, we believe that gaming should be accessible to everyone. Our mission is to provide a
              platform where players can discover, play, and enjoy high-quality games without any barriers.
            </p>
            <p className="text-white/80 dark:text-white/80 light:text-gray-600 mb-4">
              We carefully curate our game collection to ensure that every game meets our standards for fun, quality,
              and safety. Whether you're looking for action-packed adventures, brain-teasing puzzles, or casual
              entertainment, we have something for everyone.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white dark:text-white light:text-gray-800 mb-6">Our Vision</h2>
            <p className="text-white/80 dark:text-white/80 light:text-gray-600 mb-4">
              We envision a world where gaming brings people together, sparks creativity, and provides endless
              entertainment. Our platform serves as a bridge between game developers and players, fostering a vibrant
              gaming community.
            </p>
            <p className="text-white/80 dark:text-white/80 light:text-gray-600 mb-4">
              Through innovation and dedication, we continue to expand our offerings and improve the gaming experience
              for our users worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
