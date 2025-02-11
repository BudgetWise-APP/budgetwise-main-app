import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { BUDGET_SECTIONS } from '../AddBudget/constants'
import { deleteBudget, getBudgets } from '@/api/plannerApi'
import { BudgetType } from '@/api/types'

export const useBudgetPage = () => {
  const navigate = useNavigate()
  const [selectedBudgetSection, setSelectedBudgetSection] = useState(
    BUDGET_SECTIONS.essentialNeeds,
  )
  const queryClient = useQueryClient()

  const { data: budgets, isLoading } = useQuery<BudgetType[]>({
    queryKey: ['getBudgets'],
    queryFn: getBudgets,
  })

  const { mutate: deleteBudgetMutate } = useMutation({
    mutationFn: deleteBudget,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getBudgets'] })
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
