import { notFound } from "next/navigation"
import GamePlayer from "@/components/game-player"

// This would typically come from a database or API
const games = [
  {
    id: 1,
    title: "city car stunt",
    slug: "city-car-stunt",
    gameUrl: "https://html5.gamemonetize.co/xtqh1lijdd1qpbnkjsu7a4v3cwpw2ww0/",
  },
  {
    id: 2,
    title: "cricket world cup game",
    slug: "cricket-world-cup-game",
    gameUrl: "https://html5.gamemonetize.co/6ihxzjumd146rthxh998vi5y0r6zn882/",
  },
  {
    id: 3,
    title: "Subway Surfers",
    slug: "Subway-Surfers",
    gameUrl: "https://html5.gamemonetize.co/6x0f7hqv8z27frnwg28a4w3hfbwlff5m/",
  },
  {
    id: 4,
     title: "Snake.io",
    slug: "snake-io",
    gameUrl: "https://html5.gamemonetize.co/qnho3nkrbfy7dnawvtlii5fqzgwl3iht/",
  },
  {
    id: 5,
     title: "Basketball Stars",
    slug: "basketball-stars",
    gameUrl: "https://html5.gamemonetize.co/afw3m1shjnvb288na8izq9i75aztrj72/",
  },
    {
    id: 6,
      title: "Bubble Shooter",
    slug: "bubble-shooter",
    gameUrl: "https://html5.gamemonetize.co/y3roy6krania1gm0lezahh36rm51wk1u/",
  },
]

interface GamePlayerPageProps {
  params: Promise<{ slug: string }>
}

export default async function GamePlayerPage({ params }: GamePlayerPageProps) {
  const { slug } = await params
  const game = games.find((g) => g.slug === slug)

  if (!game) {
    notFound()
  }

  return <GamePlayer game={game} />
}
