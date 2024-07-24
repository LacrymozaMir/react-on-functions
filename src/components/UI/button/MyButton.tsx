import React from 'react'
import cl from './MyButton.module.css'

interface IMyButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const MyButton: React.FC<IMyButton> = ({children, ...props}) => {
  return (
    <button {...props} className={cl.btn}>
        {children}
    </button>
  )
}

export default MyButton;
