import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import { ITask } from '../types/todoTypes';
import { completeAllTodoApi, completeTodoApi, createTodoApi, deleteOneTodoApi, deleteSelectedTodosApi, fetchTodosApi, updateTask } from '../api/todoApi';
import TodoForm from './TodoForm';
import TodoPanel from './TodoPanel';
import { ComponentContainer } from '../styles/components';
import Slider, { ISlides } from './Slider';
import { getImgsApi } from '../api/sliderApi';

const Todo: React.FC = () => {
  
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [slides, setSlides] = useState<ISlides[]>([
    {
      "img": "https://via.placeholder.com/600/b0f7cc",
      "text": "text 1"
  },
  {
      "img": "https://via.placeholder.com/600/771796",
      "text": "text 2"
  },
  {
      "img": "https://via.placeholder.com/600/24f355",
      "text": "text 3"
  }
  ]);

  useEffect(() => {
    fetchTodos();
    // fetchImgs();
    
  }, [])

  // const fetchImgs = async () => {
  //   setSlides(await getImgsApi());
  // }


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
    completeAllTodoApi();
  }

  const deleteAllTasks = (): void => {
    setTasks(tasks.filter(t => t.completed == false));
    deleteSelectedTodosApi();
  }

  const deleteTask = (id: number):void => {
    setTasks(tasks.filter(t => t.id !== id));

    deleteOneTodoApi(id);
  }

  const editTask = (id: number, value: string): void => {
    if (value.length) {
      setTasks(tasks.map(task => 
        task.id === id
        ? {...task, title: value}
        : task
      ));
  
      updateTask(id, value);
    }
  }



  
  return (
    <ComponentContainer>
      <Slider 
        slides={slides}
        loop
        navs
        pages
      />
        {/* <TodoPanel completeAll={CompleteAllTasks} deleteAll={deleteAllTasks}/>
        <TodoForm createTask={createTask}/>
        <TodoList 
          tasks={tasks} 
          completeTask={completeTask} 
          deleteTask={deleteTask}
          editTask={editTask}
        /> */}
    </ComponentContainer>
  )
}

export default Todo;
