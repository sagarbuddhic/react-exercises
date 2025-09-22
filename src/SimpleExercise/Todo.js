import React, { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, task]);
    setTask("");
  };

  const removeTodo = (i) => {
    setTodos(todos.filter((_, ind) => i !== ind));
  };

  return (
    <>
      <input
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Enter Task"
      ></input>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((val, i) => {
          return (
            <li key={i}>
              {val}
              <button
                onClick={() => {
                  removeTodo(i);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
