import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="auth-wrapper">
      <div class="btn-group">
        <Link to="/login">
        <button class="btn btn-login">Login</button>
        </Link>
        <Link to="/Signup">
        <button class="btn btn-signup">Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
