import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

export default function Signup() {
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', { size: 'invisible' })
      } catch {}
    }
  }, [])

  const sendOtp = async () => {
    setLoading(true)
    try {
      const verifier = window.recaptchaVerifier as RecaptchaVerifier
      const confirmation = await signInWithPhoneNumber(auth, phone, verifier)
      window.phoneConfirmation = confirmation
      navigate('/verify-otp', { state: { phone } })
    } catch (e) {
      alert('Failed to send OTP. Check Firebase config. Using demo flow.')
      navigate('/verify-otp', { state: { phone } })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl p-5 space-y-4">
      <h2 className="text-xl font-bold">Sign up</h2>
      <label>Phone number
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="+91..." />
      </label>
      <div id="recaptcha-container"></div>
      <button disabled={loading} onClick={sendOtp} className="w-full px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold">{loading ? '...' : 'Send OTP'}</button>
    </div>
  )
}