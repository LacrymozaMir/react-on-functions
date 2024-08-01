import styled, { css } from "styled-components"

const btns = css`
    position: absolute;
    background: transparent;
    border: none;
    top: 45%;
    font-size: 48px;
    color: wheat;
    transition: 0.3s ease;
    margin: 12px;

    &:hover {
        color: gray;
    }
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid black;
    position: relative;
    background-color: wheat;
`
export const SlidesContainer = styled.div<{$anim?: any, $isAnim: boolean, $direc: string}>`
    display: flex;
    flex-direction: ${props => props.$direc};
    max-width: 620px;
    max-height: 620px;
    ${props => props.$isAnim && props.$anim}
`
export const Slide = styled.div`
    display: flex;
    margin: 8px;
    position: relative;
    border: 1px solid black;
    animation: none;
`
export const Img = styled.img`
    width: 600px;
    height: 600px;
`
export const Text = styled.span`
    position: absolute;
    bottom: 10%;
    right: 50%;
`
export const RightButton = styled.button`
    ${btns};
    right: 0;
`
export const LeftButton = styled.button`
    ${btns};
    left: 0;
` 
export const Page = styled.span`
    font-size: 24px;
    margin: 16px;
    position: absolute;
    top: 0;
    left: 0;
    color: wheat;
`
export const SliderIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SliderIcon = styled.button<{$active?: boolean}>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 4px;
    border: none;
    border: 1px solid gray;
    background-color: ${props => props.$active ? '#4e4d4d' : 'white'};

    transition: 0.3s ease;

    &:hover{
        background-color: #4e4d4d;
    }
`