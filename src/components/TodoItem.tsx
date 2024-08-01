import React, { useState } from 'react'
import { ITask } from '../types/todoTypes'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import { Card, Text } from '../styles/components';

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
    <Card margin='0 0 12px 0' padding='0'>
        {isEditing 
            ? <MyInput 
                type="text" 
                value={value}
                onChange={event=> setValue(event.target.value)}
                // onBlur={() => setIsEditing(false)}
            />
            : <Text    
                style={{textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'green' : 'black',
                    cursor: 'pointer',
                }} 
                onClick={complete}
                >
                    {task?.id}. {task?.title}
                </Text>
        }
        
        <MyButton onClick={() => deleteTask(task.id)}>delete</MyButton>
        {isEditing
            ? <MyButton onClick={endEditing}>ok</MyButton>
            : <MyButton onClick={startEditing}>edit</MyButton>
        }
    </Card>
  )
}

export default TodoItem
