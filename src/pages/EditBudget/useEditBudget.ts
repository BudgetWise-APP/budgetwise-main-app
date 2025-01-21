import { addBudget, editBudget, getBudgetById } from '@/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { BUDGET_SECTIONS, defaultBudgetFormData } from '../AddBudget/constants'
import { AddBudgetSchemaType, AddBudgetSchema } from '../AddBudget/helpers'

export const useEditBudget = () => {
  const navigate = useNavigate()
  const { id: budgetId } = useParams()
  const [selectedBudgetSection, setSelectedBudgetSection] =
    useState<BUDGET_SECTIONS>(BUDGET_SECTIONS.essentialNeeds)

  const {
    control,
    watch,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AddBudgetSchemaType>({
    resolver: zodResolver(AddBudgetSchema),
    defaultValues: defaultBudgetFormData,
    mode: 'all',
  })

  const { isLoading, data: budget } = useQuery({
    queryKey: ['getBudgetsById', budgetId],
    queryFn: getBudgetById,
    onSuccess: (data) => {
      console.log('data', data)
    },
  })

  const currency = watch('currency')
  const watchItems = watch('items')
  const budgetTitle = watch('title')

  const { mutate } = useMutation({
    mutationFn: editBudget,
    onSuccess: () => {
      navigate('/budget-planner')
    },
  })

  function onSubmit(data) {
    console.log(data)
    mutate({ id: budgetId, budgetData: data })
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
  }
}
