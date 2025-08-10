import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { addThread, listThreads } from '../services/firestore'
import { useAppStore } from '../store/useAppStore'

const fallback = [
  { id: '1', title: 'How to start saving with low income?', posts: 12 },
  { id: '2', title: 'Best apps for tracking expenses', posts: 8 },
  { id: '3', title: 'Gold vs FD vs SIP?', posts: 19 },
]

export default function Forum() {
  const [threads, setThreads] = useState<any[]>(fallback)
  const [title, setTitle] = useState('')
  const user = useAppStore((s) => s.user)

  useEffect(() => {
    listThreads(50).then(setThreads).catch(() => setThreads(fallback))
  }, [])

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    try {
      await addThread(title.trim(), user?.uid ?? null)
      setTitle('')
      const latest = await listThreads(50)
      setThreads(latest)
    } catch {
      alert('Failed to add thread (is Firebase configured?)')
    }
  }

  return (
    <div className="bg-white rounded-2xl p-5 space-y-4">
      <h2 className="text-xl font-bold">Community Forum</h2>

      <form onSubmit={onSubmit} className="flex gap-2">
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="flex-1 rounded-lg border px-3 py-2" placeholder="Start a new discussion..." />
        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Post</button>
      </form>

      {threads.map((t) => (
        <div key={t.id} className="p-4 rounded-xl border">
          <div className="font-medium">{t.title}</div>
          <div className="text-slate-500 text-sm">{t.posts ?? 0} posts</div>
        </div>
      ))}
    </div>
  )
}