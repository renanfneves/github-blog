import {
  createContext,
  ReactNode,
  useCallback,
  useReducer,
  useState,
} from 'react'
import { api } from '../lib/axios'
import {
  resetActivePostState,
  setActivePost,
  setActivePostError,
} from '../reducers/activePost/actions'
import { activePostReducer } from '../reducers/activePost/reducer'
import { PostDTO } from '../utils/dtos/PostDTO'

interface ActivePostType {
  activePost: PostDTO | null
  error: string | null
  fetchActivePost(postId: number): Promise<void>
  clearActivePost(): void
}

interface ActivePostProviderProps {
  children: ReactNode
}

export const ActivePostContext = createContext({} as ActivePostType)

export function ActivePostProvider({ children }: ActivePostProviderProps) {
  const [activePostState, dispatch] = useReducer(activePostReducer, {
    activePost: null,
    error: null,
  })

  const userName = import.meta.env.VITE_GITHUB_USERNAME
  const repositoryName = import.meta.env.VITE_GITHUB_REPOSITORY_NAME

  const fetchActivePost = useCallback(
    async (postId: number) => {
      api
        .get(`repos/${userName}/${repositoryName}/issues/${postId}`)
        .then(({ data }) => {
          if (!data) {
            dispatch(setActivePostError('Post não encontrado'))
            return
          }

          const post = new PostDTO(data)

          dispatch(setActivePost(post))
        })
        .catch(({ response }) => {
          if (response?.status === 404) {
            dispatch(setActivePostError('Post não encontrado'))
          }

          throw new Error('Erro ao carregar dados do Post')
        })
    },
    [repositoryName, userName],
  )

  const clearActivePost = useCallback(() => {
    dispatch(resetActivePostState())
  }, [])

  return (
    <ActivePostContext.Provider
      value={{ ...activePostState, fetchActivePost, clearActivePost }}
    >
      {children}
    </ActivePostContext.Provider>
  )
}
