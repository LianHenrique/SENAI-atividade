import Barra from "./Barra/Barra"
import NavBar from "./NavBar/NavBar"
import styles from "../Components.module.css"

const Cabecalho = (props) => {
  return (
    <div 
    className={styles.cabecalho}>
        <Barra />
        <NavBar botaoAtual = {props.botaoAtual}/>
    </div>
  )
}

export default Cabecalho