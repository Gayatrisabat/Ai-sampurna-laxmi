import { useEffect, useState } from 'react'
import { getWeeklyLeaderboard } from '../services/firestore'

const fallbackTop = [
  { displayName: 'Asha', points: 320 },
  { displayName: 'Meera', points: 280 },
  { displayName: 'Riya', points: 250 },
]

export default function Leaderboard() {
  const [top, setTop] = useState<any[]>(fallbackTop)

  useEffect(() => {
    getWeeklyLeaderboard(20).then(setTop).catch(() => setTop(fallbackTop))
  }, [])

  return (
    <div className="bg-white rounded-2xl p-5">
      <h2 className="text-xl font-bold mb-4">Weekly Leaderboard</h2>
      <ol className="space-y-2">
        {top.map((u, i) => (
          <li key={u.uid ?? u.displayName ?? i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-200 grid place-items-center font-bold">{i + 1}</div>
              <span className="font-medium">{u.displayName || u.email || 'User'}</span>
            </div>
            <span className="text-indigo-700 font-bold">{u.points}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}