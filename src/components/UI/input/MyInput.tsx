import React from 'react'
import cl from './MyInput.module.css'

interface IMyInput extends React.InputHTMLAttributes<HTMLInputElement> {
}

const MyInput: React.FC<IMyInput> = ({...props}) => {
  return (
    <input
        className={cl.inp}
        {...props}
    />
      
  )
}

export default MyInput
