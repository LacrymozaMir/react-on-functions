import React, { useContext } from 'react'
import { ComponentContainer } from '../styles/components';
import TodoPanel from './TodoPanel';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import ToDoController from './ToDoController';

const Todo: React.FC = () => {

  return (
    <ToDoController>
      <ComponentContainer>
          <TodoPanel/>
          <TodoForm/>
          <TodoList/>
      </ComponentContainer>
    </ToDoController>
  )
}

export default Todo;
