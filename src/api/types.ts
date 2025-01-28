import { BUDGET_TYPES, CURRENCIES } from '@/pages/AddBudget/constants'
import { BudgetSchemaType } from '@/pages/AddBudget/helpers'
import { DashID, ID, Name, Title } from '@/types'

export type CryptoCoinType = Name & {
  coin_id: number
  symbol: string
}

export type IntegrationType = {
  api_key: string
  secret_key: string
  platform: string
}

export type BudgetItemType = Title & {
  amount: string
  description?: string
  icon?: string
}

export type BudgerItemsType = {
  essentialNeeds: BudgetItemType[]
  personalWants: BudgetItemType[]
  savings: BudgetItemType[]
}

export type BudgetType = DashID &
  Title & {
    budgetType: `${BUDGET_TYPES}`
    currency: `${CURRENCIES}`
    income: string
    items: BudgerItemsType
  }

export type EditBudgetType = ID & {
  budgetData: BudgetSchemaType
}

export type GoalType = DashID & Title & {
  description?: string
  goal: number
  currentStatus: number
  isFavorite: boolean
  done: boolean
  trackBy: string
}