import { useMemo } from 'react'

import { calculateExpenses, getBudgetPrediction } from './helpers'
import { UseBudgetStatisticsProps, UseBudgetStatisticsType } from './types'

export const useBudgetStatistics = ({
  budgetType,
  income,
  items,
}: UseBudgetStatisticsProps): UseBudgetStatisticsType => {
  const budgetPredictions = useMemo(() => {
    return getBudgetPrediction(budgetType, +income)
  }, [budgetType, income])

  const needsExpenses = calculateExpenses(items.essentialNeeds)
  const wantsExpenses = calculateExpenses(items.personalWants)
  const savingsExpenses = calculateExpenses(items.savings)
  const totalExpenses = needsExpenses + wantsExpenses + savingsExpenses
  const remainingIncome = +income - totalExpenses

  return {
    budgetPredictions,
    needsExpenses,
    wantsExpenses,
    savingsExpenses,
    totalExpenses,
    remainingIncome,
  }
}
