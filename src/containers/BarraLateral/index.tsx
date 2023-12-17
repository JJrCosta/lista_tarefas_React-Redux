import FiltroCard from '../../components/FiltroCard'
import * as S from './syles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluidas" contador={2} />
        <FiltroCard legenda="urgentes" contador={0} />
        <FiltroCard legenda="importantes" contador={4} />
        <FiltroCard legenda="normal" contador={1} />
        <FiltroCard legenda="todas" contador={8} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
