import Tarefa from '../../components/Tarefa'
import { Main } from './styles'

const ListaDeTarefas = () => (
  <Main>
    <p> 2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Main>
)

export default ListaDeTarefas
