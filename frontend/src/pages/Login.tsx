import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const setUser = useAppStore((s) => s.setUser)
  const navigate = useNavigate()
  const location = useLocation() as any

  const login = async () => {
    setLoading(true)
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      const u = cred.user
      setUser({ uid: u.uid, email: u.email || undefined, displayName: u.displayName || undefined, phoneNumber: u.phoneNumber || undefined, photoURL: u.photoURL || undefined })
      navigate(location.state?.from?.pathname || '/')
    } catch (e) {
      alert('Firebase login failed, using demo user. Configure env vars for real auth.')
      setUser({ uid: 'demo', email, displayName: 'Demo User' })
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  const loginDemo = () => {
    setUser({ uid: 'demo', email: 'demo@example.com', displayName: 'Demo User' })
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl p-5 space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      <label>Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2" />
      </label>
      <label>Password
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="mt-1 w-full rounded-lg border px-3 py-2" />
      </label>
      <button disabled={loading} onClick={login} className="w-full px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold">{loading ? '...' : 'Continue'}</button>
      <div className="text-sm text-center">or</div>
      <button onClick={loginDemo} className="w-full px-4 py-2 rounded-full bg-slate-200">Use Demo</button>
      <Link to="/signup" className="block text-center text-indigo-700">Create account (phone OTP)</Link>
    </div>
  )
}