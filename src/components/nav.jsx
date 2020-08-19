import React from "react";
import { Link, NavLink } from "react-router-dom";

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Medlemsregister
        </Link>
        <ul className="navbar-nav mr-right float-right">
          <li className="nav-item">
            <NavLink className="nav-link home_nav_link" to="/" exact>
              Medlemmar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/lagg_till"
              activeClassName="active"
            >
              Lägg till medlem
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
