import { useMutation, useQuery } from '@tanstack/react-query'

import {
  addFavoriteCoin,
  getBinanceAccount,
  getByBitAccount,
} from '@/api/cryptoApi'
import { getFavoriteGoal } from '@/api/plannerApi'

export const useDashboard = () => {
  const { data: binanceMoney, isLoading: isBinanceLoading } = useQuery({
    queryKey: ['binanceBudget'],
    queryFn: getBinanceAccount,
  })

  const { data: bybitMoney, isLoading: isBybitLoading } = useQuery({
    queryKey: ['bybitBudget'],
    queryFn: getByBitAccount,
  })

  const { data: favoriteGoal, isLoading: isFavoriteGoalLoading } = useQuery({
    queryKey: ['getFavoriteGoal'],
    queryFn: getFavoriteGoal,
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
    favoriteGoal,
    isFavoriteGoalLoading,
  }
}
