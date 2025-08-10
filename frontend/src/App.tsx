import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Modules from './pages/Modules'
import ModuleDetail from './pages/ModuleDetail'
import Quiz from './pages/Quiz'
import Games from './pages/Games'
import Leaderboard from './pages/Leaderboard'
import Forum from './pages/Forum'
import Resources from './pages/Resources'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'
import VerifyOtp from './pages/VerifyOtp'
import ProtectedRoute from './components/ProtectedRoute'
import LanguageSwitcher from './components/LanguageSwitcher'
import AudioToggle from './components/AudioToggle'
import { useUserSync } from './hooks/useUserSync'
import { useDailyReward } from './hooks/useDailyReward'

function App() {
  useUserSync()
  useDailyReward()
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 to-white">
      <header className="flex items-center justify-between p-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-700">NariFinance</h1>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <AudioToggle />
        </div>
      </header>

      <main className="flex-1 px-4 pb-24 max-w-6xl w-full mx-auto">
        <Routes>
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/modules" element={<ProtectedRoute><Modules /></ProtectedRoute>} />
          <Route path="/modules/:id" element={<ProtectedRoute><ModuleDetail /></ProtectedRoute>} />
          <Route path="/quiz/:id" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
          <Route path="/games" element={<ProtectedRoute><Games /></ProtectedRoute>} />
          <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
          <Route path="/forum" element={<ProtectedRoute><Forum /></ProtectedRoute>} />
          <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Navbar />
    </div>
  )
}

export default App
