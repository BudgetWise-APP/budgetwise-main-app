import { useQuery } from '@tanstack/react-query'

import { getIntegrations } from '@/api/cryptoApi'
import { IntegrationType } from '@/api/types'
import { useMemo } from 'react'
import { PLATFORMS } from '@/types'

export const useCrypto = () => {
  const { data: integraions, isLoading } = useQuery<IntegrationType[]>({
    queryKey: ['integrations'],
    queryFn: getIntegrations,
  })

  const binanceAccount = useMemo(() => {
    return integraions?.find(
      (integration) => integration.platform === PLATFORMS.binance,
    )
  }, [integraions])

  const byBitAccount = useMemo(() => {
    return integraions?.find(
      (integration) => integration.platform === PLATFORMS.byBit,
    )
  }, [integraions])

  return {
    byBitAccount,
    binanceAccount,
    isLoading,
  }
}
