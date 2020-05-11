import React from 'react';
import NavBar from './NavBar';
import Header from './components/Header';
import Form from './components/Form';
import './styles/vars.scss';

export const App = () =>
 {
    return (
      <div className="bg">
        <NavBar/>
        <Header />
        <Form/>
      </div>
    );
  };


export default App;
