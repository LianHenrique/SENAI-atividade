import { useNavigate } from "react-router"
import styles from "../../Components.module.css"

const Barra = () => {
  const navigate = useNavigate()

  const Cadastro = () => {
    navigate("/cadastro")
  }

  return (
    <div className={styles.BarraInicio}>
      <img 
      className={styles.Logo}
      src="https://www.senairs.org.br/sites/default/files/logos/logos_senai_branco.png" 
      alt="" />
    </div>
  )
}

export default Barra