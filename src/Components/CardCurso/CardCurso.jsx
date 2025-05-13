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
                    <h2>{item.nome}</h2>
                    <img src={item.img} alt="" />
                    <div><p>{item.desc}</p></div>
                    <button onClick={() => {
                      navigate("/sobrecurso/sobre", {
                        state: {
                          img: item.img,
                          desc: item.desc,
                          titulo: item.nome,
                          geral: item.geral,
                          materia: item.materia,
                          tempo: item.tempo
                        }
                      })
                    }} type="button">Entrar</button>
                </form>
            ))
        }
    </div>
  )
}

export default CardCurso