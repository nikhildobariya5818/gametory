import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, GamepadIcon } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <GamepadIcon className="h-24 w-24 text-yellow-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">Game Not Found</h1>
        <p className="text-white/60 mb-8 max-w-md">
          Sorry, we couldn't find the game you're looking for. It might have been removed or the URL is incorrect.
        </p>
        <Link href="/">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Games
          </Button>
        </Link>
      </div>
    </div>
  )
}
