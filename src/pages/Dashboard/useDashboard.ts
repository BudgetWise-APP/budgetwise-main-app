import { useMutation, useQuery } from '@tanstack/react-query'

import {
  addFavoriteCoin,
  getBinanceAccount,
  getByBitAccount,
} from '@/api/cryptoApi'

export const useDashboard = () => {
  const { data: binanceMoney, isLoading: isBinanceLoading } = useQuery({
    queryKey: ['binanceBudget'],
    queryFn: getBinanceAccount,
  })

  const { data: bybitMoney, isLoading: isBybitLoading } = useQuery({
    queryKey: ['bybitBudget'],
    queryFn: getByBitAccount,
  })

  const { mutate } = useMutation({
    mutationFn: addFavoriteCoin,
  })

  return {
    binanceMoney,
    bybitMoney,
    mutate,
    isBinanceLoading,
    isBybitLoading,
  }
}
