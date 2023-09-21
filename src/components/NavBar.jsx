import React from "react";
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav-container">
      <div className="logo">
        <h1>IMG<span>allery</span></h1>
      </div>
      <div className="buttons">
      <Link to="/login">
      <button>Log In</button>
      </Link>
      </div>
    </div>
  );
}

export default NavBar;
