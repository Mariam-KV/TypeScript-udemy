import React from "react";
import "./NewTodo.css";
import { useRef } from "react";
type NewToDo = {
  fn: (t: string, n: number) => void;
};
let NewTodo: React.FC<NewToDo> = (props) => {
  let ref = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let enteredValue = ref.current!.value;
    if (enteredValue.trim().length > 0) props.fn(enteredValue, Math.random());
    ref.current!.value = "";
  }
  return (
    <div>
      <h3>Todo Text</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" id="text" ref={ref} />
        <button type="submit">Add to Do</button>
      </form>
    </div>
  );
};

export default NewTodo;
