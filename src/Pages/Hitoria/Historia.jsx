import HistoryBody from "../../Components/Body/HistoryBody"
import Cabecalho from "../../Components/Cabecalho/Cabecalho"
import Footer from "../../Components/Footer/Footer"

const Historia = () => {
  return (
    <div>
        <Cabecalho botaoAtual = {2}/>
        <HistoryBody />
        <Footer />
    </div>
  )
}

export default Historia