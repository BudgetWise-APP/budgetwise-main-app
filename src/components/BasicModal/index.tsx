import { cn } from '@/utils'
import { useHandleKey } from '@/hooks/useHandleKey'

import './animation.css'
import { BasicModalProps } from './types'
import { KEYBOARD_KEYS } from '@/constants'
import Button from '../Button'

const BasicModal = ({
  children,
  onClose,
  styleWrapper,
  isVisibleCloseButton,
  name,
}: BasicModalProps) => {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const handleEscapePress = useHandleKey(KEYBOARD_KEYS.escape, onClose)

  return (
    <div
      onClick={onClose}
      role="button"
      tabIndex={0}
      className={cn(
        'fixed inset-0 flex justify-center items-center bg-[rgba(23,50,70,0.8)] z-[99999] fadeIn',
        `modal-${name}`,
      )}
      onKeyDown={handleEscapePress}
    >
      <div
        className="w-[calc(100%-100px)] max-w-[570px] bg-white rounded-[5px] relative overflow-auto"
        role="dialog"
        onClick={stopPropagation}
        style={{ ...styleWrapper }}
      >
        {children}
        {isVisibleCloseButton ? (
          <Button onClick={onClose} aria-label="Close modal" className="p-3">
            Close
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default BasicModal
