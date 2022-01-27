import { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      };
      setTodos([...todos, newItem]);
    }
  };
  const removeTask = () => {};

  const handleToggle = () => {};
  return (
    <div className="App">
      <header>
        <h1>Task list:{todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            toggleTask={handleToggle}
            removeTask={removeTask}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}
