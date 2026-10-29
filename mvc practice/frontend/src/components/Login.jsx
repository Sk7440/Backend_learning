import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { homeContext } from "./Context";

function Login() {
  const { login } = useContext(homeContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email: form.email });
    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <Link to="/" className="back-link">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to Home</span>
        </Link>

        <div className="header">
          <h2>Welcome Back</h2>
          <p>Please enter your credentials to sign in.</p>
        </div>

        

        <div className="divider">
          <span>or sign in with email</span>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" id="remember" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>

        <div className="footer">
          <p>
            Don't have an account? <Link to="/Signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;