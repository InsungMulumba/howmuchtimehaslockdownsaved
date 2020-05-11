import React from 'react';
import logo from '../assets/logo.png';
import '../styles/_header.scss';

const Header = () => {
    return(
        <div className="header">
            <img 
                src = {logo} alt ={logo}
                className="logo"
            />
            <h1>Time saved in lockdown</h1>
            <span> Calculate how much time you've saved by
                    working remotely since lockdown began</span>
        </div>
    );  
};
export default Header;
