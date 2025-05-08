import { useNavigate } from "react-router"
import styles from "../Components.module.css"

const CardCurso = (props) => {

  const navigate = useNavigate()

  return (
    <div
    className={styles.CardCurso}>
        {
            props.cards.map((item, id) => (
                <form key={id} action="">
                    <h2>{item.nome} {id}</h2>
                    <img src={item.img} alt="" />
                    <div><p>{item.desc}</p></div>
                    <button onClick={() => {
                      navigate(`/sobrecurso/${id}`)
                    }} type="button">Entrar</button>
                </form>
            ))
        }
    </div>
  )
}

export default CardCurso