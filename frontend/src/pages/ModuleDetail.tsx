import { Link, useParams } from 'react-router-dom'

const lessons = [
  'Understand income & expenses',
  '50/30/20 rule',
  'Track daily spends',
  'Build an emergency fund',
  'Budget review & plan'
]

export default function ModuleDetail() {
  const { id } = useParams()
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold capitalize">{id?.replace('-', ' ')} </h2>
      <ul className="bg-white rounded-2xl divide-y">
        {lessons.map((l, i) => (
          <li key={i} className="p-4 flex items-center justify-between">
            <span>{i + 1}. {l}</span>
            <button className="px-3 py-1 rounded-full bg-slate-100">Start</button>
          </li>
        ))}
      </ul>
      <Link to={`/quiz/${id}`} className="inline-block px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold">Start Quiz</Link>
    </div>
  )
}