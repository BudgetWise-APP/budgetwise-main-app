import { getCoinmarketcapCoins } from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useCoinsTracker = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['getCoinmarketcapCoins'],
        queryFn: getCoinmarketcapCoins,
      })

    return {data, isLoading}
};
