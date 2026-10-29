import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import Navbar from "../components/Navbar";
import { homeContext } from "../components/context";

function Homepage() {
  const { currentUser } = useContext(homeContext);

  return (
    <>
      <Navbar />
      {currentUser ? <TodoDashboard user={currentUser} /> : <Landing />}
    </>
  );
}

function Landing() {
  return (
    <main className="hp-landing">
      <section className="hp-hero">
        <span className="hp-badge">Simple · Fast · Free</span>
        <h1>
          Get things done,
          <br />
          <span className="hp-accent">one task at a time.</span>
        </h1>
        <p>
          Write down what you need to do, tick it off when it's finished, and
          keep your day under control.
        </p>
        <div className="hp-hero-actions">
          <Link to="/Signup" className="hp-btn hp-btn-primary">
            Get started
          </Link>
          <Link to="/login" className="hp-btn hp-btn-ghost">
            I have an account
          </Link>
        </div>
      </section>

      <section className="hp-features">
        <div className="hp-feature">
          <div className="hp-feature-icon">✓</div>
          <h3>Add tasks fast</h3>
          <p>Type a task and press Enter. Done.</p>
        </div>
        <div className="hp-feature">
          <div className="hp-feature-icon">◐</div>
          <h3>Track progress</h3>
          <p>See what's left and what's finished at a glance.</p>
        </div>
        <div className="hp-feature">
          <div className="hp-feature-icon">⚑</div>
          <h3>Stay focused</h3>
          <p>Filter to active tasks and ignore the rest.</p>
        </div>
      </section>
    </main>
  );
}

/* ---------- Shown when logged in ---------- */
function TodoDashboard({ user }) {
  const navigate = useNavigate();
  const storageKey = `todos_${user.email}`; // each user gets their own list

  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });

  // Save todos whenever they change, so a refresh doesn't wipe them
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(todos));
  }, [todos, storageKey]);

  const addTask = () => {
    if (!user) {
      navigate("/Signup");
      return;
    }
    if (task.trim() === "") return;
    setTodos((prev) => [
      { id: Date.now(), text: task.trim(), done: false },
      ...prev,
    ]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.done));
  };

  const doneCount = todos.filter((t) => t.done).length;
  const activeCount = todos.length - doneCount;

  const visibleTodos = todos.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  return (
    <main className="hp-dashboard">
      <header className="hp-dash-header">
        <h1>Hi, {user.name || user.email.split("@")[0]} 👋</h1>
        <p>
          {todos.length === 0
            ? "No tasks yet. Add your first one below."
            : `You have ${activeCount} task${activeCount === 1 ? "" : "s"} left.`}
        </p>
      </header>

      <div className="hp-stats">
        <div className="hp-stat">
          <span className="hp-stat-num">{todos.length}</span>
          <span className="hp-stat-label">Total</span>
        </div>
        <div className="hp-stat">
          <span className="hp-stat-num">{activeCount}</span>
          <span className="hp-stat-label">Active</span>
        </div>
        <div className="hp-stat">
          <span className="hp-stat-num">{doneCount}</span>
          <span className="hp-stat-label">Done</span>
        </div>
      </div>

      <div className="hp-card">
        <div className="hp-input-row">
          <input
            type="text"
            className="hp-input"
            placeholder="What do you need to do?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button className="hp-btn hp-btn-primary" onClick={addTask}>
            Add task
          </button>
        </div>

        <div className="hp-toolbar">
          <div className="hp-filters">
            {["all", "active", "done"].map((f) => (
              <button
                key={f}
                className={`hp-filter ${filter === f ? "is-active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f[0].toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          {doneCount > 0 && (
            <button className="hp-link-btn" onClick={clearCompleted}>
              Clear completed
            </button>
          )}
        </div>

        {visibleTodos.length === 0 ? (
          <p className="hp-empty">
            {filter === "done"
              ? "Nothing completed yet."
              : filter === "active"
              ? "All caught up!"
              : "Your list is empty."}
          </p>
        ) : (
          <ul className="hp-list">
            {visibleTodos.map((todo) => (
              <li
                key={todo.id}
                className={`hp-item ${todo.done ? "is-done" : ""}`}
              >
                <label className="hp-check">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTask(todo.id)}
                  />
                  <span>{todo.text}</span>
                </label>
                <button
                  className="hp-delete"
                  onClick={() => deleteTask(todo.id)}
                  aria-label={`Delete ${todo.text}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default Homepage;