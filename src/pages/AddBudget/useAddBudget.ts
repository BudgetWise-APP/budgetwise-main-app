import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { BUDGET_SECTIONS, CURRENCIES, defaultBudgetFormData } from './constants'
import { AddBudgetSchema, BudgetSchemaType } from './helpers'
import { addBudget } from '@/api/plannerApi'

export const useAddBudget = () => {
  const navigate = useNavigate()
  const [selectedBudgetSection, setSelectedBudgetSection] =
    useState<BUDGET_SECTIONS>(BUDGET_SECTIONS.essentialNeeds)
  const { control, watch, handleSubmit, setValue } = useForm<BudgetSchemaType>({
    resolver: zodResolver(AddBudgetSchema),
    defaultValues: defaultBudgetFormData,
    mode: 'all',
  })

  const currency = watch('currency') as `${CURRENCIES}`
  const watchItems = watch('items')

  const { mutate } = useMutation({
    mutationFn: addBudget,
    onSuccess: () => {
      navigate('/budget-planner')
    },
  })

  function onSubmit(data: BudgetSchemaType) {
    console.log('data', data)
    mutate(data)
  }

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
  }
}
