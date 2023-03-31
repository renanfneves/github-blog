import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    span:first-child {
      font-weight: 700;
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span:last-child {
      font-size: 0.875rem;
      text-align: right;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 0.5rem;

    background: ${(props) => props.theme['base-input']};
    border: ${(props) => props.theme['base-border']};
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};

      &::placeholder {
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`
