import React from "react";
import { addTodo } from "../lib/actions";

const Form = () => {
  return (
    <form action={addTodo} className="flex items-center gap-2">
      <input
        type="text"
        name="title"
        autoFocus
        placeholder="새로운 할 일을 생성하세요"
        className="flex-grow w-full p-1 text-2xl rounded-lg"
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
