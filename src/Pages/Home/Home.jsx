import HomeBody from "../../Components/Body/HomeBody"
import Cabecalho from "../../Components/Cabecalho/Cabecalho"
import styles from "../App.module.css"

function Home() {

  return (
    <div>
      <Cabecalho botaoAtual = {1}/>
      <HomeBody/>
    </div>
  )
}

export default Home
