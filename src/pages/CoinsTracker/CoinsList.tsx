import Spinner from '@/components/Spinner'
import { useCoinsList } from './useCoinsList'
import CoinsItem from './CoinsItem'

const CoinsList = ({ selectedCoins, deleteCoin }) => {
  const {
    data,
    isLoading,
    searchValue,
    setSearchValue,
    addToFavorite,
    selectedCoinsSet,
    buttonClassNames,
  } = useCoinsList(selectedCoins)
  return (
    <div className="p-3">
      <p className="text-lg font-medium uppercase text-center">Coins list</p>
      <input
        type="text"
        className={`py-2 px-3 my-2 rounded bg-white w-full shadow-default-shadow border`}
        placeholder="Search coins by symbol (BTC, ETH, etc.)"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="h-[500px] overflow-auto">
        {isLoading ? (
          <Spinner />
        ) : (
          <ul className="overflow-y-auto h-full">
            {data?.map((coin) => {
              const { coin_id, name, symbol } = coin
              const isSelected = selectedCoinsSet.has(coin_id)
              return (
                <div
                  key={coin_id}
                  className="grid grid-cols-4 gap-4 p-2 w-full-4 border-b border-gray-200"
                >
                  <button
                    onClick={() =>
                      isSelected ? deleteCoin(coin_id) : addToFavorite(coin)
                    }
                    className={`px-2 py-1 transition text-lg font-bold border rounded-[44px] shadow-default-shadow  w-[40px] h-[40px] ${isSelected ? buttonClassNames.selected : buttonClassNames.default}`}
                  >
                    <i className="fa-regular fa-star"></i>
                  </button>
                  <CoinsItem item={coin_id} />
                  <CoinsItem item={name} />
                  <CoinsItem item={symbol} />
                </div>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default CoinsList
