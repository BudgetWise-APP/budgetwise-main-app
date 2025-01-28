export const DEFAULT_GOAL = {
  title: '',
  description: '',
  goal: '',
  currentStatus: '',
  trackBy: '',
  isFavorite: false,
  done: false,
}

export enum PLATFORMS {
  binance = 'binance',
  bybit = 'bybit',
}

export const platformOptions = [
  { label: 'None', value: '' },
  { label: 'Binance', value: PLATFORMS.binance },
  { label: 'ByBit', value: PLATFORMS.bybit },
]
