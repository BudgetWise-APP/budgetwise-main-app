export type ClassName = { className?: string }

export enum PLATFORMS {
  binance = 'binance',
  byBit = 'bybit',
}

export type DashID = { _id: string }
export type ID = { id: string }
export type Name = { name: string }
export type Title<T = string> = { title: T }
export type Children = { children: React.ReactNode }
