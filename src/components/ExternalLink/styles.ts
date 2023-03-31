import styled from 'styled-components'

export const ExternalLinkContainer = styled.a`
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
