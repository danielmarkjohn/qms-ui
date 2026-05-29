import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import PrivateRoute from '../components/PrivateRoute'

const token = () => localStorage.getItem('token')

const router = createBrowserRouter([
  {
    path: '/',
    element: token()
      ? <Navigate to="/dashboard" replace />
      : <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: token()
      ? <Navigate to="/dashboard" replace />
      : <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
])

export default router