import React, { Profiler } from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import { useToDoForm } from '../hooks/todo';

const TodoForm: React.FC = () => {
    const {create, error, updateValue, value, updateError} = useToDoForm();

    return (
    
    <form>
        <label>Create task</label>
        <div>

            <Profiler id='Input' onRender={() => console.log('input рисуется')}>
                <MyInput 
                    type="text"
                    value={value}
                    onChange={updateValue} 
                    onFocus={() => updateError(false)}
                    onBlur={() => updateError(false)}
                />
            </Profiler>
            <Profiler id='Input' onRender={() => console.log('button рисуется')}>
                <MyButton onClick={create}>
                    Create
                </MyButton>
            </Profiler>

            {error && 
                <div>You can't create task with empty title!</div>
            }
        </div>
        
    </form>
  )
}

export default TodoForm
