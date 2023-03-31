import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ActivePostContext } from '../contexts/ActivePostContext'

export function useActivePost() {
  const { postId } = useParams()

  const context = useContext(ActivePostContext)

  if (!context) {
    throw new Error(
      'É necessário estar dentro do ActivePostContext para fazer uso deste hook',
    )
  }

  const { fetchActivePost } = context

  useEffect(() => {
    fetchActivePost(Number(postId))
  }, [fetchActivePost, postId])

  return context
}
