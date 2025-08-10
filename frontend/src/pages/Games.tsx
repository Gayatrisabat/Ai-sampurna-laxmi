import { useState } from 'react'
import { useAppStore } from '../store/useAppStore'

export default function Games() {
  const [income, setIncome] = useState(10000)
  const [needs, setNeeds] = useState(50)
  const [wants, setWants] = useState(30)
  const [savings, setSavings] = useState(20)
  const addPoints = useAppStore((s) => s.addPoints)

  const validate = () => {
    const total = needs + wants + savings
    if (total !== 100) return alert('Your plan must total 100%')
    addPoints(20)
    alert('Great plan! +20 points')
  }

  return (
    <div className="bg-white rounded-2xl p-5 space-y-4">
      <h2 className="text-xl font-bold">Plan your monthly budget</h2>
      <div className="grid gap-2">
        <label>Monthly income (₹)
          <input value={income} onChange={(e) => setIncome(Number(e.target.value))} type="number" className="mt-1 w-full rounded-lg border px-3 py-2" />
        </label>
        <label>Needs %
          <input value={needs} onChange={(e) => setNeeds(Number(e.target.value))} type="number" className="mt-1 w-full rounded-lg border px-3 py-2" />
        </label>
        <label>Wants %
          <input value={wants} onChange={(e) => setWants(Number(e.target.value))} type="number" className="mt-1 w-full rounded-lg border px-3 py-2" />
        </label>
        <label>Savings %
          <input value={savings} onChange={(e) => setSavings(Number(e.target.value))} type="number" className="mt-1 w-full rounded-lg border px-3 py-2" />
        </label>
      </div>
      <button onClick={validate} className="px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold">Submit Plan</button>
    </div>
  )
}