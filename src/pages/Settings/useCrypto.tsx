import { useQuery } from '@tanstack/react-query'

import { getIntegrations } from '@/api/cryptoApi'
import { IntegrationType } from '@/api/types'
import { useMemo, useState } from 'react'
import { PLATFORMS } from '@/types'

export const useCrypto = () => {
  const [showKeys, setShowKeys] = useState(false)
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

  function handleShowKeys() {
    setShowKeys(!showKeys)
  }

  const keysInputType = useMemo(() => {
    return showKeys ? 'text' : 'password'
  }, [showKeys])

  const toggleDisplayIconClass = useMemo(() => {
    return showKeys ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'
  }, [showKeys])

  return {
    byBitAccount,
    binanceAccount,
    isLoading,
    keysInputType,
    handleShowKeys,
    showKeys,
    toggleDisplayIconClass
  }
}
