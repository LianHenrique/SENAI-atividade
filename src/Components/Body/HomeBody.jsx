import CardCurso from "../CardCurso/CardCurso"
import styles from "../Components.module.css"

const HomeBody = () => {
  return (
    <div
    className={styles.fundo}>
      <div className={styles.HomeBody}>
        <iframe
          src="https://www.youtube.com/embed/FK6Uctz8_VQ?autoplay=1&mute=1&vq=hd1080&loop=1&playlist=FK6Uctz8_VQ"
          title="Vídeo de introdução SENAI"
          frameBorder="0"
          allow="autoplay; encrypted-media;"
          allowFullScreen
        ></iframe>
        <div className={styles.TxtBemVindo}>
          <h1>Seja bem-vindo ao SENAI!</h1>
          <p>
          Aqui, você dá o primeiro passo rumo a um futuro repleto de possibilidades. No SENAI, acreditamos no poder da educação para transformar vidas e construir caminhos sólidos para o sucesso profissional. Nosso compromisso vai além de ensinar — preparamos você para enfrentar os desafios do mercado com confiança, competência e visão de futuro.
          <br /><br />
          Com uma metodologia que une teoria, prática e inovação, oferecemos um ambiente de aprendizado dinâmico, equipado com tecnologia de ponta e voltado para as reais demandas da indústria. Cada curso, cada projeto, cada experiência aqui dentro é pensado para desenvolver suas habilidades técnicas e comportamentais, tornando você um profissional completo.
          <br /><br />
          Assista ao vídeo ao lado e descubra como o SENAI pode ser o ponto de partida para uma carreira promissora, com oportunidades concretas e uma formação de excelência reconhecida em todo o país.
          </p>
        </div>
        <div 
        className={styles.Form}>
          <form action="">
            <input type="text" placeholder="Login"/>
            <input type="password" name="" id="" placeholder="Senha"/>
            <button type="button">Entrar</button>
            <a href="/cadastro">Cadastre-se</a>
          </form>
          <div 
          className={styles.FormSobreSiteDesktop}>
            <h1>Sobre o site</h1>
            <p>Este site foi desenvolvido com o objetivo de apresentar o SENAI — uma das maiores instituições de educação profissional do Brasil — de forma clara, acessível e interativa. Aqui, você encontra informações sobre a história do SENAI, sua missão, sua contribuição para a indústria brasileira e, principalmente, sobre as diversas oportunidades de formação técnica e profissional que a instituição oferece.</p>
          </div>
        </div>
        <CardCurso 
        cards={[
        {
          img:"https://escotec.com.br/wp-content/uploads/2023/01/Curso-Mecanica-de-Autos-2.0.jpg",
          desc:"Capacita profissionais para trabalhar com manutenção e montagem de sistemas mecânicos, com foco prático e técnico.",
          nome:"Técnico mecanica",
        },
        {
          img:"https://cms.fiemt.ind.br/arquivos/senai/images/conteudos/img-destaque/Eletrot%C3%A9cnica.jpg",
          desc:"Forma profissionais para atuar na instalação, manutenção e operação de sistemas elétricos em residências, indústrias e comércios.",
          nome:"Técnico eletrotécnica",
        },
        {
          img:"https://i1.wp.com/elaborata.com.br/blog/wp-content/uploads/2018/06/curso-te%CC%81cnico-e1476051467658.jpg?resize=433%2C300&ssl=1",
          desc:"Capacita profissionais para montar, configurar, fazer manutenção e reparar computadores e equipamentos eletrônicos.",
          nome:"Técnico hardware",
        },
      ]}
        />
        <div 
          className={styles.FormSobreSiteMobile}>
          <h1>Sobre o site</h1>
          <p>Este site foi desenvolvido com o objetivo de apresentar o SENAI — uma das maiores instituições de educação profissional do Brasil — de forma clara, acessível e interativa. Aqui, você encontra informações sobre a história do SENAI, sua missão, sua contribuição para a indústria brasileira e, principalmente, sobre as diversas oportunidades de formação técnica e profissional que a instituição oferece.</p>
        </div> 
      </div>
    </div>
  )
}

export default HomeBody