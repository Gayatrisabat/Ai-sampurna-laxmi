import { Link } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'
import { useTranslation } from 'react-i18next'

function StatCard({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div className={`rounded-2xl p-4 ${color} text-white text-center`}> 
      <div className="text-3xl font-extrabold">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  )
}

export default function Dashboard() {
  const { t } = useTranslation()
  const points = useAppStore((s) => s.points)
  const badges = useAppStore((s) => s.badges)

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-2xl p-5 shadow-sm">
        <h2 className="text-xl font-bold mb-2">{t('common.welcome')}</h2>
        <p className="text-slate-600">Make money choices with confidence. Learn daily, earn points, unlock badges.</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard label={t('common.points')} value={points} color="bg-indigo-500" />
          <StatCard label={t('common.badges')} value={badges.length} color="bg-emerald-500" />
          <StatCard label="Streak" value={3} color="bg-rose-500" />
          <StatCard label="Level" value={1} color="bg-cyan-500" />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-indigo-100 to-white rounded-2xl p-5">
          <h3 className="text-lg font-semibold mb-2">Continue Learning</h3>
          <p className="text-slate-600 mb-3">Budgeting, Saving, Investing, Banking</p>
          <Link to="/modules" className="inline-block px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold">Go to Modules</Link>
        </div>
        <div className="bg-gradient-to-br from-emerald-100 to-white rounded-2xl p-5">
          <h3 className="text-lg font-semibold mb-2">Try a Scenario Game</h3>
          <p className="text-slate-600 mb-3">Plan your monthly budget or choose investments</p>
          <Link to="/games" className="inline-block px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold">Play</Link>
        </div>
      </section>
    </div>
  )
}