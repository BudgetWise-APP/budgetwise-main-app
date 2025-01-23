import { BudgetItemType } from '@/api/types'
import { BUDGET_TYPES } from '@/pages/AddBudget/constants'
import { BudgetItemsCapacityType } from './types'

function calculateIncome(income: number, multiplier: number): number {
  if (!String(income).length || income === 0) {
    return 0
  }

  return Math.round(income * multiplier)
}

function getBasicDistribution(income: number): BudgetItemsCapacityType {
  return {
    needs: calculateIncome(income, 0.5),
    wants: calculateIncome(income, 0.3),
    savings: calculateIncome(income, 0.2),
  }
}

function getSavingsAndGiving(income: number): BudgetItemsCapacityType {
  return {
    needs: calculateIncome(income, 0.7),
    wants: calculateIncome(income, 0.2),
    savings: calculateIncome(income, 0.1),
  }
}

function getMinimalSavings(income: number): BudgetItemsCapacityType {
  return {
    needs: calculateIncome(income, 0.8),
    wants: 0,
    savings: calculateIncome(income, 0.2),
  }
}

function getUniversalBalance(income: number): BudgetItemsCapacityType {
  return {
    needs: calculateIncome(income, 0.6),
    wants: calculateIncome(income, 0.3),
    savings: calculateIncome(income, 0.1),
  }
}

function getZeroBased(): BudgetItemsCapacityType {
  return {
    needs: 0,
    wants: 0,
    savings: 0,
  }
}

export function getBudgetPrediction(
  budgetType: string,
  income: number,
): BudgetItemsCapacityType {
  if (budgetType === BUDGET_TYPES.basicDistribution) {
    return getBasicDistribution(income)
  }

  if (budgetType === BUDGET_TYPES.minimalSavings) {
    return getMinimalSavings(income)
  }
  if (budgetType === BUDGET_TYPES.savingsAndGiving) {
    return getSavingsAndGiving(income)
  }
  if (budgetType === BUDGET_TYPES.universalBalance) {
    return getUniversalBalance(income)
  }

  return getZeroBased()
}

export function calculateExpenses(items: BudgetItemType[]): number {
  return Math.round(
    items.reduce((acc, item) => {
      return Number(acc) + Number(item.amount)
    }, 0),
  )
}
