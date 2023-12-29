import style from './Sobre.module.css';

const Sobre = () => {
  return (
    <section className={`${style.Sobre}  animaLeft`}>
      <div className={`${style.contentSobre} spaceContent`}>
        <div className={style.content}>
          <h2>Sobre o Foodfy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad natus explicabo nemo deleniti, dignissimos magni repellendus unde voluptatem quasi nihil repudiandae pariatur quod minus molestias mollitia dolorem eius! Molestiae, officia.</p>
        </div>
        <div className={style.content}>
          <h2>Como tudo começou...</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi quis alias provident beatae tempore commodi, rem laudantium laboriosam ut numquam nihil odio, praesentium iste asperiores officia fugiat! Dignissimos, suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam reprehenderit nulla sed, expedita voluptates a repudiandae ullam nisi ipsam molestiae quo minus voluptas neque sint tempora, amet dolorem quasi itaque.</p>
        </div>
        <div className={style.content}>
          <h2>Nossas receitas</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta natus deserunt repudiandae tempora tempore cumque, ut recusandae, perferendis, ea veniam quisquam hic libero. Ipsa esse alias commodi repellat eius in. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem autem dolorem fuga magnam aliquid commodi doloribus atque? Asperiores facilis soluta corrupti reiciendis earum! Placeat doloremque corrupti quod ad quis cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error, sunt placeat qui facere facilis consequatur itaque? Distinctio minima omnis deserunt at? Quas perspiciatis, accusamus optio sunt pariatur nisi earum?</p>
        </div>
      </div>
    </section>
  )
}

export default Sobre