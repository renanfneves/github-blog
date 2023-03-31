import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../contexts/PostsContext'

export function usePosts() {
  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  return { posts }
}
