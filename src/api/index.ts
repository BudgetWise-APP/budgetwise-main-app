import axios from 'axios'
import { MICROSERVICES } from './constants'

export async function getAllCryptBudget() {
  try {
    const { data } = await axios.get(`${MICROSERVICES.budgets}/all-crypto-budget`)

    return data.budget
  } catch (error) {
    console.error(error)
  }
}

export async function login(data): Promise<string> {
 const {data: {token}}  = await axios.post(`${MICROSERVICES.auth}/login`, data)

 return token
}

export async function addBudget(data) {
  await axios.post(`${MICROSERVICES.budgets}/add-budget`, data)
}

export async function getBudgets() {
  const { data } = await axios.get(`${MICROSERVICES.budgets}/get-budgets`)

  return data.budget
}

export async function getBudgetById({ queryKey }) {
  const [, id] = queryKey
  const { data } = await axios.get(`${MICROSERVICES.budgets}/get-budget/${id}`)

  return data.budget
}

export async function editBudget({ id, budgetData }) {
  const { data } = await axios.put(`${MICROSERVICES.budgets}/edit-budget/${id}`, budgetData)

  return data.budget
}

export async function deleteBudget(id) {
  const { data } = await axios.delete(`${MICROSERVICES.budgets}/delete-budget/${id}`)

  return data
}

export async function getCoinmarketcapCoins() {
  const { data } = await axios.get(`${MICROSERVICES.cryptoApi}/coinmarketcap?symbol=BTC,ETH,XRP`)

  return data
}