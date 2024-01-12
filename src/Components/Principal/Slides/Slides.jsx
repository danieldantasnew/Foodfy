import React, { useRef } from 'react';
import style from './Slides.module.css';
import SlideIndividual from './SlideIndividual';
import useMedia from '../../../Hooks/useMedia';
import { useSelector } from 'react-redux';

const Slides = () => {
  const data = useSelector((state)=> state.receitas.data);
  const referencia = useRef(null);
  const loopRef = useRef(null);
  const [slide, setSlide] = React.useState(0);
  const desktop = useMedia("(min-width: 62.5rem)");
  const mobile = useMedia("(max-width: 36rem)");

  function handlePrev () {
    if(slide - 1 >= 0) {
      setSlide(slide - 1);
    }
  }

  function handleNext () {
    let reduzirMobile = (mobile) ? 1 : (desktop) ? 4 : 2;
    const qntSlides = referencia.current.children.length
    if(slide + 1 <= (qntSlides - reduzirMobile)) {
      setSlide(slide + 1) ;
    }
    else {
      setSlide(0);
    }
  }

  React.useEffect(()=> {
    function getNumberRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    if(data) {
      mobile ? setSlide(getNumberRandom(0, data.length-1)) : desktop ?  setSlide(getNumberRandom(0, data.length-4)) :  setSlide(getNumberRandom(0, data.length-2));
    } 
  }, [data, setSlide, mobile, desktop]);

  React.useEffect(()=> {
    function slideAuto (qntSlides) {
      let reduzirMobile = (mobile && !desktop) ? 1 : (desktop) ? 4 : 2;
      if( slide >= (qntSlides - reduzirMobile) || slide < 0) {
        //Verificará se o próximo slide é o último antes de deixar a tela em branco, se for ele voltará ao início.
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
      if (data && referencia.current) {
        const qntSlides = referencia.current.children.length;
        startSlide(qntSlides); // Inicie o loop novamente com base no novo tamanho da tela
      }
    }

    function stopSlideShow() {
      clearInterval(loopRef.current);
    }

    window.addEventListener('resize', handleResize); //Quando a tela muda de tamanho, o slide é reiniciado fazendo com que fique adaptado novamente.
    
    if (data && referencia.current) {
      const qntSlides = referencia.current.children.length;
      handleResize(qntSlides); // Inicie o loop novamente com base no novo tamanho da tela
    }

    return ()=> {
      stopSlideShow();
      window.removeEventListener('resize', handleResize);
    }
    
  }, [data, slide, mobile, desktop]);

  return (
    <section className={style.SlidesBtn}>
      <div className={`${style.btnActions} ${style.btnLeft}`} onClick={handlePrev}>
        <img src="../../../../public/Images/icons/De uso Geral/ArrowDropdown.svg" alt="Slide anterior" />
      </div>
      <div className={`${style.btnActions} ${style.btnRight}`} onClick={handleNext}>
        <img src="../../../../public/Images/icons/De uso Geral/ArrowDropdown.svg" alt="Slide posterior" />
      </div>
      <div className={`${style.Slides}`}>
        <div ref={referencia} className={style.slidesContent}>
          {data?.map((slide)=> 
            <SlideIndividual key={slide.id} id={slide.id} title={slide.title} src={slide.src} dificuldade={slide.dificuldade} tempoPreparo={slide.tempoPreparo} media={slide.mediaAvaliacao}/>
          )}
        </div>
      </div>
    </section>
  )
}

export default Slides;