import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { useState } from "react";
import Todo from "./todoInterface";
import "./App.css";
let App: React.FC = () => {
  let [changeItems, setChangeItems] = useState<Todo[]>([]);
  let todoFn = (t: string, id: number) => {
    setChangeItems((prev) => [...prev, { title: t, id }]);
  };
  let deleteFn = (id: number) => {
    setChangeItems((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <div className="App">
      <NewTodo fn={todoFn} />
      <TodoList items={changeItems} deleteFn={deleteFn} />
    </div>
  );
};

export default App;
