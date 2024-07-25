import React from 'react'
import styled from 'styled-components'
import { IMgAndPd } from '../../../styles/components'

const Input = styled.input<IMgAndPd>`
  padding: 4px;
  font-size: 14px;
  min-width: 300px;

  &:focus {
    background: #DDA0DD;
  }

  
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`

interface IMyInput extends React.InputHTMLAttributes<HTMLInputElement> {

}

const MyInput: React.FC<IMyInput> = ({...props}) => {
  return (
    <Input
        {...props}
    />
      
  )
}

export default MyInput
