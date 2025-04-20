import styles from "../Components.module.css"

const HomeBody = () => {
  return (
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
            <a href="#">Cadastre-se</a>
          </form>
          <div 
          className={styles.FormSobreSiteDesktop}>
            <h1>Sobre o site</h1>
            <p>Este site foi desenvolvido com o objetivo de apresentar o SENAI — uma das maiores instituições de educação profissional do Brasil — de forma clara, acessível e interativa. Aqui, você encontra informações sobre a história do SENAI, sua missão, sua contribuição para a indústria brasileira e, principalmente, sobre as diversas oportunidades de formação técnica e profissional que a instituição oferece.</p>
          </div>
        </div>
        <div 
          className={styles.FormSobreSiteMobile}>
          <h1>Sobre o site</h1>
          <p>Este site foi desenvolvido com o objetivo de apresentar o SENAI — uma das maiores instituições de educação profissional do Brasil — de forma clara, acessível e interativa. Aqui, você encontra informações sobre a história do SENAI, sua missão, sua contribuição para a indústria brasileira e, principalmente, sobre as diversas oportunidades de formação técnica e profissional que a instituição oferece.</p>
        </div>
    </div>
  )
}

export default HomeBody