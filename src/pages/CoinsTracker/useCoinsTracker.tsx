import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { deleteFavotiteCoin, getFavoriteCoins } from '@/api/cryptoApi'
import { useModals } from '@/features/Modals/useModals'
import { MODAL_NAMES } from '@/constants'
import CoinsList from './CoinsList'

export const useCoinsTracker = () => {
  const queryClient = useQueryClient()
  const { openModal } = useModals()
  const { data, isLoading } = useQuery({
    queryKey: ['getFavoriteCoins'],
    queryFn: getFavoriteCoins,
  })

  const { mutate: deleteCoin } = useMutation({
    mutationFn: deleteFavotiteCoin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getFavoriteCoins'] })
    },
  })

  function handleAddCoin() {
    openModal({
      name: MODAL_NAMES.defaultModal,
      data: {
        body: <CoinsList selectedCoins={data} deleteCoin={deleteCoin} />,
        isVisibleCloseButton: true,
      },
    })
  }

  return { data, isLoading, handleAddCoin, deleteCoin }
}
