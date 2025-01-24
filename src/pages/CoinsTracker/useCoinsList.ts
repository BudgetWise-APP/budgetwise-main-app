import { addFavoriteCoin, getCoinmarketcapCoins } from '@/api/cryptoApi'
import { DEBOUNCE_DELAY } from '@/constants'
import { useDebounce } from '@/hooks/useDebounce'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

export const useCoinsList = (selectedCoins) => {
  const queryClient = useQueryClient()
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, DEBOUNCE_DELAY.medium)

  const { data, isLoading } = useQuery({
    queryKey: ['getCoinmarketcapCoins', debouncedSearchValue],
    queryFn: getCoinmarketcapCoins,
  })

  const { mutate: addToFavorite } = useMutation({
    mutationFn: addFavoriteCoin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getFavoriteCoins'] })
    },
  })

  const selectedCoinsSet = useMemo(() => {
    return new Set(selectedCoins?.map(({ coin_id }) => coin_id))
  }, [selectedCoins, data])

  const buttonClassNames = {
    default: 'bg-white text-black hover:bg-blue-500 hover:text-white',
    selected: 'bg-blue-500 text-white hover:bg-white hover:text-black',
  }

  return {
    data,
    isLoading,
    setSearchValue,
    searchValue,
    addToFavorite,
    selectedCoinsSet,
    buttonClassNames,
  }
}
