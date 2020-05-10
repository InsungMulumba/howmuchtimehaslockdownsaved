import React from 'react';
import NavBar from './NavBar';
import Header from './components/Header';
import Form from './components/Form';


export const App = () =>
 {
    return (
      <div>
        <NavBar/>
        <Header />
        <Form/>
      </div>
    );
  };


export default App;
