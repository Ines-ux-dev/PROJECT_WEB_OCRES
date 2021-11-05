import React from 'react';

import './App.css';

// load components

import { NextDates } from './components/NextDates'

function Button() {
  return <button>Click Me!</button>
}


function App() {
  return (

    <div className="App">
      <h1>Les prochaines dates</h1>
      <NextDates />

      <Button />

    </div>

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>*/
  );
}

export default App;
