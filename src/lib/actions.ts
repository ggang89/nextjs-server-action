"use server";

import { revalidatePath } from "next/cache";
import { Todo } from "../app/components/TodoList";
import { sleep } from "./sleep";

export async function addTodo(data: FormData) {
  const title = data.get("title");

  await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, completed: false, userId: 1 }),
  });

  revalidatePath("/");
  // => revalidatePath를 안하면 db에는 추가되지만, 화면에는 추가되지 않음
  // => revalidatePath를 하면 화면에 자동 갱신됨
}

export async function deleteTodo(todo: Todo) {
  const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: todo.id,
    }),
  });

  await res.json();
  revalidatePath("/");
}

export async function updateTodo(todo: Todo) {
  const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...todo,
      completed: !todo.completed,
    }),
  });
  await res.json();

  // 일부러 일정시간 업데이트 지연시키는 함수 추가
  await sleep(2000);

  revalidatePath("/");
}
