import React from "react";
import Todo from "../todoInterface";
import "./TodoList.css";
interface items {
  items: Todo[];
  deleteFn: (id: number) => void;
}

let TodoList: React.FC<items> = (props) => {
  return (
    <div>
      {props.items.map(({ title, id }) => {
        return (
          <div key={id}>
            <p>{title}</p>
            <button onClick={() => props.deleteFn(id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
