import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Heart from './Heart/Heart'
import { Menu } from './Menu/Menu';
import { Address } from './Addres/Address';

function App() {

  const [isReady, setIsReady] = useState(false);

  return (
    <div className="App">
      <Heart click={() => { setIsReady(true) }} />
      {
        isReady === true
          ?
          <>
            <Menu />
            <Address />
          </>
          :
          <>
          </>
      }

    </div>
  );
}

export default App;
