import { SearchFormContainer } from './styles'
import { ChangeEvent, memo, useEffect, useMemo, useState } from 'react'
import { useIsMounted } from '../../../../hooks/useIsMounted'
import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../../../contexts/PostsContext'

function SearchFormComponent() {
  const [query, setQuery] = useState('')
  const isMounted = useIsMounted()
  const { fetchPosts, totalPosts } = useContextSelector(
    PostsContext,
    (context) => ({
      fetchPosts: context.fetchPosts,
      totalPosts: context.posts.length,
    }),
  )

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  const totalPostsDisplay = useMemo(() => {
    const suffix = totalPosts === 1 ? `publicação` : 'publicações'

    return `${totalPosts} ${suffix}`
  }, [totalPosts])

  useEffect(() => {
    if (isMounted) {
      fetchPosts(query)
    }
  }, [fetchPosts, isMounted, query])

  return (
    <SearchFormContainer>
      <div>
        <span>Publicações</span>
        <span>{totalPostsDisplay}</span>
      </div>
      <input
        type="text"
        placeholder="Busque por transações"
        value={query}
        onChange={handleOnChange}
      />
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
