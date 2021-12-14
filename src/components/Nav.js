import React, { Component } from "react";
import reactDom from "react-dom";
import { Link, NavLink, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Shop, Home } from "./components";
import Shop from "./components/Shop";

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="hurray">
            Home
          </NavLink>

          <NavLink to="/shop" activeClassName="hurray">
            Shop
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
