import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Upload, DollarSign, BarChart3 } from "lucide-react"

export default function DeveloperPage() {
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
              <span className="text-yellow-400 font-medium">DEVELOPER</span>
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
            Developer Portal
          </h1>
          <p className="text-xl text-white/80 dark:text-white/80 light:text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of game developers who showcase their games on our platform. Monetize your creativity and
            reach millions of players worldwide.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-3">Submit Your Game</Button>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <Upload className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">Easy Upload</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-center">
                Simple drag-and-drop interface to upload your HTML5 games
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <DollarSign className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">Revenue Share</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-center">
                Earn up to 70% revenue share from ads and in-game purchases
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-center">
                Detailed analytics and insights about your game performance
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <Code className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">API Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-center">
                Full API access for advanced integration and customization
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-6">
              Submission Guidelines
            </h2>
            <ul className="space-y-3 text-white/80 dark:text-white/80 light:text-gray-600">
              <li>• Games must be HTML5 based</li>
              <li>• Maximum file size: 50MB</li>
              <li>• No adult or violent content</li>
              <li>• Original games only (no copies)</li>
              <li>• Must be mobile-friendly</li>
              <li>• Include proper game description</li>
            </ul>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-6">Revenue Model</h2>
            <div className="space-y-4 text-white/80 dark:text-white/80 light:text-gray-600">
              <p>
                <strong className="text-yellow-400">Ad Revenue:</strong> 70% of display ad revenue
              </p>
              <p>
                <strong className="text-yellow-400">Sponsorship:</strong> Direct sponsorship opportunities
              </p>
              <p>
                <strong className="text-yellow-400">Premium:</strong> Featured placement options
              </p>
              <p>
                <strong className="text-yellow-400">Licensing:</strong> Game licensing to other platforms
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
