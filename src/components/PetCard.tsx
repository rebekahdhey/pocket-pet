import { useState } from "react"
import StatBar from "./StatBar"

type PetCardProps = {
  name: string
  emoji: string
}

type Mood = 'happy' | 'hungry' | 'sleepy' | 'sad'

const clamp = (value: number) => Math.max(0, Math.min(100, value))

const moodFaces: Record<Mood, string> = {
  happy: '😊',
  hungry: '🥺',
  sleepy: '😴',
  sad: '😢',
}

function PetCard({ name, emoji }: PetCardProps) {
  const [happiness, setHappiness] = useState(50)
  const [hunger, setHunger] = useState(30)
  const [energy, setEnergy] = useState(80)

  const handlePlay = () => {
    setHappiness(clamp(happiness + 10))
    setEnergy(clamp(energy - 15))
  }

  const handleFeed = () => {
    setHunger(clamp(hunger - 20))
    setHappiness(clamp(happiness + 5))
  }

  const handleNap = () => {
    setEnergy(clamp(energy + 30))
    setHunger(clamp(hunger + 10))
  }

  const getMood = (): Mood => {
    if (hunger > 70) return 'hungry'
    if (energy < 25) return 'sleepy'
    if (happiness < 30) return 'sad'

    return 'happy'
  }

  const mood = getMood()

  return (
    <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-lg">
      <div className="text-7xl">{emoji}</div>

      <div className="mt-2 text-3xl">{moodFaces[mood]}</div>

      <h1 className="mt-4 text-2xl font-semibold text-neutral-800">{name}</h1>

      <p className="mt-1 text-sm text-neutral-500">
        {name} is {mood}
      </p>

      {mood === 'sleepy' && (
        <p className="mt-3 text-sm text-neutral-600">
          {name} is yawning... time for a nap! 💤
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3">
        <StatBar label="Happiness" value={happiness} />
        <StatBar label="Hunger" value={hunger} />
        <StatBar label="Energy" value={energy} />
      </div>

      <div className="mt-6 flex justify-center gap-2">
        <button
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700 active:scale-95"
          onClick={handlePlay}
        >
          Play 🎾
        </button>

        <button
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700 active:scale-95"
          onClick={handleFeed}
        >
          Hungry! 🥩
        </button>

        <button
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700 active:scale-95"
          onClick={handleNap}
        >
          Sleepy 💤
        </button>
      </div>
    </div>
  )
}

export default PetCard