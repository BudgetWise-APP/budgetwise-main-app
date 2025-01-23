import { useQuery } from '@tanstack/react-query'

import { getCoinmarketcapCoins } from '@/api/cryptoApi'

export const useCoinsTracker = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getCoinmarketcapCoins'],
    queryFn: getCoinmarketcapCoins,
  })

  return { data, isLoading }
}
