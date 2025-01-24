import { createContext } from 'react'
import { MODAL_INIT_STATE } from './constants'
import { ModalData, ActionType } from './types'

export const ModalContext = createContext<{
  modals: ModalData[]
  dispatch: React.Dispatch<ActionType>
}>({ modals: MODAL_INIT_STATE, dispatch: () => null })
