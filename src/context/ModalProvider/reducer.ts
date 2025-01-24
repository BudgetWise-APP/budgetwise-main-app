import { MODAL_ACTIONS } from './constants'
import { ModalData, ActionType } from './types'

export const modalReducer = (
  state: ModalData[],
  action: ActionType,
): ModalData[] => {
  switch (action.type) {
    case MODAL_ACTIONS.open:
      return [...state, action.payload]
    case MODAL_ACTIONS.close:
      return state.filter((modal) => modal.name !== action.payload.name)
    case MODAL_ACTIONS.closeAll:
      return []
    default:
      return state
  }
}
