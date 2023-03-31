import { PostDTO } from '../../utils/dtos/PostDTO'
import { PostCardContainer } from './styles'
import { useMemo } from 'react'
import { handleDisplayDiffDays } from '../../utils/handle-display-diff-days'
import { useNavigate } from 'react-router-dom'

interface PostCardProps {
  post: PostDTO
}

export function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate()

  const diffDays = useMemo(() => {
    const diff = handleDisplayDiffDays(new Date(post.createdAt))

    return diff
  }, [post.createdAt])

  function redirectToDetails() {
    navigate(`/post/${post.number}`)
  }

  return (
    <PostCardContainer onClick={redirectToDetails}>
      <div>
        <h2>{post.title}</h2>
        <span>{diffDays}</span>
      </div>
      <p>{post.body.substring(0, 180)}...</p>
    </PostCardContainer>
  )
}
