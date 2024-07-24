import React, { useState } from 'react'
import { ITask } from '../types/todoTypes'
import cl from '../styles/TodoItem.module.css'

interface ITodoItem {
    task: ITask;
    completeTask: (id: number, completed: boolean) => void;
    deleteTask: (id: number) => void;
    editTask: (id: number, value: string) => void;
}

const TodoItem: React.FC<ITodoItem> = ({task, completeTask, deleteTask, editTask}) => {

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const complete = (): void => {
        completeTask(task.id, task.completed);
    }

    const startEditing = (): void => {
        setIsEditing(true);
        setValue(task.title);
    }

    const endEditing = ():void => {
        editTask(task.id, value);
        setIsEditing(false);
    }




  return (
    <article className={cl.container}>
        {isEditing 
            ? <input 
                type="text" 
                value={value}
                onChange={event=> setValue(event.target.value)}
                // onBlur={() => setIsEditing(false)}
            />
            : <h3 
                style={{textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'red' : 'black',
                    cursor: 'pointer',
                }} 
                onClick={complete}
                >
                    {task?.id}. {task?.title}
                </h3>
        }
        
        <button onClick={() => deleteTask(task.id)}>delete</button>
        {isEditing
            ? <button onClick={endEditing}>ok</button>
            : <button onClick={startEditing}>edit</button>
        }
    </article>
  )
}

export default TodoItem
