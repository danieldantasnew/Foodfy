import React from 'react'

const useMedia = (tamanho) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(()=> {
    function handleMedia() {
      const {matches} = window.matchMedia(tamanho);
      setMatch(matches);
    }
  
    handleMedia();
    window.addEventListener('resize', handleMedia);

    return () => {
      window.removeEventListener('resize', handleMedia);
    }
  }, [tamanho]);

  return match;
}

export default useMedia;