const resources = [
  { type: 'PDF', title: 'Budget Template', link: '#' },
  { type: 'Video', title: 'Saving Tips (Hindi)', link: '#' },
  { type: 'Infographic', title: 'Investing 101', link: '#' },
]

export default function Resources() {
  return (
    <div className="bg-white rounded-2xl p-5 space-y-4">
      <h2 className="text-xl font-bold">Resource Library</h2>
      {resources.map((r) => (
        <a key={r.title} href={r.link} className="p-4 rounded-xl border flex items-center justify-between">
          <span>{r.type}: {r.title}</span>
          <span className="text-indigo-600 font-medium">Download</span>
        </a>
      ))}
    </div>
  )
}