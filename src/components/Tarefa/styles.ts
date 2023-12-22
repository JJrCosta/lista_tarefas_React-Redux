import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../Utils/enums/Tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.laranja
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }
  return '#aaa'
}

export const Card = styled.div`
  padding: 16px;
  border-radius: 16px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-wheight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  color: #fff;
`

export const Descricao = styled.textarea`
  display: block;
  width: 100%;
  margin: 16px 0;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  border: none;
  border-radius: 8px;
  margin-right: 8px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  background-color: #2f3848;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
