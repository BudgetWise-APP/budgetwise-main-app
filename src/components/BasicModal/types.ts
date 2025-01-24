import { CSSProperties } from 'react'
import { Children, Name } from '@/types'

export type BasicModalProps = Children &
  Name & {
    onClose: () => void
    styleWrapper?: CSSProperties
    isVisibleCloseButton: boolean
  }
