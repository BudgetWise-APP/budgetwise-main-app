import { useForm } from 'react-hook-form'
import { AddBudgetSchema, AddBudgetSchemaType } from './helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import { BUDGET_SECTIONS, defaultBudgetFormData } from './constants'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { addBudget } from '@/api'
import { useNavigate } from 'react-router-dom'

export const useAddBudget = () => {
  const navigate = useNavigate()
  const [selectedBudgetSection, setSelectedBudgetSection] =
    useState<BUDGET_SECTIONS>(BUDGET_SECTIONS.essentialNeeds)
  const { control, watch, handleSubmit, setValue } =
    useForm<AddBudgetSchemaType>({
      resolver: zodResolver(AddBudgetSchema),
      defaultValues: defaultBudgetFormData,
      mode: 'all',
    })

  const currency = watch('currency')
  const watchItems = watch('items')

  const { mutate } = useMutation({
    mutationFn: addBudget,
    onSuccess: () => {
      navigate('/budget-planner')
    },
  })

  function onSubmit(data) {
    console.log(data)
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
