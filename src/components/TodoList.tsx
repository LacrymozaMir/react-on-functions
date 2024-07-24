import React from 'react'
import { ITask } from '../types/todoTypes'
import TodoItem from './TodoItem';

interface ITodoList {
    tasks: ITask[];
    completeTask: (id: number, completed: boolean) => void;
    deleteTask: (id: number) => void;
    editTask: (id: number, value: string) => void;
}

const TodoList: React.FC<ITodoList> = ({tasks, completeTask, deleteTask, editTask}) => {
  return (
    <section>
        <h2>Tasks list</h2>
        {tasks?.map(task => 
            <TodoItem 
                key={task.id} 
                task={task} 
                completeTask={completeTask} 
                deleteTask={deleteTask}
                editTask={editTask}
            />
        )}
    </section>
  )
}

export default TodoList
