import { NotFoundConatiner } from './styles'

import notFoundImage from '../../assets/notfound.png'

export function NotFound() {
  return (
    <NotFoundConatiner>
      <img src={notFoundImage} alt="Não encontrado" />
    </NotFoundConatiner>
  )
}
