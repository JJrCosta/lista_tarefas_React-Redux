import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../components/Tarefa/styles'

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
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666;
  border: 1px solid #666;
  width: 100%;
  outline-color: #1e90ff;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
