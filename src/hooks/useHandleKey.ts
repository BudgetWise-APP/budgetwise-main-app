import { useCallback, useEffect } from 'react'
import { BROWSER_EVENTS, KEYBOARD_KEYS } from '@/constants'

export const useHandleKey = (targetKey: KEYBOARD_KEYS, action: () => void) => {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent | React.KeyboardEvent) => {
      if (event.key === targetKey) {
        action()
      }
    },
    [targetKey, action],
  )

  useEffect(() => {
    window.addEventListener(BROWSER_EVENTS.keydown, handleKeyPress)

    return () => {
      window.removeEventListener(BROWSER_EVENTS.keydown, handleKeyPress)
    }
  }, [handleKeyPress])

  return handleKeyPress
}
