import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { homeContext } from "./Context";

function Home() {
  const { currentUser } = useContext(homeContext);
  const navigate = useNavigate();

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!currentUser) {
      navigate("/Signup"); 
      return;
    }
    if (task.trim() === "") return;
    setTodos([...todos, { text: task }]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="todo-btn-wrapper">
          <button className="todo-btn" onClick={addTask}>
            Add task
          </button>
        </div>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;