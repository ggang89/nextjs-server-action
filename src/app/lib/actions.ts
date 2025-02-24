'use server';

import { revalidatePath } from "next/cache";

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
}