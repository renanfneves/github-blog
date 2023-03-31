import produce from 'immer'
import { PostDTO } from '../../utils/dtos/PostDTO'
import { ActionsTypes } from './actions'

interface AtivePostState {
  activePost: PostDTO | null
  error: string | null
}

export function activePostReducer(state: AtivePostState, action: any) {
  switch (action.type) {
    case ActionsTypes.SET_ACTIVE_POST_SUCCESS:
      return produce(state, (draft) => {
        draft.activePost = action.payload.activePost
        draft.error = null
      })

    case ActionsTypes.SET_ACTIVE_POST_ERROR:
      return produce(state, (draft) => {
        draft.activePost = null
        draft.error = action.payload.error
      })

    case ActionsTypes.RESET_ACTIVE_POST_STATE:
      return produce(state, (draft) => {
        draft.activePost = null
        draft.error = null
      })

    default:
      return state
  }
}
