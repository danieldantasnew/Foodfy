const Avaliacao = ({media}) => {

  return (
    <p style={{display: "inline-block"}}>{media === 0 ? "5.0" : media}</p>
  )
}

export default Avaliacao;