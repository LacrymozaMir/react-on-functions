import React, { useState } from 'react'
import { ITask } from '../types/todoTypes';

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
    
    <form>
        <label htmlFor="">Create task </label>
        <input 
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)} 
            onFocus={() => setError(false)}
            onBlur={() => setError(false)}
        />
        <button onClick={create}>Create</button>
        {error && 
            <div>You can't create task with empty title!</div>
        }
    </form>
  )
}

export default TodoForm
