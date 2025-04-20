import { useNavigate } from "react-router"
import styles from "../../Components.module.css"

const NavBar = (props) => {

  const navigate = useNavigate()

  return (
    <div className={styles.NavBar}>
        <button
        className={props.botaoAtual == 1 ? styles.botaoAtual : styles.outroBotao}
        onClick={() => {
          navigate("/")
        }}>Home</button>
        <button
        className={props.botaoAtual == 2 ? styles.botaoAtual : styles.outroBotao}
        onClick={() => {
          navigate("/historia")
        }}>Historia</button>
    </div>
  )
}

export default NavBar