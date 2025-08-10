import { Link } from 'react-router-dom'

const sampleModules = [
  { id: 'budgeting', title: 'Budgeting Basics', color: 'from-indigo-400 to-indigo-600' },
  { id: 'saving', title: 'Smart Saving', color: 'from-emerald-400 to-emerald-600' },
  { id: 'investing', title: 'Intro to Investing', color: 'from-rose-400 to-rose-600' },
  { id: 'banking', title: 'Banking & UPI', color: 'from-cyan-400 to-cyan-600' },
]

export default function Modules() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {sampleModules.map((m) => (
        <Link key={m.id} to={`/modules/${m.id}`} className={`rounded-2xl p-5 text-white bg-gradient-to-br ${m.color}`}>
          <h3 className="text-lg font-bold">{m.title}</h3>
          <p className="opacity-90 text-sm">5 lessons • 1 quiz</p>
        </Link>
      ))}
    </div>
  )
}