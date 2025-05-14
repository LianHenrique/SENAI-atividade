import HomeBody from "../../Components/Body/HomeBody"
import Cabecalho from "../../Components/Cabecalho/Cabecalho"
import Footer from "../../Components/Footer/Footer"
import styles from "../App.module.css"

function Home() {

  return (
    <div>
      <Cabecalho botaoAtual = {1}/>
      <HomeBody/>
      <Footer />
    </div>
  )
}

export default Home
