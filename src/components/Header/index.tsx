import { jwtDecode } from 'jwt-decode'

import Button from '../Button'
import { UserType } from './types'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const token = localStorage.getItem('auth_token')
  const user: UserType | null = token ? jwtDecode(token) : null
  const navigate = useNavigate()

  return (
    <div className="bg-white shadow-[0_2px_12px_0_rgba(11,22,44,0.05)]">
      <div className="flex justify-between items-center p-4">
        <div className='flex'>
        <Button className="py-2 mr-2" type='button' onClick={() => navigate('/add-goal')}>Add Goal</Button>
        <Button className="py-2" type='button' onClick={() => navigate('/add-budget')}>Add Budget</Button>
        </div>
        <p className="text-lg">
          Welcome, <span className="font-semibold">{user?.name}</span>
        </p>
      </div>
    </div>
  )
}
