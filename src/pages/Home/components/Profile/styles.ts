import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme['base-profile']};
  gap: 2rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const ProfileInfo = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  > h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  > p {
    margin-top: 0.5rem;
  }

  > div {
    display: flex;
    gap: 1.5rem;
    margin-top: auto;
  }
`

export const ProfileInfoLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};
`
