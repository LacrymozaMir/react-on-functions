import React, { useContext } from 'react'
import MyButton from './UI/button/MyButton';
import { Container, HeaderText } from '../styles/components';
import { ToDoContext } from './ToDoController';


// interface ITodoPanel {
//     completeAll: () => void;
//     deleteAll: () => void;
// }


const TodoPanel: React.FC = () => {

    const todoContext = useContext(ToDoContext);
  
    return (
        <Container>
            <HeaderText>Panel</HeaderText>
            <MyButton onClick={todoContext?.completeAllTasks}>Complete all</MyButton>
            <MyButton onClick={todoContext?.deleteAllTasks}>Delete all completed</MyButton>
        </Container>

  )
}

export default TodoPanel
