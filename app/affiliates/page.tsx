import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Gift, Target } from "lucide-react"

export default function AffiliatesPage() {
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
              <span className="text-yellow-400 font-medium">AFFILIATES</span>
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
            Affiliate Program
          </h1>
          <p className="text-xl text-white/80 dark:text-white/80 light:text-gray-600 max-w-3xl mx-auto mb-8">
            Partner with us and earn commissions by promoting our gaming platform. Join our affiliate network and start
            earning today!
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-3">
            Join Affiliate Program
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">High Commission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-center">
                Earn up to 40% commission on all referrals
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">Large Audience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-center">
                Access to our 10M+ active gaming community
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <Gift className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">Bonuses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-center">
                Performance bonuses and special incentives
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">Real-time Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-center">
                Advanced analytics and real-time performance tracking
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-6">How It Works</h2>
            <div className="space-y-4 text-white/80 dark:text-white/80 light:text-gray-600">
              <p>
                <strong className="text-yellow-400">1. Sign Up:</strong> Join our affiliate program for free
              </p>
              <p>
                <strong className="text-yellow-400">2. Get Links:</strong> Receive your unique tracking links
              </p>
              <p>
                <strong className="text-yellow-400">3. Promote:</strong> Share links on your website, social media, or
                ads
              </p>
              <p>
                <strong className="text-yellow-400">4. Earn:</strong> Get paid for every successful referral
              </p>
            </div>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-6">
              Commission Structure
            </h2>
            <div className="space-y-4 text-white/80 dark:text-white/80 light:text-gray-600">
              <p>
                <strong className="text-yellow-400">Tier 1:</strong> 25% commission (0-100 referrals)
              </p>
              <p>
                <strong className="text-yellow-400">Tier 2:</strong> 30% commission (101-500 referrals)
              </p>
              <p>
                <strong className="text-yellow-400">Tier 3:</strong> 35% commission (501-1000 referrals)
              </p>
              <p>
                <strong className="text-yellow-400">Tier 4:</strong> 40% commission (1000+ referrals)
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
