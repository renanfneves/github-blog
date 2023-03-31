import { createContext, ReactNode, useCallback, useState } from 'react'
import { api } from '../lib/axios'
import { GithubProfileDTO } from '../utils/dtos/GithubProfileDTO'

interface GithubProfileContextType {
  profile: GithubProfileDTO | undefined
  fetchProfile: (username: string) => Promise<void>
}

interface GithubProfileProviderProps {
  children: ReactNode
}

export const GithubProfileContext = createContext(
  {} as GithubProfileContextType,
)

export function GithubProfileProvider({
  children,
}: GithubProfileProviderProps) {
  const [profile, setProfile] = useState<GithubProfileDTO | undefined>(
    undefined,
  )

  const fetchProfile = useCallback(async (username: string) => {
    const response = await api.get(`users/${username}`)

    if (response.data) {
      setProfile(new GithubProfileDTO(response.data))
    }
  }, [])

  return (
    <GithubProfileContext.Provider value={{ profile, fetchProfile }}>
      {children}
    </GithubProfileContext.Provider>
  )
}
