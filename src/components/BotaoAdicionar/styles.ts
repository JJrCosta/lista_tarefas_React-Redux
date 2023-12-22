import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  height: 58px;
  width: 58px;
  background-color: ${variaveis.verde};
  border-radius: 50%;
  color: ${variaveis.branco1};
  font-size: 40px;
  text-decoration: none;
`
