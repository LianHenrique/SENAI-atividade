import CadastroBody from "../../Components/Body/CadastroBody"
import Cabecalho from "../../Components/Cabecalho/Cabecalho"
import Footer from "../../Components/Footer/Footer"
import styles from "../App.module.css"

const Cadastro = () => {
  return (
    <div>
      <Cabecalho />
      <CadastroBody />
      <Footer />
    </div>
  )
}

export default Cadastro