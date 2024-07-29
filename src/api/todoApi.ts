import { ITask } from "../types/todoTypes";


export async function http<T>(req: string): Promise<T> {
    const response = await fetch(req);
    const body = await response.json();
    return body;
}

export async function fetchTodosApi() {
    try {
        const response = await http<ITask[]>('https://jsonplaceholder.typicode.com/todos?userId=1');
        return response;
    } catch(e) {
        console.log(e);
        return [];
    }
}

export function deleteOneTodoApi(id: number): void {
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'DELETE',
          });

    } catch(error) {
        console.log(error);
    }
}

export function createTodoApi(task: ITask): void {
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

export function completeTodoApi(id: number, completed: boolean): void {
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
            method: 'PUT',
            body: JSON.stringify({
              completed: !completed,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })

   } catch(error) {
        console.log(error);
   }
}

export function deleteSelectedTodosApi(): void {
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/todos/deleteAll', {
            method: 'DELETE',
          });

    } catch(error) {
        console.log(error);
    }
}

export function completeAllTodoApi(): void {
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

export function updateTask(id: number, value: string): void {
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
            method: 'PUT',
            body: JSON.stringify({
              title: value,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
    } catch (e) {

    }
}

