import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'

function ProtectedRoute({ children }: { children: ReactNode }) {
  const user = useAppStore((s) => s.user)
  const location = useLocation()
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

export default ProtectedRoute