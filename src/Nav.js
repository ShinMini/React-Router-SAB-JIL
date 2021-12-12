import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Shop";

function Nav() {
  return (
    <div>
      <nav>
        <h3>
          <ul>
            <li>About</li>
            <li>Shop</li>
          </ul>
        </h3>
      </nav>
    </div>
  );
}

export default Nav;
