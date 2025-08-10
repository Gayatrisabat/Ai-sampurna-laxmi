import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'

const questions = [
  { q: 'You received ₹10000 this month. What should you do first?', options: ['Spend on shopping', 'Save some portion', 'Ignore bills'], a: 1 },
  { q: 'Emergency fund should ideally cover how many months?', options: ['1 month', '3-6 months', '12 months'], a: 1 },
]

export default function Quiz() {
  const { id } = useParams()
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const addPoints = useAppStore((s) => s.addPoints)
  const unlockBadge = useAppStore((s) => s.unlockBadge)

  const current = questions[idx]

  const answer = (i: number) => {
    if (i === current.a) setScore((s) => s + 1)
    if (idx < questions.length - 1) setIdx(idx + 1)
    else {
      const earned = score * 10 + (i === current.a ? 10 : 0)
      addPoints(earned)
      unlockBadge({ id: `quiz-${id}`, name: 'Quiz Passed', icon: '🏅' })
      alert(`Quiz complete! Points +${earned}`)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-5 space-y-4">
      <h2 className="text-xl font-bold">Quiz: {id}</h2>
      <p className="font-medium">Q{idx + 1}. {current.q}</p>
      <div className="grid gap-3">
        {current.options.map((opt, i) => (
          <button key={i} onClick={() => answer(i)} className="px-4 py-3 rounded-xl border text-left hover:bg-indigo-50">
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}