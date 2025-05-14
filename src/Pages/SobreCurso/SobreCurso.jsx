import { useLocation } from 'react-router'
import CursoBody from '../../Components/Body/CursoBody'
import Cabecalho from '../../Components/Cabecalho/Cabecalho'
import Footer from '../../Components/Footer/Footer'

const SobreCurso = () => {
  const { state } = useLocation()
  const { img, desc, titulo, tempo, geral, materia } = state || {}

  return (
    <div>
      <Cabecalho />
      <CursoBody 
      img={img}
      desc={desc}
      titulo={titulo}
      tempo={tempo}
      geral={geral}
      materia={materia}
    />
    </div>
  )
}

export default SobreCurso