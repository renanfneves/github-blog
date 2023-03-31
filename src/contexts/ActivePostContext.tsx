import { createContext, ReactNode, useCallback, useState } from 'react'
import { api } from '../lib/axios'
import { PostDTO } from '../utils/dtos/PostDTO'

interface ActivePostType {
  activePost: PostDTO | null
  fetchActivePost(postId: number): Promise<void>
  clearActivePost(): void
}

interface ActivePostProviderProps {
  children: ReactNode
}

export const ActivePostContext = createContext({} as ActivePostType)

export function ActivePostProvider({ children }: ActivePostProviderProps) {
  const [activePost, setActivePost] = useState<PostDTO | null>(null)

  const userName = import.meta.env.VITE_GITHUB_USERNAME
  const repositoryName = import.meta.env.VITE_GITHUB_REPOSITORY_NAME

  const fetchActivePost = useCallback(
    async (postId: number) => {
      const { data } = await api.get(
        `repos/${userName}/${repositoryName}/issues/${postId}`,
      )

      const post = data ? new PostDTO(data) : null

      setActivePost(post)
    },
    [repositoryName, userName],
  )

  const clearActivePost = useCallback(() => {
    setActivePost(null)
  }, [])

  return (
    <ActivePostContext.Provider
      value={{ activePost, fetchActivePost, clearActivePost }}
    >
      {children}
    </ActivePostContext.Provider>
  )
}
