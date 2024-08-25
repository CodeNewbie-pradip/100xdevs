// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const editTodo = (id) => {
    const newText = prompt("Edit your todo: ");
    if (newText !== null && newText !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>Todo Task Manager</h1>
      </header>
      <main>
        <div id="libox">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text}
                <span>
                  <button onClick={() => editTodo(todo.id)}>Edit</button>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div id="inputArea">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter to-Do here"
          />
          <button onClick={addTodo}>Add Task</button>
        </div>
      </main>
    </div>
  );
}

export default App;
