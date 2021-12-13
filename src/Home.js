import React, { Component } from "react";
import { reactDom, Link, NavLink, Redirect } from "react-dom";
import "../src/Nav";
import Nav from "./Nav";

function Home() {
  return (
    <div>
      <Nav />
      <h1>Home router</h1>
    </div>
  );
}

export default Home;
