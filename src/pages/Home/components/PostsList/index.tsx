import { PostCard } from '../../../../components/PostCard'
import { usePosts } from '../../../../hooks/usePosts'
import { ListContainer } from './styles'

export function PostsList() {
  const { posts } = usePosts()

  return (
    <div>
      <ListContainer>
        {posts?.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ListContainer>
    </div>
  )
}
