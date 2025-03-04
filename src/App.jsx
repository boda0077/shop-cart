// App.js
import React from 'react';
import { Outlet } from 'react-router';
import { useCart } from './components/CartContext'; // Import useCart
import Nav from './components/Nav';
import Cube from './components/Cube';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  
  return (
    <>
      <Nav />
      <Header />
    
      
      <Outlet />
      <Cube />
      <Section />
    </>
  );
}

export default App;
