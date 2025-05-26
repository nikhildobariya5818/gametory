import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
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
              <Link
                href="/affiliates"
                className="text-white dark:text-white light:text-gray-700 hover:text-yellow-400 transition-colors"
              >
                AFFILIATES
              </Link>
              <span className="text-yellow-400 font-medium">CONTACT US</span>
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
            Contact Us
          </h1>
          <p className="text-xl text-white/80 dark:text-white/80 light:text-gray-600 max-w-3xl mx-auto">
            Have questions, suggestions, or need support? We'd love to hear from you. Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative z-10 container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 mb-2">General Inquiries:</p>
              <p className="text-yellow-400 mb-4">support@gametroy.com</p>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 mb-2">Business:</p>
              <p className="text-yellow-400">business@gametroy.com</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <Phone className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 mb-2">Support Hotline:</p>
              <p className="text-yellow-400 mb-4">+1 (555) 123-4567</p>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 mb-2">Business Line:</p>
              <p className="text-yellow-400">+1 (555) 987-6543</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200">
            <CardHeader className="text-center">
              <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white dark:text-white light:text-gray-800">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 mb-2">Office Address:</p>
              <p className="text-yellow-400 leading-relaxed">
                123 Gaming Street
                <br />
                Tech District
                <br />
                San Francisco, CA 94105
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white dark:text-white light:text-gray-700 mb-2">First Name</label>
                  <Input
                    className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-300 text-white dark:text-white light:text-gray-700"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white dark:text-white light:text-gray-700 mb-2">Last Name</label>
                  <Input
                    className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-300 text-white dark:text-white light:text-gray-700"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white dark:text-white light:text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-300 text-white dark:text-white light:text-gray-700"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-white dark:text-white light:text-gray-700 mb-2">Subject</label>
                <Input
                  className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-300 text-white dark:text-white light:text-gray-700"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-white dark:text-white light:text-gray-700 mb-2">Message</label>
                <Textarea
                  className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-300 text-white dark:text-white light:text-gray-700 min-h-[120px]"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Send Message</Button>
            </form>
          </Card>

          {/* Business Hours & FAQ */}
          <div className="space-y-8">
            <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-6 flex items-center">
                <Clock className="h-6 w-6 text-yellow-400 mr-3" />
                Business Hours
              </h2>
              <div className="space-y-3 text-white/80 dark:text-white/80 light:text-gray-600">
                <p>
                  <strong className="text-yellow-400">Monday - Friday:</strong> 9:00 AM - 6:00 PM PST
                </p>
                <p>
                  <strong className="text-yellow-400">Saturday:</strong> 10:00 AM - 4:00 PM PST
                </p>
                <p>
                  <strong className="text-yellow-400">Sunday:</strong> Closed
                </p>
                <p className="mt-4 text-sm">
                  <strong className="text-yellow-400">Note:</strong> Support tickets are answered within 24 hours during
                  business days.
                </p>
              </div>
            </Card>

            <Card className="bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-6">Quick Help</h2>
              <div className="space-y-4 text-white/80 dark:text-white/80 light:text-gray-600">
                <p>
                  <strong className="text-yellow-400">Game Issues:</strong> Try refreshing the page or clearing your
                  browser cache
                </p>
                <p>
                  <strong className="text-yellow-400">Account Problems:</strong> Check our FAQ section first
                </p>
                <p>
                  <strong className="text-yellow-400">Partnership:</strong> Use business@gametroy.com for faster
                  response
                </p>
                <p>
                  <strong className="text-yellow-400">Bug Reports:</strong> Include browser and device information
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
