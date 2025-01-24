import { useEffect, useState } from 'react'

import { DEBOUNCE_DELAY } from '@/constants'

export const useDebounce = (
  value: any,
  delay: DEBOUNCE_DELAY = DEBOUNCE_DELAY.short,
) => {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debounced
}
