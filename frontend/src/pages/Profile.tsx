import { useAppStore } from '../store/useAppStore'

export default function Profile() {
  const user = useAppStore((s) => s.user)
  const points = useAppStore((s) => s.points)
  const badges = useAppStore((s) => s.badges)

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-5">
        <h2 className="text-xl font-bold">{user?.displayName || 'Guest'}</h2>
        <div className="text-slate-600">{user?.email || user?.phoneNumber}</div>
      </div>
      <div className="bg-white rounded-2xl p-5">
        <div className="font-semibold">Points</div>
        <div className="text-3xl font-extrabold text-indigo-700">{points}</div>
      </div>
      <div className="bg-white rounded-2xl p-5">
        <div className="font-semibold mb-2">Badges</div>
        <div className="flex gap-2 flex-wrap">
          {badges.length === 0 ? <div className="text-slate-500">No badges yet</div> : badges.map((b) => (
            <div key={b.id} className="px-3 py-1 rounded-full bg-amber-100 text-amber-800">{b.icon} {b.name}</div>
          ))}
        </div>
      </div>
    </div>
  )
}