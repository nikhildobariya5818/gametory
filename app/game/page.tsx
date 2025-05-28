"use client"

import { Suspense } from "react"
import GameDetailContent from "@/components/game-detail-content"

export default function GamePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GameDetailContent />
    </Suspense>
  )
}
