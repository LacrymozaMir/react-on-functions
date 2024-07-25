import React, { useEffect, useState } from 'react'
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

const SliderPages = styled.div`
    font-size: 16px;
    margin: 8px;

    position: absolute;
    top: 0;
    left: 0;
`

const SliderIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SliderIcon = styled.button<{active?: boolean}>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 4px;
    border: none;
    background-color: ${props => props.active ? '#4e4d4d' : 'white'};

    transition: 0.3s ease;

    &:hover{
        background-color: #4e4d4d;
    }
`


const Slider: React.FC<ISliderProps> = ({
    slides, 
    loop = false,
    navs = false,
    pages = false,
    auto = false,
    stopMouseHover = false,
    delay = 2,
}) => {

    const [currentImg, setCurrentImg] = useState<number>(0);
    const [sliderPages, setSliderPages] = useState<number>(0);
    const trueDelay = delay * 1000;

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (auto) {
            interval = setInterval(nextImg, trueDelay);
        }
        return () => {
            if (interval) clearInterval(interval);
        }

    }, [auto, trueDelay]);

    const nextImg = (): void => {
        setCurrentImg(prev => {
            if (prev < slides.length - 1) {
                return prev + 1;
            } else {
                return loop ? 0 : prev; 
            }
        });
    };

    const prevImg = (): void => {
        setCurrentImg(prev => {
            if (prev > 0) {
                return prev - 1;
            } else {
                return loop ? slides.length - 1 : prev;
            }
        })
    }

  return (
    <MySlider>
      <SliderImg src={slides[currentImg].img} alt="img" />
      <SliderText>{slides[currentImg].text}</SliderText>
      {navs &&
      <>
        <SliderButtonNext onClick={nextImg}><img src={btn} alt='next'/></SliderButtonNext>
        <SliderButtonPrev onClick={prevImg}><img src={btn} alt='prev'/></SliderButtonPrev>
      </>
      }
      {pages &&
        <>
            <SliderPages>{currentImg + 1} / {slides.length}</SliderPages>
            <SliderIconContainer>
            { slides.map((slide, index) => 
                <SliderIcon 
                    key={slide.img} 
                    onClick={() => setCurrentImg(index)}
                    active={currentImg == index}
                />
            )
                    
            }
            </SliderIconContainer>
        </>
      }
     
    </MySlider>
  )
}




export default Slider
