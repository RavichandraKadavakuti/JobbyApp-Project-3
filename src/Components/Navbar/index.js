import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./index.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Cookies from "js-cookie";

const Navbar = (props) => {
  const onclickLogout = () => {
    Cookies.remove("jwt_token");
    const { history } = props;
    history.replace("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
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
            <Popup
              modal
              closeOnDocumentClick={false}
              trigger={
                <button type="button" className="btn border-0">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              }
            >
              {(close) => (
                <div className="d-flex flex-column align-items-center text-center">
                  <h6>Are you confirm to Logout?</h6>
                  <div className="d-flex justify-content-around col-12 mt-5">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={onclickLogout}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={close}
                    >
                      No
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
