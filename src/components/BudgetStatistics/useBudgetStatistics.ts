import { useMemo } from 'react'
import { calculateExpenses, getBudgetPrediction } from './helpers'

export const useBudgetStatistics = ({ budgetType, income, items }) => {
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
