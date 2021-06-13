import happyLogo from './img/happyLogo512.png';
import sadLogo from './img/sadLogo512.png'
import './App.css';
import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import {Interval} from './components/utils';
import {VerifyRHat, HandleWalletChange} from './components/web3_interact';

function App() {

  const [intervalRate, setIntervalRate] = useState(500);
  const [displayHappy, setDisplayHappy] = useState(false);

  Interval(() => {
    const GetRHatAsync = async () => {
      await VerifyRHat(setDisplayHappy);
    }
    GetRHatAsync();
    setIntervalRate(1000 * 15);

  }, intervalRate);
  
  HandleWalletChange(setDisplayHappy);


  return (
    <div className="App">

    {displayHappy === false &&
      <header className="App-header">
        <img src={sadLogo} className="App-logo" alt="logo" />
        <p>
          <code>no r hat :-(</code>
        </p>
      </header>
    }
    {displayHappy === true &&
      <header className="App-header">
        <img src={happyLogo} className="App-logo" alt="logo" />
        <p>
          <code>u hav r hat!1 :-)</code>
        </p>
        <p>
          <code>welcom 2 da club!!1! :-)</code>
        </p>
      </header>
    }
    </div>
  );
}

export default App;
