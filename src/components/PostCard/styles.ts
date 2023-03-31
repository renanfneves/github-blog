import styled from 'styled-components'

export const PostCardContainer = styled.article`
  position: relative;
  height: 16.25rem;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  cursor: pointer;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > h2 {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    > span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      text-align: right;
    }
  }
`
