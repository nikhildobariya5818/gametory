"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Maximize2, Minimize2 } from "lucide-react"

interface Game {
  id: number
  title: string
  image: string
  category: string
  iframeUrl: string
}

interface GameModalProps {
  game: Game
  isOpen: boolean
  onClose: () => void
}

export default function GameModal({ game, isOpen, onClose }: GameModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`${
          isFullscreen ? "max-w-full max-h-full h-screen w-screen p-0" : "max-w-6xl max-h-[90vh] p-4"
        } bg-black border-gray-600`}
      >
        <DialogHeader className={`${isFullscreen ? "hidden" : "flex"} flex-row items-center justify-between`}>
          <DialogTitle className="text-white text-xl font-bold">{game.title}</DialogTitle>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="text-white hover:text-yellow-400">
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:text-yellow-400">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className={`${isFullscreen ? "h-full" : "h-[600px]"} w-full rounded-lg overflow-hidden`}>
          <iframe
            src={game.iframeUrl}
            width="100%"
            height="100%"
            scrolling="none"
            frameBorder="0"
            className="w-full h-full"
            title={game.title}
          />
        </div>

        {isFullscreen && (
          <div className="absolute top-4 right-4 z-50 flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="bg-black/50 text-white hover:text-yellow-400"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="bg-black/50 text-white hover:text-yellow-400"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
