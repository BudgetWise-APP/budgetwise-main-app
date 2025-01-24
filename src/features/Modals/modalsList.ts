import { MODAL_NAMES } from '@/constants'
import { lazy } from 'react'

const DefaultModal = lazy(() => import('../DefaultModal'))

export const modalsList = {
  [MODAL_NAMES.defaultModal]: DefaultModal,
}

export default modalsList
