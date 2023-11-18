import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light p-3">
      <div className="container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="navlogo"
            className="navbar-brand navbar-logo"
          />
        </Link>

        <ul className="navbar-nav d-flex flex-row justify-content-between align-items-center col-6 col-sm-4 col-xl-3">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              <i className="fa-solid fa-house"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/jobs" className="nav-link">
              <i className="fa-solid fa-suitcase"></i>
            </NavLink>
          </li>
          <li className="nav-item  nav-link">
            <button type="button" className="btn border-0">
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
