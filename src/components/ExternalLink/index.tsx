import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { ExternalLinkContainer } from './styles'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function ExternalLink({ children, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      <span>{children}</span>
      <FontAwesomeIcon icon="arrow-up-right-from-square" />
    </ExternalLinkContainer>
  )
}
