import { PostDTO } from '../../utils/dtos/PostDTO'

export enum ActionsTypes {
  SET_ACTIVE_POST_SUCCESS = 'SET_ACTIVE_POST_SUCCESS',
  SET_ACTIVE_POST_ERROR = 'SET_ACTIVE_POST_ERROR',
  RESET_ACTIVE_POST_STATE = 'RESET_ACTIVE_POST_STATE',
}

export function setActivePost(activePost: PostDTO) {
  return {
    type: ActionsTypes.SET_ACTIVE_POST_SUCCESS,
    payload: {
      activePost,
      error: null,
    },
  }
}

export function setActivePostError(error: string) {
  return {
    type: ActionsTypes.SET_ACTIVE_POST_ERROR,
    payload: {
      activePost: null,
      error,
    },
  }
}

export function resetActivePostState() {
  return {
    type: ActionsTypes.RESET_ACTIVE_POST_STATE,
    payload: {
      activePost: null,
      error: null,
    },
  }
}
