import axios from 'axios'

import { MICROSERVICES } from './constants'

export async function login(data): Promise<string> {
  const {
    data: { token },
  } = await axios.post(`${MICROSERVICES.auth}/login`, data)

  return token
}

export async function addBudget(data) {
  await axios.post(`${MICROSERVICES.plannerApi}/budget/create`, data)
}

export async function getBudgets() {
  const { data } = await axios.get(`${MICROSERVICES.plannerApi}/budgets`)

  return data.budgets
}

export async function getBudgetById({ queryKey }) {
  const [, id] = queryKey
  const { data } = await axios.get(`${MICROSERVICES.plannerApi}/budgets/${id}`)

  return data.budget
}

export async function editBudget({ id, budgetData }) {
  const { data } = await axios.put(
    `${MICROSERVICES.plannerApi}/budget/update/${id}`,
    budgetData,
  )

  return data.budget
}

export async function deleteBudget(id) {
  const { data } = await axios.delete(
    `${MICROSERVICES.plannerApi}/budget/delete/${id}`,
  )

  return data
}
