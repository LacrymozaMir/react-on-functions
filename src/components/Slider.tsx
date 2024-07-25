import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import btn from '../assets/img/right (1).png'



export interface ISlides {
    img: string;
    text: string;
}


interface ISliderProps {
    slides: ISlides[]; 
    loop?: boolean;
    navs?: boolean;
    pages?: boolean;
    auto?: boolean;
    stopMouseHover?: boolean;
    delay?: number; 
}

const MySlider = styled.div`
    position: relative;
`

const SliderImg = styled.img`
    width: 600px;
    height: 600px;
`

const SliderText = styled.span`
    position: absolute;
    bottom: 10%;
    right: 50%;
`

const btns = css`
    background: transparent;
    border: none;
    transition: 0.3s ease-out;

    &:hover{
        transform: scale(2);
    }
`

const SliderButtonNext = styled.button`
    margin-left: 16px;
    position: absolute;
    top: 50%;
    right: 0;

    ${btns}
`

const SliderButtonPrev = styled.button`
    position: absolute;
    top: 50%;
    left: 0;
    transform: scaleX(-1);

    ${btns}
`

const SliderIcons = styled.img`
    

`


const Slider: React.FC<ISliderProps> = ({
    slides, 
    loop = false,
    navs = false,
    pages = false,
    auto = false,
    stopMouseHover = false,
    delay = 5,
}) => {

    const [currentImg, setCurrentImg] = useState<number>(0);

    const nextImg = (): void => {
        if (currentImg < slides.length - 1){
            setCurrentImg(currentImg + 1);
        } else {
            if (loop) setCurrentImg(0)
        }
    }

    const prevImg = (): void => {
        if (currentImg > 0){
            setCurrentImg(currentImg - 1);
        } else {
            if (loop) setCurrentImg(slides.length - 1);
        }
    }

  return (
    <MySlider>
      <SliderImg src={slides[currentImg].img} alt="img" />
      <SliderText>{slides[currentImg].text}</SliderText>
      <SliderButtonNext onClick={nextImg}><img src={btn} alt='next'/></SliderButtonNext>
      <SliderButtonPrev onClick={prevImg}><img src={btn} alt='prev'/></SliderButtonPrev>
    </MySlider>
  )
}




export default Slider
