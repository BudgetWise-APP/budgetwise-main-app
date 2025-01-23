import axios from 'axios'

import { MICROSERVICES } from './constants'
import { CryptoCoinType, IntegrationType } from './types'

export async function getBinanceAccount(): Promise<number | undefined> {
  try {
    const { data } = await axios.get(
      `${MICROSERVICES.cryptoApi}/binance/account`,
    )

    return data.total_balance
  } catch (error) {
    console.error(error)
  }
}

export async function getByBitAccount(): Promise<number | undefined> {
  try {
    const { data } = await axios.get(`${MICROSERVICES.cryptoApi}/bybit/account`)

    return data.total_balance
  } catch (error) {
    console.error(error)
  }
}

export async function getCoinmarketcapCoins(): Promise<CryptoCoinType[]> {
  const { data } = await axios.get(
    `${MICROSERVICES.cryptoApi}/crypto-api/coinmarketcap?symbol=BTC,ETH,XRP`,
  )

  return data
}

export async function addFavoriteCoin(data: CryptoCoinType): Promise<any> {
  await axios.post(
    `${MICROSERVICES.cryptoApi}/crypto-api/cryptocurrencies`,
    data,
  )
}

export async function getIntegrations(): Promise<IntegrationType[]> {
  const { data } = await axios.get(`${MICROSERVICES.cryptoApi}/integrations`)

  return data.integrations
}
