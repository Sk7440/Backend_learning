import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { homeContext } from "./Context";

function Signup() {
  const { login } = useContext(homeContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setError("Passwords do not match");
    }
    login({ name: form.name, email: form.email });
    navigate("/login");
    async function postData() {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/Signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        if (!response.ok) {
          toast.error("Something went wrong");
        }
        const data = await response.json();
        console.log(data);

        setDataToShow(data);
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <Link to="/" className="back-btn minimal">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </Link>

        <div className="header">
          <h2>Create an Account</h2>
          <p>Join us today! Enter your details below.</p>
        </div>

        <div className="divider">
          <span>or register with email</span>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Ali Khan"
              required
            />
          </div>
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
              placeholder="Create a strong password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              value={form.confirm}
              onChange={handleChange}
              placeholder="Re-enter your password"
              required
            />
          </div>
          <div className="terms-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms &amp; Conditions</a>
            </label>
          </div>
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>

        <div className="footer">
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
