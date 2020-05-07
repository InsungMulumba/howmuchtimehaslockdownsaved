import React from 'react';
import {
  BrowserRouter
} from "react-router-dom";
import './styles/NavBar.scss';

const calcAnchor = <li><a href="#calculator"> Calculate</a></li>;
const contact = <li><a href="#contact"> Contact</a></li>;

const navList =
  <ul>
     <BrowserRouter>
      {calcAnchor}
      {contact}
     </BrowserRouter>
  </ul>;

function NavBar() {
  return (
    <nav className="navbar">
      {navList}
    </nav>
  );
};

export default NavBar;