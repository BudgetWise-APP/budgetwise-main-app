import Button from '@/components/Button'
import PageTitle from '@/components/PageTitle'
import BudgetPage from './BudgetPage'
import { useNavigate } from 'react-router-dom'

export const Budget = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <PageTitle className="mb-0">Budgets</PageTitle>
        <Button onClick={() => navigate('/add-budget')}>Add budget</Button>
      </div>
      <div className="flex flex-col w-full">
        <BudgetPage />
      </div>
    </div>
  )
}
