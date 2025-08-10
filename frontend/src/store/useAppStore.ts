import { create } from 'zustand'

export type Badge = {
  id: string
  name: string
  icon: string
}

export type UserProfile = {
  uid: string
  displayName?: string
  email?: string
  phoneNumber?: string
  photoURL?: string
}

export type ModuleProgress = {
  moduleId: string
  lessonsCompleted: number
  totalLessons: number
  quizPassed: boolean
}

type AppState = {
  user: UserProfile | null
  points: number
  badges: Badge[]
  progress: Record<string, ModuleProgress>
  audioEnabled: boolean

  setUser: (user: UserProfile | null) => void
  addPoints: (amount: number) => void
  unlockBadge: (badge: Badge) => void
  updateProgress: (p: ModuleProgress) => void
  toggleAudio: () => void
  narrate: (text: string) => void
}

export const useAppStore = create<AppState>((set, get) => ({
  user: null,
  points: 0,
  badges: [],
  progress: {},
  audioEnabled: false,

  setUser: (user) => set({ user }),
  addPoints: (amount) => set({ points: get().points + amount }),
  unlockBadge: (badge) => set({ badges: [...get().badges, badge] }),
  updateProgress: (p) => set({ progress: { ...get().progress, [p.moduleId]: p } }),
  toggleAudio: () => set({ audioEnabled: !get().audioEnabled }),
  narrate: (text: string) => {
    if (!get().audioEnabled) return
    if (typeof window === 'undefined') return
    if (!('speechSynthesis' in window)) return
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  },
}))