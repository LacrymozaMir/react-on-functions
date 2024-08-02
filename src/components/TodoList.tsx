import React, { useContext } from 'react'
import { ITask } from '../types/todoTypes'
import TodoItem from './TodoItem';
import { Container, HeaderText } from '../styles/components';
import { ToDoContext } from './ToDoController';

// interface ITodoList {
//     tasks: ITask[];
//     completeTask: (id: number, completed: boolean) => void;
//     deleteTask: (id: number) => void;
//     editTask: (id: number, value: string) => void;
// }

const TodoList: React.FC = () => {
  const todoContext = useContext(ToDoContext);

  return (
    <Container>
        <HeaderText margin='0 0 16px 0' padding='0'>Tasks list</HeaderText>
        {todoContext?.tasks.map(task => 
            <TodoItem 
                key={task.id} 
                task={task} 
                // completeTask={completeTask} 
                // deleteTask={deleteTask}
                // editTask={editTask}
            />
        )}
    </Container>
  )
}

export default TodoList
