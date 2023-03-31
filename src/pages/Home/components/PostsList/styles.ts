import styled from 'styled-components'

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(auto, 16.25rem);
  gap: 2rem;
`
