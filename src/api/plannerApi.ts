import { BudgetSchemaType } from '@/pages/AddBudget/helpers'
import axios from 'axios'
import { MICROSERVICES } from './constants'
import { BudgetType, EditBudgetType, GoalType } from './types'

export async function addBudget(
  data: BudgetSchemaType,
): Promise<BudgetType | void> {
  await axios.post(`${MICROSERVICES.plannerApi}/budget/create`, data)
}

export async function getBudgets(): Promise<BudgetType[]> {
  const { data } = await axios.get(`${MICROSERVICES.plannerApi}/budgets`)

  return data.budgets
}

export async function getBudgetById({ queryKey }: any): Promise<BudgetType> {
  const [, id] = queryKey
  const { data } = await axios.get(`${MICROSERVICES.plannerApi}/budgets/${id}`)

  return data.budget
}

export async function editBudget({
  id,
  budgetData,
}: EditBudgetType): Promise<BudgetType> {
  const { data } = await axios.put(
    `${MICROSERVICES.plannerApi}/budget/update/${id}`,
    budgetData,
  )

  return data.budget
}

export async function deleteBudget(id: string): Promise<string> {
  const { data } = await axios.delete(
    `${MICROSERVICES.plannerApi}/budget/delete/${id}`,
  )

  return data
}

export async function getGoals(): Promise<GoalType[]> {
  const { data } = await axios.get(`${MICROSERVICES.plannerApi}/goals`)

  return data.goals
}

export async function createGoal(goal): Promise<any> {
  await axios.post(`${MICROSERVICES.plannerApi}/goals/create`, goal)
}

export async function getGoalById(goalId): Promise<any> {
  await axios.get(`${MICROSERVICES.plannerApi}/goals/${goalId}`)
}

export async function updateGoal({ goal, goalId }): Promise<any> {
  await axios.put(`${MICROSERVICES.plannerApi}/goals/${goalId}`, goal)
}

export async function deleteGoal(goalId): Promise<any> {
  await axios.delete(`${MICROSERVICES.plannerApi}/goals/${goalId}`)
}

export async function setFavorite({ goalId, isFavorite }): Promise<any> {
  await axios.post(
    `${MICROSERVICES.plannerApi}/goals/favorite/${goalId}?isFavorite=${isFavorite}`,
  )
}

export async function getFavoriteGoal(): Promise<any> {
  const { data } = await axios.get(
    `${MICROSERVICES.plannerApi}/get-favorite-goal`,
  )

  return data.goal
}
