import { BUDGET_SECTIONS } from '@/pages/AddBudget/constants'

export type BudgetNavigationProps = {
  selectedBudgetSection: `${BUDGET_SECTIONS}`
  setSelectedBudgetSection: (section: BUDGET_SECTIONS) => void
}
