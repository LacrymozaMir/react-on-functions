import React, { useEffect, useState } from 'react'
import { RightButton, Container, Content, Img, Slide, Text, LeftButton, SlidesContainer, Page, SliderIconContainer, SliderIcon, } from './styles/style';
import { slideLeft, slideRight } from './styles/animation';

export interface ISlide {
    img: string;
    text: string;
}

interface Slider {
    slides: ISlide[]; 
    loop?: boolean;
    navs?: boolean;
    pages?: boolean;
    auto?: boolean;
    stopMouseHover?: boolean;
    delay?: number; 
}

export enum EAnimDirec {
    right = 'right',
    left = 'left',
}


const Slider: React.FC<Slider> = ({
    slides, 
    loop = false,
    navs = false,
    pages = false,
    auto = false,
    stopMouseHover = false,
    delay = 5
}) => {

    const [isMount, setIsMount] = useState<boolean>(false);
    const [animationDirection, setAnimationDirection] = useState<EAnimDirec>(EAnimDirec.right);
    const [isAnim, setIsAnim] = useState<boolean>(false);
    const [indexCurrentImg, setIndexCurrentImg] = useState<number>(0);
    const [indexNextImg, setIndexNextImg] = useState<number>(0);
    
    const delayInMs = delay * 1000;
    const [mouseActive, setMouseActive] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (auto && !mouseActive) {
            interval = setInterval(() => changeImg(EAnimDirec.right), delayInMs);
        }

        return () => {
            if (interval) clearInterval(interval);
        }

    }, [auto, delayInMs, mouseActive, isAnim]);

    const changeImg = (direction: EAnimDirec): void => {
        setIndexNextImg(prev => {
            let newIndex = prev;
    
            if (direction === EAnimDirec.right) {
                newIndex = prev < slides.length - 1 ? prev + 1 : (loop ? 0 : prev);
            } else if (direction === EAnimDirec.left) {
                newIndex = prev > 0 ? prev - 1 : (loop ? slides.length - 1 : prev);
            }
    
            return newIndex;
        });
    
        if (direction === EAnimDirec.right) {
            if (!loop && indexCurrentImg < slides.length - 1) {
                mounting(EAnimDirec.right);
            } else if (loop) {
                mounting(EAnimDirec.right);
            }
        } else if (direction === EAnimDirec.left) {
            if (!loop && indexCurrentImg > 0) {
                mounting(EAnimDirec.left);
            } else if (loop) {
                mounting(EAnimDirec.left);
            }
        }
    };

    const mounting = (animDirec: EAnimDirec) => {
        setIsMount(true);
        setAnimationDirection(animDirec);
        animationInProgress();
    }

    const animationInProgress = () => {
        setIsAnim(true);
    }

    const unMounting = () => {
        setIndexCurrentImg(indexNextImg);
        setIsAnim(false);
        setIsMount(false);
    }

    const pageMove = (index: number) => {
        if (index !== indexCurrentImg){
            setIndexNextImg(index);
            const direc = index > indexCurrentImg ? EAnimDirec.right : EAnimDirec.left; 
            mounting(direc);
        }
    }

  if (slides.length === 0) return <div>Фоток нет :</div>

  return (
    <Container>
        <Content
            onMouseEnter={stopMouseHover ? () => setMouseActive(true) : () => {}} 
            onMouseLeave={stopMouseHover ? () => setMouseActive(false) :  () => {}}
        >
            <SlidesContainer 
                $isAnim={isAnim} 
                $anim={animationDirection === EAnimDirec.right ?  slideLeft : slideRight}
                onAnimationEnd={() => unMounting()}
                $direc={animationDirection === EAnimDirec.right ?  'row' : 'row-reverse'}
            >
                <Slide>
                    <Img src={slides[indexCurrentImg].img}/>
                    <Text>{slides[indexCurrentImg].text}</Text>
                </Slide>
            {isMount &&
                <Slide>
                    <Img src={slides[indexNextImg].img}/>
                    <Text>{slides[indexNextImg].text}</Text>
                </Slide>
            }
            </SlidesContainer>
            {navs &&
            <>
                <RightButton onClick={() => changeImg(EAnimDirec.right)} disabled={isAnim}>&gt;</RightButton>
                <LeftButton onClick={() => changeImg(EAnimDirec.left)} disabled={isAnim}>&lt;</LeftButton>
            </>
            }
            {pages &&
            <>
                <Page>{indexCurrentImg + 1} / {slides.length}</Page>
                <SliderIconContainer>
                    {slides.map((slide, index) => 
                        <SliderIcon 
                            key={slide.img} 
                            onClick={() => pageMove(index)}
                            $active={indexCurrentImg == index}
                            disabled={isAnim}
                        ></SliderIcon>
                    )}
                </SliderIconContainer>
            </>
            }
        </Content>
    </Container>
  )
}

export default Slider
