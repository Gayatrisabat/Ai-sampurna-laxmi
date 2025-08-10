import { useAppStore } from '../store/useAppStore'
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'

function AudioToggle() {
  const audioEnabled = useAppStore((s) => s.audioEnabled)
  const toggleAudio = useAppStore((s) => s.toggleAudio)

  return (
    <button
      onClick={toggleAudio}
      aria-pressed={audioEnabled}
      className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold flex items-center gap-2"
    >
      {audioEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
      <span>{audioEnabled ? 'Audio On' : 'Audio Off'}</span>
    </button>
  )
}

export default AudioToggle