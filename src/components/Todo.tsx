import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import { ITask } from '../types/todoTypes';
import { completeTodoApi, createTodoApi, fetchTodosApi } from '../api/todoApi';
import TodoForm from './TodoForm';
import TodoPanel from './TodoPanel';

const Todo = () => {
  
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetchTodos();
    console.log('update!');

  }, [])

  const fetchTodos = async () => {
    setTasks(await fetchTodosApi());
  }

  const createTask = (newTask: ITask): void => {
    setTasks([...tasks, newTask]);

    createTodoApi(newTask);
  }

  const completeTask = (id: number, completed: boolean): void => {

    completeTodoApi(id, completed);

    setTasks(tasks.map(task => 
      task.id === id
      ? {...task, completed: !task.completed}
      : task
    ))
  }

  const CompleteAllTasks = (): void => {
    const completedTasks = tasks.map(task => 
      task.completed === false
      ? {...task, completed: !task.completed}
      : task
    );

    setTasks(completedTasks);
  }

  const deleteAllTasks = (): void => {
    setTasks(tasks.filter(t => t.completed == false));
  }

  
  return (
    <div>
        <TodoPanel completeAll={CompleteAllTasks} deleteAll={deleteAllTasks}/>
        <TodoForm createTask={createTask}/>
        <TodoList tasks={tasks} completeTask={completeTask}/>
    </div>
  )
}

export default Todo;
