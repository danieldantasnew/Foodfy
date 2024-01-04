import React, { useRef } from 'react';
import style from './Slides.module.css';
import SlideIndividual from './SlideIndividual';

const Slides = () => {
  const [data, setData] = React.useState(null);
  const referencia = useRef(null);
  const loopRef = useRef(null);
  const [slide, setSlide] = React.useState(0);
  
  React.useEffect(()=> {
    fetch('http://foodfyapi.local/json/api/recipe/?_page=1&_total=24&_user=0&_size="full"').then((response)=> response.json()).then((json)=> setData(json));

  }, []);

  React.useEffect(()=> {
    function slideAuto (qntSlides) {
      if(slide === qntSlides-4 || slide < 0) {
        setSlide(0);
      }
      else {
        setSlide((slide)=> slide + 1);
      }
    }

    function startSlide(qntSlides) {
      const largura = referencia.current.children[0].getBoundingClientRect().width;
      loopRef.current = setInterval(() => {
        slideAuto(qntSlides);
      }, 4000);

      referencia.current.style.transform = `translate3d(${-(largura * slide)}px, 0, 0)`;
    }

    function handleResize() {
      stopSlideShow(); // Pare o loop existente ao redimensionar
      const qntSlides = referencia.current.children.length;
      if (data && referencia.current) {
        startSlide(qntSlides); // Inicie o loop novamente com base no novo tamanho da tela
      }
    }

    function stopSlideShow() {
      clearInterval(loopRef.current);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return ()=> {
      stopSlideShow();
      window.removeEventListener('resize', startSlide);
    }
  }, [data, slide]);

  return (
    <section className={`${style.Slides}`}>
      <div ref={referencia} className={style.slidesContent}>
        {data?.map((slide)=> 
          <SlideIndividual key={slide.id} slide={slide} title={slide.title} src={slide.src} dificuldade={slide.dificuldade} tempoPreparo={slide.tempoPreparo}/>
        )}
      </div>
    </section>
  )
}

export default Slides;