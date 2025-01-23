import { BudgerItemsType } from '@/api/types'

export type UseBudgetStatisticsProps = {
  budgetType: string
  income: string
  items: BudgerItemsType
}

export type UseBudgetStatisticsType = {
  budgetPredictions: { needs: number; wants: number; savings: number }
  needsExpenses: number
  wantsExpenses: number
  savingsExpenses: number
  totalExpenses: number
  remainingIncome: number
}

export type BudgetItemsCapacityType = {
  needs: number
  wants: number
  savings: number
}

export type BudgetStatusType = {
  balance: number
  expenses: number
  currency: string
}
