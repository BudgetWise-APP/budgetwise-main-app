import { Children } from '@/types'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }: Children) => {
  const token = localStorage.getItem('auth_token')

  return token ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute
