import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { ExternalLink } from '../../components/ExternalLink'
import { Loading } from '../../components/Loading'
import { NotFound } from '../../components/NotFound'
import { useActivePost } from '../../hooks/useActivePost'
import { handleDisplayDiffDays } from '../../utils/handle-display-diff-days'
import {
  BackwardLink,
  PostContent,
  PostDetailsContainer,
  PostInfo,
  PostInfoContainer,
  PostInfoLabel,
} from './styles'

export function PostDetails() {
  const theme = useTheme()

  const { activePost, error, clearActivePost } = useActivePost()

  const { diffDays, displayComments } = useMemo(() => {
    if (!activePost) return {}

    const diffDays = handleDisplayDiffDays(new Date(activePost.createdAt))

    const displayComments = `${activePost.comments} comentário${
      activePost.comments > 1 ? 's' : ''
    }`

    return { diffDays, displayComments }
  }, [activePost])

  useEffect(() => {
    return () => {
      clearActivePost()
    }
  }, [clearActivePost])

  if (!activePost && !error) {
    return <Loading />
  }

  if (error) {
    return <NotFound />
  }

  return (
    <PostDetailsContainer>
      <PostInfoContainer>
        <div>
          <BackwardLink to="/">
            <FontAwesomeIcon icon="chevron-left" color={theme.blue} size="sm" />
            <span>voltar</span>
          </BackwardLink>
          <ExternalLink href={activePost!.url} target="_blank">
            ver no github
          </ExternalLink>
        </div>
        <h1>{activePost!.title}</h1>
        <PostInfo>
          <div>
            <PostInfoLabel>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color={theme['base-label']}
                size="lg"
              />
              <span>{activePost!.author.login}</span>
            </PostInfoLabel>
            <PostInfoLabel>
              <FontAwesomeIcon
                icon="calendar-day"
                color={theme['base-label']}
                size="lg"
              />
              <span>{diffDays}</span>
            </PostInfoLabel>
            <PostInfoLabel>
              <FontAwesomeIcon
                icon="comment"
                color={theme['base-label']}
                size="lg"
              />
              <span>{displayComments}</span>
            </PostInfoLabel>
          </div>
        </PostInfo>
      </PostInfoContainer>
      <PostContent dangerouslySetInnerHTML={{ __html: activePost!.body }} />
    </PostDetailsContainer>
  )
}
