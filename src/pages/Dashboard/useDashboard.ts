import { getAllCryptBudget } from '@/api'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useDashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['cryptoBudget'],
    queryFn: getAllCryptBudget,
  })

  const cryptoAmount = useMemo(() => {
    if (!isLoading && data) {
      return data[0]?.data + data[1]?.data
    }
  }, [data, isLoading])

  return {
    cryptoAmount,
    isLoading,
  }
}
