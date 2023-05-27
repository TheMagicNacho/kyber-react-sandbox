import React from 'react';
import logo from './logo.svg';
import './App.css';

// import * as wasm from './kyber/pqc_kyber_bg.wasm';
// import * as kyber from './kyber/pqc_kyber_bg.js';

import * as kyber from 'pqc_kyber';



function App() {
  // kyber.__wbg_set_wasm(wasm);
  let keys = kyber.keypair();
  console.log(keys);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
