import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'

export default function VerifyOtp() {
  const [otp, setOtp] = useState('')
  const setUser = useAppStore((s) => s.setUser)
  const navigate = useNavigate()
  const location = useLocation() as any
  const phone = location.state?.phone

  const verify = async () => {
    try {
      // @ts-ignore
      const confirmation = window.phoneConfirmation
      if (confirmation) {
        const result = await confirmation.confirm(otp)
        const u = result.user
        setUser({ uid: u.uid, phoneNumber: u.phoneNumber || phone, displayName: u.displayName || 'User' })
      } else {
        if (otp.length < 4) throw new Error('Invalid OTP')
        setUser({ uid: 'demo', phoneNumber: phone, displayName: 'Demo User' })
      }
      navigate('/')
    } catch (e) {
      alert('OTP verification failed')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl p-5 space-y-4">
      <h2 className="text-xl font-bold">Verify OTP</h2>
      <div className="text-slate-600 text-sm">Sent to {phone}</div>
      <input value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full rounded-lg border px-3 py-2" placeholder="Enter OTP" />
      <button onClick={verify} className="w-full px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold">Verify</button>
    </div>
  )
}