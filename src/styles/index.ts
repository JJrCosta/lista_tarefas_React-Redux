import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Main = styled.main`
  height: 100vh;
  overflow-y: scroll;
  padding: 0 40px;
`

export const Titulo = styled.h2`
  display: block;
  margin: 40px 0;
  font-weight: bold;
  font-size: 18px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${variaveis.branco1};
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.grafite};
  border: 1px solid ${variaveis.grafite};
  width: 100%;
  outline-color: ${variaveis.azul};
`

export const Botao = styled.button`
  border: none;
  border-radius: 8px;
  margin-right: 8px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  color: ${variaveis.branco1};
  cursor: pointer;
  background-color: ${variaveis.azul2};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
