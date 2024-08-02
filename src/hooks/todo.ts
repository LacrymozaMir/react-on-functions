import { useCallback, useContext, useMemo, useState } from "react";
import { ITask } from "../types/todoTypes";
import { ToDoContext } from "../components/ToDoController";

export const useToDoForm = () => {
    const [error, setError] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const updateValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }, []);

    const updateError = useCallback((arg: boolean) => {setError(arg)}, []);

    const todoContext = useContext(ToDoContext);

    const create = useCallback((event: React.MouseEvent) => {
        event.preventDefault();

        if (value.length) {
            const newTask: ITask = {id: Date.now(), title: value, completed: false}
            todoContext?.createTask(newTask);
            setValue('');
        } else {
            updateError(true);
        }
    }, [value, todoContext, updateError]);


    return useMemo(() => ({ error, updateError, value, updateValue, create}), 
    [error, updateError, value, updateValue, create]);
}