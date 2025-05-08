const CursoBody = ({ id }) => {

    const cursos = [
        {
          img: "https://escotec.com.br/wp-content/uploads/2023/01/Curso-Mecanica-de-Autos-2.0.jpg",
          desc: "Capacita profissionais para trabalhar com manutenção e montagem de sistemas mecânicos, com foco prático e técnico.",
          nome: "Técnico mecânica",
        },
        {
          img: "https://cms.fiemt.ind.br/arquivos/senai/images/conteudos/img-destaque/Eletrot%C3%A9cnica.jpg",
          desc: "Forma profissionais para atuar na instalação, manutenção e operação de sistemas elétricos em residências, indústrias e comércios.",
          nome: "Técnico eletrotécnica",
        },
        {
          img: "https://i1.wp.com/elaborata.com.br/blog/wp-content/uploads/2018/06/curso-te%CC%81cnico-e1476051467658.jpg?resize=433%2C300&ssl=1",
          desc: "Capacita profissionais para montar, configurar, fazer manutenção e reparar computadores e equipamentos eletrônicos.",
          nome: "Técnico hardware",
        }
      ];

    const index = parseInt(id);
    const curso = cursos[index];

    if (isNaN(index) || index < 0 || index >= cursos.length) {
        return <p>Curso não encontrado.</p>;
      }

  return (
    <div>
      <img src={curso.img} alt={curso.nome} height={300} />
      <h1>{curso.nome}</h1>
      <p>{curso.desc}</p>
    </div>
  )
}

export default CursoBody