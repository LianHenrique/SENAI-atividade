import CursoBody from '../../Components/Body/CursoBody'
import { useParams } from 'react-router'

const SobreCurso = () => {

    const { id } = useParams()

  return (
    <div>
        <CursoBody id={id} />
    </div>
  )
}

export default SobreCurso