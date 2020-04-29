import React from 'react';
import './styles/NavBar.scss';

const title = <div> How much time did Lockdown save?</div>;

function NavBar() {
  return (
    <nav className="navBar">
       {title}
    </nav>
  );
}

export default NavBar;