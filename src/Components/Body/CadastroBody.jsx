import { useNavigate } from "react-router"
import styles from "../Components.module.css"

const CadastroBody = () => {

    const navigate = useNavigate()

  return (
    <div 
    className={styles.CadastroBody}>
        <form action="">
            <input type="text" placeholder="Nome completo"/>
            <input type="text" placeholder="E-mail"/>
            <input type="passord" placeholder="Senha"/>
            <input type="passord" placeholder="Confirmar senha"/>
            <div
            className={styles.Number}>
                <input className={styles.ddd} type="number" placeholder="DDD" />
                <input className={styles.telefone} type="text" placeholder="Telefone" />
            </div>
            <button
            className={styles.cadastrar}>
                Cadastrar
            </button>
            <button
            className={styles.cancelar}
            onClick={() => {
                navigate("/home")
            }}>
                Cancelar
            </button>
        </form>
    </div>
  )
}

export default CadastroBody