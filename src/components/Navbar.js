import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/">
          <img className="company-logo" src={logo} alt="" />
        </Link>

        <ul className="right">
          <li>
            <Link className="nav-item" to="/">
              Shop
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
