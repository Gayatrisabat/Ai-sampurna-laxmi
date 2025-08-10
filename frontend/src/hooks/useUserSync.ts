import { useEffect } from 'react'
import { useAppStore } from '../store/useAppStore'
import { saveBadges, savePoints, upsertUser } from '../services/firestore'

export function useUserSync() {
  const user = useAppStore((s) => s.user)
  const points = useAppStore((s) => s.points)
  const badges = useAppStore((s) => s.badges)

  useEffect(() => {
    if (!user) return
    upsertUser(user).catch(() => {})
  }, [user])

  useEffect(() => {
    if (!user) return
    savePoints(user.uid, points).catch(() => {})
  }, [user, points])

  useEffect(() => {
    if (!user) return
    saveBadges(user.uid, badges).catch(() => {})
  }, [user, badges])
}