import { useCrypto } from './useCrypto'
import Box from '@/components/Box'
import Spinner from '@/components/Spinner'

export const Crypto = () => {
  const { byBitAccount, binanceAccount, isLoading, keysInputType, handleShowKeys, toggleDisplayIconClass} = useCrypto()

  return (
    <Box className="max-w-[724px] py-6 px-12 flex-col">
      <div className="flex justify-between w-full items-center mb-6">
        <h4 className="font-bold color-lue-900 text-xl">
          API Settings <span onClick={handleShowKeys} className='cursor-pointer'><i className={toggleDisplayIconClass}></i></span>
          </h4>
        <button className="py-4 px-6 transition text-sm font-bold rounded-[44px] bg-blue-500 text-white shadow-custom-blue hover:scale-105">
          Add API
        </button>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid py-3 px-6 items-center justify-between grid-cols-2 gap-4 auto-rows-auto w-full bg-[#f7f9fc] border-t border-b border-[#e9eaf3]">
            <span className="font-semibold text-xs uppercase">Name</span>
            <span className="font-semibold text-xs uppercase">Api keys</span>
          </div>
          <div className="grid py-4 px-6 items-start justify-between grid-cols-2 gap-4 auto-rows-auto w-full border-b border-[#e9eaf3]">
            <span className="font-bold text-sm">Binance</span>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-bold text-xs w-[85px]">API-KEY</span>
                <input
                  className="transition text-sm rounded-[52px] border border-[#e9eaf3] bg-[#f7f9fc] h-[38px] px-4 outline-none focus:border-blue-500 mb-2"
                  readOnly
                  type={keysInputType}
                  placeholder="**********"
                  value={binanceAccount?.api_key}
                />
              </div>
              <div className="flex items-center">
                <span className="font-bold text-xs w-[85px]">SECRET-KEY</span>
                <input
                  className="transition text-sm rounded-[52px] border border-[#e9eaf3] bg-[#f7f9fc] h-[38px] px-4 outline-none focus:border-blue-500 mb-2"
                  readOnly
                  type={keysInputType}
                  placeholder="**********"
                  value={binanceAccount?.secret_key}
                />
              </div>
            </div>
          </div>
          <div className="grid py-4 px-6 items-start justify-between grid-cols-2 gap-4 auto-rows-auto w-full border-b border-[#e9eaf3]">
            <span className="font-bold text-sm">ByBit</span>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-bold text-xs w-[85px]">API-KEY</span>
                <input
                  className="transition text-sm rounded-[52px] border border-[#e9eaf3] bg-[#f7f9fc] h-[38px] px-4 outline-none focus:border-blue-500 mb-2"
                  readOnly
                  type={keysInputType}
                  placeholder="**********"
                  value={byBitAccount?.api_key}
                />
              </div>
              <div className="flex items-center">
                <span className="font-bold text-xs w-[85px]">SECRET-KEY</span>
                <input
                  className="transition text-sm rounded-[52px] border border-[#e9eaf3] bg-[#f7f9fc] h-[38px] px-4 outline-none focus:border-blue-500 mb-2"
                  readOnly
                  type={keysInputType}
                  placeholder="**********"
                  value={byBitAccount?.secret_key}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </Box>
  )
}
