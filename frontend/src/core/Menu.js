import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { fontWeight: "bold" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="navbar">
      <li className="navbar-item">
        <Link className="navbar-link" style={isActive(history, "/")} to="/">
          home
        </Link>
      </li>

      <li className="navbar-item">
        <Link className="navbar-link" style={isActive(history, "/shop")} to="/shop">
          shop
        </Link>
      </li>


      {isAuthenticated() && isAuthenticated().user.role === 0 && (
        <li className="navbar-item">
          <Link
            className="navbar-link"
            style={isActive(history, "/user/dashboard")}
            to="/user/dashboard"
          >
            dashboard
          </Link>
        </li>
      )}

      {isAuthenticated() && isAuthenticated().user.role === 1 && (
        <li className="navbar-item">
          <Link
            className="navbar-link"
            style={isActive(history, "/admin/dashboard")}
            to="/admin/dashboard"
          >
            dashboard
          </Link>
        </li>
      )}

      {!isAuthenticated() && (
        <Fragment>
          <li className="navbar-item">
            <Link
              className="navbar-link"
              style={isActive(history, "/signin")}
              to="/signin"
            >
              login
            </Link>
          </li>

          <li className="navbar-item">
            <Link
              className="navbar-link"
              style={isActive(history, "/signup")}
              to="/signup"
            >
              sign up
            </Link>
          </li>
        </Fragment>
      )}

      {isAuthenticated() && (
        <li className="navbar-item">
          <span
            className="navbar-link"
            style={{ cursor: "pointer", color: "#ffffff" }}
            onClick={() =>
              signout(() => {
                history.push("/");
              })
            }
          >
            logout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
