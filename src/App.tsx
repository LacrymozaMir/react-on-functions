import React, { useEffect, useState } from 'react';
import Todo from './components/Todo';
import GlobalStyles from './styles/global';
import Slider, { ISlide } from './components/slider/Slider';
import { getImgsApi } from './api/sliderApi';


const App = () => {
  const [slides, setSlides] = useState<ISlide[]>([]);

  useEffect(() => {
    fetchSlides();
    
  }, []);

  const fetchSlides = async () => {
    const data = await getImgsApi();
    setSlides(data);
  }


  return (
    <>
      <Slider 
        slides={slides}
        // loop
        navs
        pages
        auto
        delay={2}
        stopMouseHover
      />
      <Todo/>
      <GlobalStyles />
    </>
  )
}

export default App
