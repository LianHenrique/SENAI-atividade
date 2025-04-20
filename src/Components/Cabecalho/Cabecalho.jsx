import Barra from "./Barra/Barra"
import NavBar from "./NavBar/NavBar"

const Cabecalho = (props) => {
  return (
    <div>
        <Barra />
        <NavBar botaoAtual = {props.botaoAtual}/>
    </div>
  )
}

export default Cabecalho