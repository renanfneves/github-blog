import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BackwardLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme.blue};
  gap: 0.5rem;
  width: fit-content;
  text-decoration: none;
  font-weight: 700;
  font-size: 12px;

  > span {
    text-transform: uppercase;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`

export const PostInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme['base-profile']};
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const PostInfo = styled.article`
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

export const PostInfoLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const PostContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 2rem;
`
