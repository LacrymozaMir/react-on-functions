import React, { useState } from 'react'
import { ITask } from '../types/todoTypes';
import cl from '../styles/TodoForm.module.css'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

interface ITodoForm {
    createTask: (newTask: ITask) => void;
}

const TodoForm: React.FC<ITodoForm> = ({createTask}) => {

    const [error, setError] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    
    const create = (event: React.MouseEvent) => {
        event.preventDefault();

        if (value.length) {
            const newTask: ITask = {id: Date.now(), title: value, completed: false}
            createTask(newTask);

            setValue('');
        } else {
            setError(true);
        }
    }
    
  
    return (
    
    <form className={cl.form}>
        <label className={cl.header}>Create task</label>
        <div className={cl.inp__container}>
            <MyInput 
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)} 
                onFocus={() => setError(false)}
                onBlur={() => setError(false)}
            />
            <MyButton onClick={create}>
                Create
            </MyButton>
            {error && 
                <div>You can't create task with empty title!</div>
            }
        </div>
        
    </form>
  )
}

export default TodoForm
