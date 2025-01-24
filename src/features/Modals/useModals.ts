import { MODAL_NAMES } from '@/constants'
import { MODAL_ACTIONS } from '@/context/ModalProvider/constants'
import { ModalContext } from '@/context/ModalProvider/context'
import { ModalData } from '@/context/ModalProvider/types'
import { useCallback, useContext } from 'react'

export const useModals = () => {
  const { modals, dispatch } = useContext(ModalContext)
  const openModal = useCallback(
    (modal: ModalData) => {
      dispatch({ type: MODAL_ACTIONS.open, payload: modal })
    },
    [dispatch],
  )

  const closeModal = useCallback(
    (name: keyof typeof MODAL_NAMES) => {
      const modal = document.querySelector(
        `.modal-${name}.fadeIn`,
      ) as HTMLElement
      if (modal) {
        modal.classList.remove('fadeIn')
        modal.classList.add('fadeOut')
        setTimeout(() => {
          modal.style.display = 'none'
          dispatch({ type: MODAL_ACTIONS.close, payload: { name } })
        }, 300)
      }
    },
    [dispatch],
  )

  const closeAllModals = useCallback(() => {
    dispatch({ type: MODAL_ACTIONS.closeAll })
  }, [dispatch])

  return { modals, openModal, closeModal, closeAllModals }
}
