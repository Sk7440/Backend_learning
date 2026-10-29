import React, { useState } from "react";
import Navbar from "./Navbar";

function Home() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    const { currentUser } = useContext(homeContext);
    const navigate = useNavigate();
    if (!currentUser) {
      navigate("/Signup");
      return;
    }
    if (task === "") return;
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
