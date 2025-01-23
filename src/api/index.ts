import axios from 'axios'

import { MICROSERVICES } from './constants'
import { BudgetType, EditBudgetType } from './types'
import { LoginSchemaType } from '@/pages/Login/helpers'
import { BudgetSchemaType } from '@/pages/AddBudget/helpers'

export async function login(data: LoginSchemaType): Promise<string> {
  const {
    data: { token },
  } = await axios.post(`${MICROSERVICES.auth}/login`, data)

  return token
}

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
