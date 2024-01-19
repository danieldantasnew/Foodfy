import style from './NotFound.module.css';

const NotFound = () => {
  return (
    <section className={`${style.NotFound} animaLeft`}>
      <div className={`${style.notFoundContent} spaceContent`}>
        <img src="../../../../public/Images/pngs/ChefNotFound1.png" alt="Chefe" />
        <div>
          <h1>404</h1>
          <h2>Oops, a rota não foi encontrada.</h2>
          <p>Por favor verifique se o endereço foi digitado corretamente.</p>
        </div>
      </div>
    </section>
  )
}

export default NotFound;