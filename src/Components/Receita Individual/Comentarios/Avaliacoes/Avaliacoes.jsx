import style from './Avaliacoes.module.css';

const Avaliacoes = ({avaliacao}) => {

  //Código provisório até que seja criado uma função para tal.

  return (
    <div className={style.Avaliacoes}>
      {avaliacao >= 5 ? 
        <ul>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
        </ul> 
        : ''
      }

      {avaliacao >= 4.5 && avaliacao <= 4.9 ? 
        <ul>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Metade.svg" alt="avaliacao" /></li>
        </ul> 
        : ''
      }

      {avaliacao >= 4 && avaliacao <= 4.4 ? 
        <ul>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
        </ul> 
        : ''
      }

      {avaliacao >= 3.5 && avaliacao <= 3.9 ? 
        <ul>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Metade.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
        </ul> 
        : ''
      }

      {avaliacao >= 3 && avaliacao <= 3.4 ? 
        <ul>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
        </ul> 
        : ''
      }

      {avaliacao >= 2.5 && avaliacao <= 2.9 ? 
        <ul>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Metade.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
        </ul> 
        : ''
      }

      {avaliacao >= 2 && avaliacao <= 2.4 ? 
        <ul>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
        </ul> 
        : ''
      }

      {avaliacao >= 1.5 && avaliacao <= 1.9 ? 
        <ul>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Metade.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
        </ul> 
        : ''
      }

      {avaliacao >= 1 && avaliacao <= 1.4 ? 
        <ul>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Cheia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
          <li><img src="../../../../../public/Images/icons/Receita Individual/Estrela Vazia.svg" alt="avaliacao" /></li>
        </ul> 
        : ''
      }
    </div>
  )
}

export default Avaliacoes;