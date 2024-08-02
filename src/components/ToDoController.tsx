import React, { createContext, useEffect, useState } from 'react'
import { ITask } from '../types/todoTypes';
import { completeAllTodoApi, completeTodoApi, createTodoApi, deleteOneTodoApi, deleteSelectedTodosApi, fetchTodosApi, updateTask } from '../api/todoApi';

interface ToDoContext {
    tasks: ITask[];
    createTask: (newTask: ITask) => void;
    completeTask: (id: number, completed: boolean) => void;
    completeAllTasks: () => void;
    deleteAllTasks: () => void;
    deleteOneTask: (id: number) => void;
    editTask: (id: number, value: string) => void;
}

export const ToDoContext = createContext<ToDoContext | null>(null);

interface IToDoController {
    children: React.ReactNode
}



const ToDoController: React.FC<IToDoController> = ({children}) => {
    const [tasks, setTasks] = useState<ITask[]>([]);

    // const ToDoContext = createContext<ToDoContext>({
    //     tasks: tasks,
    //     createTask: createTask,
    //     completeTask: completeTask,
    //     completeAllTasks: completeAllTasks,
    //     deleteAllTasks: deleteAllTasks,
    //     deleteOneTask: deleteOneTask,
    //     editTask: editTask,
    // });
  
    useEffect(() => {
      fetchTodos();
  
    }, [])
  
    async function fetchTodos () {
      setTasks(await fetchTodosApi());
    }
  
    function createTask (newTask: ITask): void {
      setTasks([...tasks, newTask]);
  
      createTodoApi(newTask);
    }
  
    function completeTask(id: number, completed: boolean): void {
      completeTodoApi(id, completed);
  
      setTasks(tasks.map(task => 
        task.id === id
        ? {...task, completed: !task.completed}
        : task
      ))
    }
  
    function completeAllTasks(): void {
      const completedTasks = tasks.map(task => 
        task.completed === false
        ? {...task, completed: !task.completed}
        : task
      );
  
      setTasks(completedTasks);
      completeAllTodoApi();
    }
  
    function deleteAllTasks(): void {
      setTasks(tasks.filter(t => t.completed == false));
      deleteSelectedTodosApi();
    }
  
    function deleteOneTask(id: number):void {
      setTasks(tasks.filter(t => t.id !== id));
  
      deleteOneTodoApi(id);
    }
  
    function editTask(id: number, value: string): void {
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
    <ToDoContext.Provider 
        value={{
            tasks,
            createTask,
            completeTask,
            completeAllTasks,
            deleteAllTasks,
            deleteOneTask,
            editTask
        }}
    >
        {children}
    </ToDoContext.Provider>
  )
}

export default ToDoController

