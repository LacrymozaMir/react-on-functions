import React from 'react'
import styled from 'styled-components';
import { IMgAndPd } from '../../../styles/components';

interface IButton extends IMgAndPd {
  fontSize?: string; 
}

const Button = styled.button<IButton>`
  background: transparent;
  padding: 4px 8px;
  margin: 4px;
  font-size: 16px;
  transition: 0.3s ease-out;

  &:hover{
    background-color: #DDA0DD;
  }

  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`

interface IMyButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const MyButton: React.FC<IMyButton> = ({children, ...props}) => {
  return (
    <Button {...props}>
        {children}
    </Button>
  )
}

export default MyButton;
