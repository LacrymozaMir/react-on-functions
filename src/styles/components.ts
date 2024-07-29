import styled from "styled-components";
import { flexColumn } from "./cssFragments";

export interface IMgAndPd {
    margin?: string;
    padding?: string;
}


export const ComponentContainer = styled.section`
    ${flexColumn}

    align-items: center;
    padding: 8px;
    background: #E0FFFF;
`
export const Card = styled.article<IMgAndPd>`
    ${flexColumn}

    padding: 4px;
    border: 2px solid #D8BFD8;
    border-radius: 12px;

    margin: ${props => props.margin};
    padding: ${props => props.padding};
`
export const Container = styled.section<IMgAndPd>`
    ${flexColumn}
`
export const Text = styled.p<IMgAndPd>`
    font-size: 18px;

    margin: ${props => props.margin};
    padding: ${props => props.padding};
`
export const HeaderText = styled.h1<IMgAndPd>`
    font-size: 24px;

    margin: ${props => props.margin};
    padding: ${props => props.padding};
`
