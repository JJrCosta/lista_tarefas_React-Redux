import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;

  textarea {
    resize: none;
    height: 150px;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.grafite};

  p {
    margin-bottom: 8px;
  }

  label {
    margin-right: 16px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
