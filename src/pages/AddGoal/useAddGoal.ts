import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AddGoalSchemaType, AddGoalSchema } from './helpers'
import { createGoal } from '@/api/plannerApi'
import { DEFAULT_GOAL, PLATFORMS } from './constants'
import { getBinanceAccount, getByBitAccount } from '@/api/cryptoApi'
import { useCallback, useState } from 'react'

export const useAddGoal = () => {
  const [requestError, setRequestError] = useState<string | null>(null)
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<AddGoalSchemaType>({
    resolver: zodResolver(AddGoalSchema),
    defaultValues: DEFAULT_GOAL,
    mode: 'all',
  })

  const trackBy = watch('trackBy')

  const { mutate } = useMutation({
    mutationFn: createGoal,
    onSuccess: () => {
      navigate('/goals-tracker')
    },
    onError: (error) => {
      setRequestError(error?.response?.data?.detail)
    },
  })

  const { mutate: getBinanceMutate } = useMutation({
    mutationFn: getBinanceAccount,
    onSuccess: (data) => {
      setValue('currentStatus', String(data))
    },
  })

  const { mutate: getByBitMutate } = useMutation({
    mutationFn: getByBitAccount,
    onSuccess: (data) => {
      setValue('currentStatus', String(data))
    },
  })

  const trackMoneyFromPlatforms = useCallback(
    async (platform) => {
      if (platform === PLATFORMS.binance) {
        getBinanceMutate()
      }

      if (platform === PLATFORMS.bybit) {
        getByBitMutate()
      }
    },
    [trackBy],
  )

  async function onSubmit(data: AddGoalSchemaType) {
    try {
      await mutate({ ...data, currentStatus: Number(data.currentStatus) })
    } catch (error) {
      console.log('error', error)
    }
  }
  return {
    control,
    handleSubmit,
    onSubmit,
    trackMoneyFromPlatforms,
    trackBy,
    errors,
    requestError,
    setFavoriteMutation,
  }
}
