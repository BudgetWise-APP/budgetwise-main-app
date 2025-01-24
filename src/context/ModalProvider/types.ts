import { Dispatch } from 'react'

import { MODAL_ACTIONS } from './constants'
import { MODAL_NAMES } from '@/constants'

export type ModalData<T = unknown> = {
  name: keyof typeof MODAL_NAMES
  data?: T
}

export type ActionType<T = unknown> =
  | { type: MODAL_ACTIONS.open; payload: ModalData<T> }
  | { type: MODAL_ACTIONS.close; payload: { name: string } }
  | { type: MODAL_ACTIONS.closeAll }

export type ModalState<T = unknown> = ModalData<T>[]

export type ModalContextType<T = unknown> = {
  modals: ModalState<T>
  dispatch: Dispatch<ActionType<T>>
}

export type ModalDialogProps<T = unknown> = {
  closeModal?: () => void
  data?: T
}
