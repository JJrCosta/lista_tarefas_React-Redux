import Tarefa from '../../components/Tarefa'
import { Main } from './styles'
import * as enums from '../../Utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypescScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para academia',
    descricao: 'Fazer treino B',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Main>
    <p> 2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Main>
)

export default ListaDeTarefas
