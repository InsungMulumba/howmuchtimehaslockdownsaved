import React from 'react';
import {
  Link,
  BrowserRouter
} from "react-router-dom";
// import ContactPage from './components/contact';
import './styles/NavBar.scss';


const resultAnchor = <li><Link to="#Result"> Result</Link></li>;
const calcAnchor = <li><Link to="#Calculator"> Calculator</Link></li>;
const contact = <li><a href="#contact">Contact</a></li>;

const navList =
  <ul>
     <BrowserRouter>
      {resultAnchor}
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