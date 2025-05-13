import styles from "../Components.module.css"

const CursoBody = ({ img, desc, titulo, tempo, materia, geral }) => {
  return (
    <div className={styles.CursoBody}>

      <div className={styles.plataforma}>

        <div className={styles.Resumo}>
          <img src={img} alt={titulo} />
          <div>
            <h1>{titulo}</h1>
            <p>{desc}</p>
          </div>
          <button className={styles.ButtonAssinatura}>
              Assinar
            </button>
            <h2>R$ 350,00</h2>
        </div>

        <div className={styles.sobre}>
          <h1>Sobre o curso</h1>
          <p>{geral}</p>
          <h1>Carga horaria</h1>
          <p>{tempo}</p>
          <h1>Grade curricular</h1>
          <p>{materia}</p>
        </div>

      </div>

    </div>
  )
}

export default CursoBody