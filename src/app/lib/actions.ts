'use server';

import { revalidatePath } from "next/cache";
import { Todo } from "../components/TodoList";

export async function addTodo(data:FormData) {
  const title = data.get('title');

  await fetch('http://localhost:3001/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, completed: false, userId: 1 }),
  })

  revalidatePath('/');
  // => revalidatePath를 안하면 db에는 추가되지만, 화면에는 추가되지 않음
  // => revalidatePath를 하면 화면에 자동 갱신됨
}

export async function deleteTodo(todo: Todo) { 
  const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: todo.id
    })
  });

  await res.json();
  revalidatePath('/');
}