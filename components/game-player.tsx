"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Maximize2, Minimize2, RotateCcw } from "lucide-react"

interface Game {
  id: number
  title: string
  slug: string
  gameUrl: string
}

interface GamePlayerProps {
  game: Game
}

export default function GamePlayer({ game }: GamePlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const reloadGame = () => {
    setIsLoading(true)
    const iframe = document.getElementById("game-iframe") as HTMLIFrameElement
    if (iframe) {
      iframe.src = iframe.src
    }
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header - only show when not in fullscreen */}
      {!isFullscreen && (
        <header className="bg-black/90 backdrop-blur-sm border-b border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                <span className="text-red-500">GAME</span>
                <span className="text-yellow-400">TORY</span>
              </Link>

              <div className="flex items-center gap-4">
                <h1 className="text-white font-semibold hidden md:block">{game.title}</h1>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={reloadGame}
                    className="text-white hover:text-yellow-400"
                    title="Reload Game"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleFullscreen}
                    className="text-white hover:text-yellow-400"
                    title="Fullscreen"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                  <Link href={`/game?name=${game.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Game Container */}
      <div className={`relative ${isFullscreen ? "h-screen" : "h-[calc(100vh-73px)]"} w-full bg-black`}>
        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400 mx-auto mb-4"></div>
              <p className="text-white text-lg">Loading {game.title}...</p>
            </div>
          </div>
        )}

        {/* Fullscreen Controls */}
        {isFullscreen && (
          <div className="absolute top-4 right-4 z-40 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={reloadGame}
              className="bg-black/50 text-white hover:text-yellow-400"
              title="Reload Game"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="bg-black/50 text-white hover:text-yellow-400"
              title="Exit Fullscreen"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Game iframe */}
        <iframe
          id="game-iframe"
          src={game.gameUrl}
          className="w-full h-full border-0"
          title={game.title}
          allowFullScreen
          allow="gamepad; microphone; camera"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  )
}
