import Button from "@/components/Button"
import PageTitle from "@/components/PageTitle"
import { useNavigate } from "react-router-dom"
import GoalsPage from "./GoalsPage"

const GoalsTracker = () => {
  const navigate = useNavigate()
  
  return (
    <div>
    <div className="flex items-center justify-between mb-4">
      <PageTitle className="mb-0">Goals</PageTitle>
      <Button onClick={() => navigate('/add-goal')}>Add goal</Button>
      </div>
      <div className="flex flex-col w-full">
        <GoalsPage />
      </div>
    </div>
  )
}

export default GoalsTracker