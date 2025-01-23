import ProtectedRoute from '@/components/ProtectedRoute'
import AddBudget from '@/pages/AddBudget'
import { Budget } from '@/pages/Budget'
import CoinsTracker from '@/pages/CoinsTracker'
import Dashboard from '@/pages/Dashboard'
import EditBudget from '@/pages/EditBudget'
import Error404 from '@/pages/Error404'
import GoalTracker from '@/pages/GoalTracker'
import Login from '@/pages/Login'
import Reports from '@/pages/Reports'
import Settings from '@/pages/Settings'

export interface RouteConfig {
  path: string
  element: JSX.Element
  children?: RouteConfig[]
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings',
    element: (
      <ProtectedRoute>
        <Settings />
      </ProtectedRoute>
    ),
  },
  {
    path: '/goal-tracker',
    element: (
      <ProtectedRoute>
        <GoalTracker />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports',
    element: (
      <ProtectedRoute>
        <Reports />
      </ProtectedRoute>
    ),
  },
  {
    path: '/budget-planner',
    element: (
      <ProtectedRoute>
        <Budget />
      </ProtectedRoute>
    ),
  },
  {
    path: '/add-budget',
    element: (
      <ProtectedRoute>
        <AddBudget />
      </ProtectedRoute>
    ),
  },
  {
    path: '/edit-budget/:id',
    element: (
      <ProtectedRoute>
        <EditBudget />
      </ProtectedRoute>
    ),
  },
  {
    path: '/coins-tracker',
    element: (
      <ProtectedRoute>
        <CoinsTracker />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
]

export default routes
