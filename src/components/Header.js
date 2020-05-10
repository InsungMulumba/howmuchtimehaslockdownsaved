import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.scss';

const Header = () => {
    return(
        <div className="header">
            <img 
                src = {logo} alt ={logo}
                className="logo"
            />
            <h1>Time Saved in lockdown</h1>
            <span> Calculate how much time you've saved 
                    working remotely since lockdown began</span>
        </div>
    );  
};
export default Header;
