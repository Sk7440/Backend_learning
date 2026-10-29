import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { homeContext } from "./Context";

function Navbar() {
  const { currentUser, logout } = useContext(homeContext);

  return (
    <div className="auth-wrapper">
      <div className="btn-group">
        {currentUser ? (
          <>
            <span>Hi, {currentUser.name || currentUser.email}</span>
            <button className="btn btn-login" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-login">Login</button>
            </Link>
            <Link to="/Signup">
              <button className="btn btn-signup">Signup</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
