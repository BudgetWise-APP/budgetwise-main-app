import { useReducer } from 'react'

import { Children } from '@/types'
import { MODAL_INIT_STATE } from './constants'
import { ModalContext } from './context'
import { modalReducer } from './reducer'
import Modals from '@/features/Modals'

export const ModalProvider = ({ children }: Children) => {
  const [modals, dispatch] = useReducer(modalReducer, MODAL_INIT_STATE)

  return (
    <ModalContext.Provider value={{ modals, dispatch }}>
      {children}
      <Modals />
    </ModalContext.Provider>
  )
}
