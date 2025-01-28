import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import {
  BUDGET_SECTIONS,
  CURRENCIES,
  defaultBudgetFormData,
} from '../AddBudget/constants'
import { AddBudgetSchema, BudgetSchemaType } from '../AddBudget/helpers'
import { editBudget, getBudgetById } from '@/api/plannerApi'

export const useEditBudget = () => {
  const navigate = useNavigate()
  const { id: budgetId } = useParams()
  const [selectedBudgetSection, setSelectedBudgetSection] =
    useState<BUDGET_SECTIONS>(BUDGET_SECTIONS.essentialNeeds)

  const { control, watch, handleSubmit, setValue, reset } =
    useForm<BudgetSchemaType>({
      resolver: zodResolver(AddBudgetSchema),
      defaultValues: defaultBudgetFormData,
      mode: 'all',
    })

  const { isLoading, data: budget } = useQuery({
    queryKey: ['getBudgetsById', budgetId],
    queryFn: getBudgetById,
  })

  const currency = watch('currency') as `${CURRENCIES}`
  const watchItems = watch('items')
  const budgetTitle = watch('title')

  const { mutate } = useMutation({
    mutationFn: editBudget,
    onSuccess: () => {
      navigate('/budget-planner')
    },
  })

  function onSubmit(data: BudgetSchemaType) {
    mutate({ id: budgetId!, budgetData: data })
  }

  useEffect(() => {
    if (!isLoading && budget) {
      reset(budget)
    }
  }, [isLoading, budget])

  return {
    selectedBudgetSection,
    setSelectedBudgetSection,
    currency,
    watch,
    control,
    onSubmit,
    handleSubmit,
    setValue,
    watchItems,
    budgetTitle,
    isLoading,
  }
}
