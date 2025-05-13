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
          img:
          "https://escotec.com.br/wp-content/uploads/2023/01/Curso-Mecanica-de-Autos-2.0.jpg",
          desc:
          "Capacita profissionais para trabalhar com manutenção e montagem de sistemas mecânicos, com foco prático e técnico.",
          nome:
          "Técnico mecanica",
          tempo:
          "O Curso Técnico em Mecânica geralmente possui uma carga horária de 1.200 a 1.800 horas, o que equivale a cerca de 1,5 a 2 anos de duração, podendo variar de acordo com a instituição. Ele pode ser feito concomitantemente com o ensino médio ou após a conclusão do mesmo.",
          materia:
          "Durante o curso, o aluno desenvolve conhecimentos teóricos e práticos para atuar com projetos, fabricação, manutenção e operação de máquinas e equipamentos industriais. Entre os principais conteúdos estão: Desenho técnico mecânico, Metrologia (medição industrial), Tecnologia dos materiais, Mecânica dos sólidos e dos fluidos, Processos de fabricação (usinagem, soldagem, fundição), Sistemas hidráulicos e pneumáticos, Automação e controle de máquinas, Leitura e interpretação de projetos mecânicos, Manutenção preventiva e corretiva, Além disso, muitos cursos incluem disciplinas de segurança do trabalho, ética profissional e noções de gestão da produção.",
          geral:
          "O Técnico em Mecânica é um profissional capacitado para atuar nas diversas etapas do ciclo produtivo industrial. Ele pode trabalhar no desenvolvimento de projetos mecânicos, na operação de máquinas-ferramenta, na manutenção de equipamentos industriais e no controle de qualidade de processos e produtos. Esse profissional é bastante requisitado em indústrias metalúrgicas, automobilísticas, petroquímicas, de alimentos, eletroeletrônicas, e de máquinas e equipamentos, além de poder atuar em oficinas, consultorias técnicas e até como empreendedor no setor. O curso alia formação técnica sólida com habilidades práticas, preparando o aluno para ingressar diretamente no mercado de trabalho ou continuar seus estudos em cursos superiores de engenharia ou tecnologia."
        },
        {
          img:
          "https://cms.fiemt.ind.br/arquivos/senai/images/conteudos/img-destaque/Eletrot%C3%A9cnica.jpg",
          desc:
          "Forma profissionais para atuar na instalação, manutenção e operação de sistemas elétricos em residências, indústrias e comércios.",
          nome:
          "Técnico eletrotécnica",
          tempo:
          "O Curso Técnico em Eletrotécnica possui uma carga horária média entre 1.200 a 1.800 horas, com duração aproximada de 1,5 a 2 anos, dependendo da instituição de ensino. Pode ser cursado junto com o ensino médio (concomitante) ou após sua conclusão (subsequente).",
          materia:
          "Ao longo do curso, o aluno desenvolve competências para atuar na geração, transmissão, distribuição e utilização da energia elétrica, tanto em ambientes industriais quanto prediais e comerciais. Os principais conteúdos incluem: Eletricidade básica e avançada, Instalações elétricas residenciais, prediais e industriais, Máquinas e equipamentos elétricos, Automação e comandos elétricos, Sistemas de proteção e aterramento, Desenho técnico elétrico e leitura de esquemas, Instrumentação e medição elétrica, Eficiência energética, Normas técnicas (como NBR 5410, NR-10, NR-12), Manutenção e testes de sistemas elétricos",
          geral:
          "O Técnico em Eletrotécnica é o profissional responsável por planejar, instalar, operar e realizar manutenção em sistemas elétricos e de automação. Ele pode atuar em setores como energia, construção civil, telecomunicações, indústria, manutenção predial e consultorias técnicas. O curso combina forte base teórica com atividades práticas, em laboratório e simulações, o que permite ao aluno sair preparado para o mercado de trabalho e também para atuar como responsável técnico em projetos elétricos (após o devido registro no CREA)."
        },
        {
          img:
          "https://i1.wp.com/elaborata.com.br/blog/wp-content/uploads/2018/06/curso-te%CC%81cnico-e1476051467658.jpg?resize=433%2C300&ssl=1",
          desc:
          "Capacita profissionais para montar, configurar, fazer manutenção e reparar computadores e equipamentos eletrônicos.",
          nome:
          "Técnico hardware",
          tempo:
          "O Curso Técnico em Hardware tem duração média de 1 a 2 anos, com carga horária entre 1.000 a 1.600 horas, dependendo da instituição. Pode ser feito de forma concomitante ao ensino médio ou após a conclusão dele (subsequente).",
          materia:
          "O curso capacita o aluno para montar, instalar, configurar, diagnosticar e reparar equipamentos de informática, com foco em hardware físico e suporte técnico. Os principais conteúdos incluem: Arquitetura de computadores, Montagem e manutenção de PCs e notebooks, Diagnóstico e solução de falhas, Instalação de sistemas operacionais (Windows, Linux), Instalação e configuração de drivers e periféricos, Redes básicas (LAN, Wi-Fi), Segurança digital e antivírus, Backup e recuperação de dados, Atualização e substituição de componentes, Atendimento e suporte técnico ao usuário",
          geral:
          "O Técnico em Hardware é o profissional responsável por garantir o bom funcionamento de equipamentos de informática, oferecendo suporte técnico e manutenção corretiva e preventiva. Ele atua na montagem de computadores, identificação de problemas de hardware, substituição de peças e configuração de sistemas, podendo trabalhar em empresas de tecnologia, assistência técnica, escolas, órgãos públicos ou como autônomo. É uma formação essencial para quem deseja entrar no mercado de tecnologia com foco prático, podendo depois evoluir para áreas como suporte de redes, infraestrutura, ou engenharia de computação."
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