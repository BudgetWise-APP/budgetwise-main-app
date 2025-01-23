import { useCoinsTracker } from './useCoinsTracker'
import Box from '@/components/Box'
import PageTitle from '@/components/PageTitle'

const CoinsTracker = () => {
  const {} = useCoinsTracker()

  return (
    <Box>
      <div className="flex flex-col w-full">
        <PageTitle>Coins Tracker</PageTitle>
      </div>
    </Box>
  )
}

export default CoinsTracker
