import { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const addTask = () => {};
  const removeTask = () => {};

  const handleToggle = () => {};
  return (
    <div className="App">
      <header>
        <h1>Список задач:{todos.length}</h1>
      </header>
      <ToDoForm />
      {todos.map((todo) => {
        return <ToDo key={todo.id} />;
      })}
    </div>
  );
}
