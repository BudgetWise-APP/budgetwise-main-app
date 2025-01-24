import { MODAL_NAMES } from '@/constants'
import { Suspense } from 'react'
import ReactDOM from 'react-dom'
import modalsList from './modalsList'
import { useModals } from './useModals'

const Modals = (): JSX.Element => {
  const { modals, closeModal } = useModals()

  return (
    <>
      {modals.map((modal: any) => {
        const ModalComponent =
          modalsList[modal.name as keyof typeof MODAL_NAMES]

        const modalData = modal.data || {}

        return ReactDOM.createPortal(
          <Suspense fallback={<p>Loading...</p>}>
            <ModalComponent
              key={modal.name}
              closeModal={() => closeModal(modal.name)}
              data={modalData}
            />
          </Suspense>,
          document.getElementById('modals-root')!,
        )
      })}
    </>
  )
}

export default Modals
