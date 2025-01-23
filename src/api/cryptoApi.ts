import axios from 'axios'

import { MICROSERVICES } from './constants'

export async function getBinanceAccount() {
  try {
    const { data } = await axios.get(
      `${MICROSERVICES.cryptoApi}/binance/account`,
    )

    return data.total_balance
  } catch (error) {
    console.error(error)
  }
}

export async function getByBitAccount() {
  try {
    const { data } = await axios.get(`${MICROSERVICES.cryptoApi}/bybit/account`)

    return data.total_balance
  } catch (error) {
    console.error(error)
  }
}

export async function getCoinmarketcapCoins() {
  const { data } = await axios.get(
    `${MICROSERVICES.cryptoApi}/crypto-api/coinmarketcap?symbol=BTC,ETH,XRP`,
  )

  return data
}

export async function addFavoriteCoin(data) {
  await axios.post(
    `${MICROSERVICES.cryptoApi}/crypto-api/cryptocurrencies`,
    data,
  )
}

export async function getIntegrations() {
  const { data } = await axios.get(`${MICROSERVICES.cryptoApi}/integrations`)

  return data.integrations
}
