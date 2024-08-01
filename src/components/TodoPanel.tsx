import React from 'react'
import MyButton from './UI/button/MyButton';
import { Container, HeaderText } from '../styles/components';


interface ITodoPanel {
    completeAll: () => void;
    deleteAll: () => void;
}


const TodoPanel: React.FC<ITodoPanel> = ({completeAll, deleteAll}) => {
  
    return (
    <Container>
        <HeaderText>Panel</HeaderText>
        <MyButton onClick={completeAll}>Complete all</MyButton>
        <MyButton onClick={deleteAll}>Delete all completed</MyButton>
    </Container>
  )
}

export default TodoPanel
