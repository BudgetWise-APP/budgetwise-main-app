import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

import { useDashboard } from './useDashboard'
import Box from '@/components/Box'
import PageTitle from '@/components/PageTitle'
import ProgressBar from '@/components/ProgressBar'

const Dashboard = () => {
  const {
    binanceMoney,
    bybitMoney,
    isBinanceLoading,
    isBybitLoading,
    favoriteGoal,
    isFavoriteGoalLoading,
  } = useDashboard()

  return (
    <div>
      <PageTitle>Dashboard</PageTitle>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(248px,_1fr))] gap-4 mb-6 justify-between">
        <Box isLoading={isBinanceLoading}>
          <div className="flex items-center w-full">
            <CurrencyDollarIcon width={24} className="flex-shrink-0 mr-2" />
            <div className="flex flex-col">
              <div className="text-sm font-semibold text-gray-600">
                Binance balance
              </div>
              <div className="font-bold text-xl">{binanceMoney}</div>
            </div>
          </div>
        </Box>
        <Box isLoading={isBybitLoading}>
          <div className="flex items-center w-full">
            <CurrencyDollarIcon width={24} className="flex-shrink-0 mr-2" />
            <div className="flex flex-col">
              <div className="text-sm font-semibold text-gray-600">
                ByBit balance
              </div>
              <div className="font-bold text-xl">{bybitMoney}</div>
            </div>
          </div>
        </Box>
        <Box isLoading={isFavoriteGoalLoading}>
          <div className="flex items-center w-full">
            <div className="flex flex-col">
              <div className="text-sm font-semibold text-gray-600">
                {favoriteGoal?.title}
              </div>
              <ProgressBar
                initialValue={favoriteGoal?.currentStatus}
                finalValue={favoriteGoal?.goal}
              />
            </div>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default Dashboard
