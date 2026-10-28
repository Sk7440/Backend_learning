import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div class="todo-input-container">
        <input type="text" class="todo-input" placeholder="Enter your task" />
        <div class="todo-btn-wrapper">
          <button class="todo-btn">Add task</button>
        </div>
      </div>
    </>
  );
}

export default Home;
