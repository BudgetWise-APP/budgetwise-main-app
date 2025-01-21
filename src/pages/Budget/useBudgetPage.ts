import { deleteBudget, getBudgets } from '@/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { BUDGET_SECTIONS } from '../AddBudget/constants'
import { useNavigate } from 'react-router-dom'

export const useBudgetPage = () => {
  const navigate = useNavigate()
  const [selectedBudgetSection, setSelectedBudgetSection] = useState(
    BUDGET_SECTIONS.essentialNeeds,
  )
  const queryClient = useQueryClient()

  const { data: budgets, isLoading } = useQuery({
    queryKey: ['getBudgets'],
    queryFn: getBudgets,
  })

  const { mutate: deleteBudgetMutate } = useMutation({
    mutationFn: deleteBudget,
    onSuccess: () => {
      console.log('Budget deleted')
      queryClient.invalidateQueries(['getBudgets'])
    },
  })

  return {
    budgets,
    isLoading,
    selectedBudgetSection,
    setSelectedBudgetSection,
    deleteBudgetMutate,
    navigate,
  }
}
