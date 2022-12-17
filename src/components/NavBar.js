import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li id="logo">
            <NavLink to="/">
              My<span id="my-logo"> PlayList</span>
            </NavLink>
          </li>
          <span id="navbarlinks">
            <li id="home">
              <NavLink to="/">Home</NavLink>
            </li>
            <li id="about">
              <NavLink to="/About">About us</NavLink>
            </li>
          </span>
        </ul>
      </nav>
    </div>
  );
}
