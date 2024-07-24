import React from 'react'
import cl from '../styles/TodoPanel.module.css'
import MyButton from './UI/button/MyButton';


interface ITodoPanel {
    completeAll: () => void;
    deleteAll: () => void;
}


const TodoPanel: React.FC<ITodoPanel> = ({completeAll, deleteAll}) => {
  
    return (
    <section className={cl.container}>
        <h2 className={cl.header}>Panel</h2>
        <MyButton onClick={completeAll}>Complete all</MyButton>
        <MyButton onClick={deleteAll}>Delete all completed</MyButton>
    </section>
  )
}

export default TodoPanel
