import { Title } from '@/types'
import { CSSProperties } from 'react'

type ModalData = Partial<Title> & {
  handleAction?: () => void
  body?: JSX.Element
  ctaButton?: JSX.Element
  styleWrapper?: CSSProperties
  isVisibleCloseButton?: boolean
}

export type ModalProps = {
  closeModal: () => void
  data: ModalData
}
