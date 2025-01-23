import { useQuery } from '@tanstack/react-query'

import { getIntegrations } from '@/api/cryptoApi'

export const useCrypto = () => {
  const { data: integraions, isLoading } = useQuery({
    queryKey: ['integrations'],
    queryFn: getIntegrations,
  })

  return {
    integraions,
    isLoading,
  }
}
