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
  const { data } = await axios.put(`${MICROSERVICES.plannerApi}/budget/update/${id}`, budgetData)

  return data.budget
}

export async function deleteBudget(id) {
  const { data } = await axios.delete(`${MICROSERVICES.plannerApi}/budget/delete/${id}`)

  return data
}

export async function getCoinmarketcapCoins() {
  const { data } = await axios.get(`${MICROSERVICES.cryptoApi}/crypto-api/coinmarketcap?symbol=BTC,ETH,XRP`)

  return data
}

export async function addFavoriteCoin(data) {
  console.log('data', data)
  await axios.post(`${MICROSERVICES.cryptoApi}/crypto-api/cryptocurrencies`, data)
}