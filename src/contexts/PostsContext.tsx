import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { PostDTO } from '../utils/dtos/PostDTO'
import { api } from '../lib/axios'

interface PostsContextType {
  posts: PostDTO[]
  fetchPosts(query?: string): Promise<void>
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const userName = import.meta.env.VITE_GITHUB_USERNAME
  const repositoryName = import.meta.env.VITE_GITHUB_REPOSITORY_NAME

  const [posts, setPosts] = useState<PostDTO[]>([])

  const fetchPosts = useCallback(
    async (query?: string) => {
      const response = await api.get(
        `repos/${userName}/${repositoryName}/issues`,
      )

      const posts =
        response.data
          ?.filter((post: GithubIssueData) => {
            return query
              ? post.title.toLowerCase().includes(query.toLowerCase())
              : post
          })
          .map((post: GithubIssueData) => new PostDTO(post)) || []

      setPosts(posts)
    },
    [repositoryName, userName],
  )

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
