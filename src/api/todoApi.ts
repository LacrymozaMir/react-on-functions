import { ITask } from "../types/todoTypes";

export async function fetchTodos(): Promise<ITask[] | null> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
        return await response.json();

    } catch {
        return null;
    }
}

export function deleteOneTodo(id: number): void {
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'DELETE',
          });

    } catch(error) {
        console.log(error);
    }
}

export function createTodo(task: ITask): void {
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
              title: task.title,
              completed: false,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })

    } catch(error) {
        console.log(error);
    }
}

export function updateTodo(task: ITask): void {
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/todos' + task.id, {
            method: 'PUT',
            body: JSON.stringify({
              title: task.title,
              completed: task.completed,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })

   } catch(error) {
        console.log(error);
   }
}

export function deleteSelectedTodos(): void {
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/todos/deleteAll', {
            method: 'DELETE',
          });

    } catch(error) {
        console.log(error);
    }
}

export function completeAllTodo(): void {
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/todos/completeAll', {
            method: 'PUT',
            body: JSON.stringify({
              completed: true,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
    
    } catch(error) {
        console.log(error);
    }
}