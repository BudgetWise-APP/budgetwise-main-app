import BasicModal from '@/components/BasicModal'
import { ModalProps } from '../Modals/types'
import { MODAL_NAMES } from '@/constants'

const DefaultModal = ({ data, closeModal = () => {} }: ModalProps) => {
  return (
    <BasicModal
      onClose={closeModal}
      styleWrapper={data.styleWrapper}
      isVisibleCloseButton={Boolean(data.isVisibleCloseButton)}
      name={MODAL_NAMES.defaultModal}
    >
      {data.body}
    </BasicModal>
  )
}

export default DefaultModal
