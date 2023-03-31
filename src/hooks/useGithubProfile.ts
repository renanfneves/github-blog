import { useContext, useEffect } from 'react'
import { GithubProfileContext } from '../contexts/GithubProfileContext'

export function useGithubProfile() {
  const githubUserName = import.meta.env.VITE_GITHUB_USERNAME

  const { profile, fetchProfile } = useContext(GithubProfileContext)

  useEffect(() => {
    fetchProfile(githubUserName)
  }, [fetchProfile, githubUserName])

  return {
    profile,
  }
}
