import { BUDGET_SECTIONS, CURRENCIES } from '@/pages/AddBudget/constants'
import { BudgetSchemaType } from '@/pages/AddBudget/helpers'
import { Control, UseFormSetValue } from 'react-hook-form'

export type BudgetFormProps = {
  selectedBudgetSection: `${BUDGET_SECTIONS}`
  currency: `${CURRENCIES}`
  control: Control<BudgetSchemaType>
  setValue: UseFormSetValue<BudgetSchemaType>
  watchItems: BudgetSchemaType['items']
}

export type UseBudgetFormProps = {
  control: Control<BudgetSchemaType>
  selectedBudgetSection: `${BUDGET_SECTIONS}`
}
