import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import Navbar from "../components/Navbar";
import { homeContext } from "../components/Context";  
import Home from "../components/Home";
function Homepage() {
  const { currentUser } = useContext(homeContext);

  return (
    <>
      <Navbar />
      {currentUser ? <Home/> : <Landing />}
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



export default Homepage;