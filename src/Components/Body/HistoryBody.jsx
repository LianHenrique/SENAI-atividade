import { useNavigate } from "react-router"
import styles from "../Components.module.css"

const HistoryBody = () => {

  const navigate = useNavigate()

  return (
    <div
    className={styles.fundo}>
      <div 
      className={styles.HistoryBody}> 
          <div>
            <iframe
              src="https://www.youtube.com/embed/FK6Uctz8_VQ?autoplay=1&mute=1&vq=hd1080&loop=1&playlist=FK6Uctz8_VQ"
              title="Vídeo de introdução SENAI"
              frameBorder="0"
              allow="autoplay; encrypted-media;"
              allowFullScreen
            ></iframe>
            <p
            className={styles.pDesc}>
              O Serviço Nacional de Aprendizagem Industrial (SENAI) é uma das maiores instituições de educação profissional do Brasil. Fundado em 1942, seu principal objetivo é oferecer formação técnica e tecnológica voltada para a indústria, contribuindo para o desenvolvimento econômico e social do país. O SENAI atua em diversas áreas, como mecânica, construção civil, eletroeletrônica, tecnologia da informação e vestuário. Além de cursos presenciais e a distância, a instituição também realiza pesquisas aplicadas e serviços de inovação para empresas. Reconhecido pela qualidade de ensino, o SENAI é referência na formação de profissionais capacitados para atender às demandas do mercado de trabalho.
            </p>
          </div>
          <h1>Contexto Histórico</h1>
          <p
          className={styles.pHist}>
            No início do século XX, o Brasil era um país predominantemente agrícola, mas começava a se industrializar lentamente, principalmente nos estados do Sudeste, como São Paulo, Minas Gerais e Rio de Janeiro. Com a Primeira Guerra Mundial (1914–1918) e depois a Segunda Guerra Mundial (1939–1945), a necessidade de industrializar o país se tornou mais urgente.
            <br /><br />
            A guerra limitou a importação de produtos industrializados da Europa e dos Estados Unidos, o que forçou o Brasil a produzir internamente muitos bens que antes eram importados — como tecidos, produtos químicos, peças metálicas e máquinas. No entanto, o país não tinha trabalhadores suficientemente qualificados para atender às necessidades das novas indústrias.
            <br /><br />
            O governo de Getúlio Vargas, que assumiu o poder em 1930, implantou uma política nacionalista e de fortalecimento da economia interna. Para Vargas, a formação de trabalhadores qualificados era fundamental para consolidar a industrialização brasileira.
            <br /><br />
            A Iniciativa dos Empresários
            A falta de mão de obra qualificada preocupava os industriais. Em resposta, a Confederação Nacional da Indústria (CNI) — criada em 1938 — começou a pressionar o governo para a criação de um serviço que formasse trabalhadores para a indústria. Os empresários se inspiraram em modelos de formação profissional existentes na Alemanha e na Itália, que já mostravam bons resultados na capacitação de trabalhadores.
            <br /><br />
            A ideia era criar uma instituição financiada pelo setor industrial, mas organizada nacionalmente, com apoio do governo federal, para garantir escala e eficiência.
            <br /><br />
            Criação Oficial
            Em 22 de janeiro de 1942, o presidente Getúlio Vargas assinou o Decreto-Lei nº 4.048, que oficializou a criação do Serviço Nacional de Aprendizagem Industrial (SENAI).
            </p>

            <h1>Pontos importantes do decreto:</h1>

            <p
            className={styles.pHist}>
            O SENAI seria mantido principalmente pelas indústrias, que deveriam contribuir com um percentual de sua folha de pagamento (essa contribuição existe até hoje).
            <br /><br />
            O objetivo era oferecer cursos gratuitos de formação inicial e continuada para jovens e trabalhadores.
            <br /><br />
            O SENAI deveria abranger todo o território nacional.
            <br /><br />
            Logo em seguida, em 1º de fevereiro de 1942, o SENAI iniciou formalmente suas atividades.
            <br /><br />
            O Primeiro Nome
            Inicialmente, o nome completo era Serviço Nacional de Aprendizagem dos Industriários. Só mais tarde, a denominação foi ajustada para o que conhecemos hoje: Serviço Nacional de Aprendizagem Industrial.
            </p>

            <h1>Primeiras Escolas</h1>

            <p
            className={styles.pHist}>
            As primeiras escolas do SENAI foram criadas no Rio de Janeiro (então capital do Brasil) e em São Paulo, que já concentravam boa parte da produção industrial. As primeiras áreas de formação foram:
            <br /><br />
            * Mecânica
            <br />
            * Construção civil
            <br />
            * Marcenaria
            <br />
            * Eletricidade
            <br />
            * Siderurgia
            <br />
            * Caldeiraria
            <br />
            * Carpintaria
            <br /><br />
            Além das unidades fixas, surgiram unidades móveis — caminhões adaptados para levar cursos a cidades menores e áreas rurais. Isso permitiu ao SENAI atingir rapidamente regiões distantes, espalhando a formação técnica por todo o Brasil.
            </p>
            
            <h1>Organização e Estrutura</h1>

            <p
            className={styles.pHist}>
            Desde o começo, o SENAI foi estruturado para ser descentralizado, com administrações regionais em cada estado (os chamados Departamentos Regionais), e uma administração central ligada à CNI, chamada de Departamento Nacional do SENAI (hoje chamado de Diretoria Geral).
            <br /><br />
            Cada estado brasileiro ganhou autonomia para adaptar a oferta de cursos às necessidades específicas de sua indústria local. Isso ajudou o SENAI a ser eficiente e relevante em diferentes realidades econômicas regionais.
            <br /><br />
            Primeiras Ações e Expansão
            Nos primeiros anos, o SENAI:
            <br /><br />
            Treinou principalmente jovens aprendizes.
            <br /><br />
            Criou cursos para adultos em serviço (atualização profissional).
            <br /><br />
            Desenvolveu programas de ensino adaptados às tecnologias da época.
            <br /><br />
            Firmou parcerias com indústrias para formação prática dos alunos.
            <br /><br />
            Já em 1944, menos de três anos após sua criação, o SENAI já formava mais de 30 mil trabalhadores por ano. A expansão foi tão rápida que se tornou modelo para a criação de outras instituições no Brasil, como o SENAC (para o comércio).
            <br /><br />
            Legado Inicial
            Até o fim da década de 1940:
            <br /><br />
            O SENAI já era considerado essencial para o sucesso da industrialização brasileira.
            <br /><br />
            Sua atuação consolidou a importância da educação técnica como ferramenta de desenvolvimento econômico e social.
            <br /><br />
            Milhares de trabalhadores formados pelo SENAI foram empregados em fábricas, oficinas e canteiros de obras, ajudando a construir a infraestrutura moderna do Brasil.
            <br /><br /><br /><br /><br />
          </p>
      </div>
    </div>
  )
}

export default HistoryBody