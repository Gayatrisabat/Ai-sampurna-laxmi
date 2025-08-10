import { useEffect } from 'react'
import { useAppStore } from '../store/useAppStore'

const KEY = 'nari_daily_reward'

function isDifferentDay(iso1: string, iso2: string) {
  const d1 = new Date(iso1)
  const d2 = new Date(iso2)
  return d1.getFullYear() !== d2.getFullYear() || d1.getMonth() !== d2.getMonth() || d1.getDate() !== d2.getDate()
}

export function useDailyReward() {
  const user = useAppStore((s) => s.user)
  const addPoints = useAppStore((s) => s.addPoints)

  useEffect(() => {
    if (!user) return
    const nowIso = new Date().toISOString()
    const last = localStorage.getItem(KEY)
    if (!last || isDifferentDay(last, nowIso)) {
      addPoints(10)
      localStorage.setItem(KEY, nowIso)
    }
  }, [user, addPoints])
}