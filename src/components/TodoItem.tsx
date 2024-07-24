import React, { useState } from 'react'
import { ITask } from '../types/todoTypes'

interface ITodoItem {
    task: ITask;
    completeTask: (id: number, completed: boolean) => void;
}

const TodoItem: React.FC<ITodoItem> = ({task, completeTask}) => {

    const complete = (): void => {
        completeTask(task.id, task.completed);
    }



  return (
    <article>
        <h3 
            style={{textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? 'red' : 'black',
                cursor: 'pointer',
            }} 
            onClick={complete}
        >
            {task?.id}. {task?.title}
            </h3>
    </article>
  )
}

export default TodoItem
