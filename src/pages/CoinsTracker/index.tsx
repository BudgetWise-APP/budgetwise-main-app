import { useCoinsTracker } from './useCoinsTracker'
import Box from '@/components/Box'
import Button from '@/components/Button'
import PageTitle from '@/components/PageTitle'
import Spinner from '@/components/Spinner'
import CoinsItem from './CoinsItem'

const CoinsTracker = () => {
  const { data, isLoading, handleAddCoin, deleteCoin } = useCoinsTracker()

  return (
    <>
      <Box className="mb-4">
        <div className="flex w-full items-center justify-between">
          <PageTitle className="mb-0">Coins Tracker</PageTitle>
          <Button onClick={handleAddCoin}>Add coins</Button>
        </div>
      </Box>
      <Box>
        <div className="flex flex-col w-full">
          <span className="text-lg font-medium mb-4">
            Your favourite coins:
          </span>
          {isLoading && !data?.length ? <Spinner /> : null}
          {!isLoading && !data?.length ? <p>No coins found :( </p> : null}
          {!isLoading && data?.length ? (
            <>
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="grid grid-cols-4 gap-4 w-full">
                  <CoinsItem item="Favorite" className="font-medium" />
                  <CoinsItem item="ID" className="font-medium" />
                  <CoinsItem item="Symbol" className="font-medium" />
                  <CoinsItem item="Name" className="font-medium" />
                </div>
              </div>
              {data.map(({ coin_id, name, symbol }) => (
                <div
                  key={coin_id}
                  className="flex items-center justify-between p-4 border-b border-gray-200"
                >
                  <div className="grid grid-cols-4 gap-4 w-full">
                    <button
                      onClick={() => deleteCoin(coin_id)}
                      className="px-2 py-1 transition text-lg font-bold border rounded-[44px] bg-blue-500 text-white shadow-default-shadow hover:bg-white hover:text-black w-[40px] h-[40px]"
                    >
                      <i className="fa-regular fa-star"></i>
                    </button>
                    <CoinsItem item={coin_id} />
                    <CoinsItem item={name} />
                    <CoinsItem item={symbol} />
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </Box>
    </>
  )
}

export default CoinsTracker
