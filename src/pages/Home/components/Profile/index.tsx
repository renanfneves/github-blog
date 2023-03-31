import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'
import { ExternalLink } from '../../../../components/ExternalLink'
import { useGithubProfile } from '../../../../hooks/useGithubProfile'
import { ProfileContainer, ProfileInfo, ProfileInfoLabel } from './styles'

export function Profile() {
  const theme = useTheme()
  const { profile } = useGithubProfile()

  return (
    <ProfileContainer>
      <img src={profile?.avatar} alt={`imagem do perfil de ${profile?.name}`} />
      <ProfileInfo>
        <h1>{profile?.name}</h1>
        <ExternalLink
          target="_blank"
          href={profile?.github}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        >
          github
        </ExternalLink>
        <p>{profile?.bio}</p>
        <div>
          <ProfileInfoLabel>
            <FontAwesomeIcon
              icon={['fab', 'github']}
              color={theme['base-label']}
              size="lg"
            />
            <span>{profile?.login}</span>
          </ProfileInfoLabel>
          <ProfileInfoLabel>
            <FontAwesomeIcon
              icon="building"
              color={theme['base-label']}
              size="lg"
            />
            <span>{profile?.company}</span>
          </ProfileInfoLabel>
          <ProfileInfoLabel>
            <FontAwesomeIcon
              icon="user-group"
              color={theme['base-label']}
              size="lg"
            />
            <span>{`${profile?.followers} seguidores`}</span>
          </ProfileInfoLabel>
        </div>
      </ProfileInfo>
    </ProfileContainer>
  )
}
