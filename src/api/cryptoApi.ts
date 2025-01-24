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

export async function getCoinmarketcapCoins({
  queryKey,
}: any): Promise<CryptoCoinType[]> {
  console.log('queryKey', queryKey)
  const [, symbols] = queryKey
  const { data } = await axios.get(
    `${MICROSERVICES.cryptoApi}/crypto-api/coinmarketcap${symbols ? `?symbol=${symbols}` : ''}`,
  )

  return data
}

export async function addFavoriteCoin(data: CryptoCoinType): Promise<any> {
  return await axios.post(
    `${MICROSERVICES.cryptoApi}/crypto-api/cryptocurrencies`,
    data,
  )
}

export async function getFavoriteCoins(): Promise<CryptoCoinType[] | []> {
  const { data } = await axios.get(
    `${MICROSERVICES.cryptoApi}/crypto-api/cryptocurrencies`,
  )

  return data
}

export async function deleteFavotiteCoin(
  id: string,
): Promise<CryptoCoinType[] | []> {
  const { data } = await axios.delete(
    `${MICROSERVICES.cryptoApi}/crypto-api/cryptocurrencies/${id}`,
  )

  return data
}

export async function getIntegrations(): Promise<IntegrationType[]> {
  const { data } = await axios.get(`${MICROSERVICES.cryptoApi}/integrations`)

  return data.integrations
}
