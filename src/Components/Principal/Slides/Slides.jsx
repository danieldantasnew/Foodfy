import React, { useRef } from 'react';
import style from './Slides.module.css';
import SlideIndividual from './SlideIndividual';
import useMedia from '../../../Hooks/useMedia';

const Slides = () => {
  const [data, setData] = React.useState(null);
  const referencia = useRef(null);
  const loopRef = useRef(null);
  const [slide, setSlide] = React.useState(0);
  const desktop = useMedia("(min-width: 62.5rem)");
  const mobile = useMedia("(max-width: 36rem)");
  
  React.useEffect(()=> {
    fetch('http://foodfyapi.local/json/api/recipe/?_page=1&_total=24&_user=0&_size="full"').then((response)=> response.json()).then((json)=> setData(json));

  }, []);

  React.useEffect(()=> {
    const qntSlides = referencia.current.children.length;

    function correcaoPaginaMobileToDesktop() {
      if(slide >= qntSlides - 4) {
        setSlide(slide - 4);
      }
    }

    function slideAuto (qntSlides) {
      let reduzirMobile = (mobile && !desktop) ? 1 : (desktop) ? 4 : 2;
      if(slide >= (qntSlides - reduzirMobile) || slide < 0) {
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
      if (data && referencia.current && qntSlides) {
        startSlide(qntSlides); // Inicie o loop novamente com base no novo tamanho da tela
      }
    }

    function stopSlideShow() {
      clearInterval(loopRef.current);
    }

    window.addEventListener('resize', ()=> {
      handleResize();
      correcaoPaginaMobileToDesktop();
    });
    
    if (data && referencia.current) {
      handleResize(); // Inicie o loop novamente com base no novo tamanho da tela
    }

    return ()=> {
      stopSlideShow();
      window.removeEventListener('resize', startSlide);
    }
    
  }, [data, slide, mobile]);

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