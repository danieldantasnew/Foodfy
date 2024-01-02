const Avaliacao = ({avaliacoes}) => {

  let somaTotal = 0;
  let arraySemZero = 0;
  let media;

  avaliacoes.forEach(avaliacao => {
    somaTotal += Number(avaliacao.comment_karma);
    if(Number(avaliacao.comment_karma) !== 0) {
      arraySemZero += 1
    }
  });

  media = (somaTotal/arraySemZero).toFixed(1);

  return (
    <p style={{display: "inline-block"}}>{media === 0 ? "5.0" : media}</p>
  )
}

export default Avaliacao;