import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heart from './Heart/Heart'
import { Menu } from './Menu/Menu';
import { Address } from './Addres/Address';

function App() {
  return (
    <div className="App">
      <Heart />
      <Menu />
      <Address />
    </div>
  );
}

export default App;
