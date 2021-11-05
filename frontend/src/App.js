import React from 'react';
import { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// load components

import { NextDates } from './components/NextDates';
import { Rechercher } from "./components/Rechercher";
import { ResultatRecherche } from "./components/ResultatRecherche.js";

function Button() {
  return <button>Click Me!</button>
}


function App() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  return (

    <div className="App">
      <header className="App-header">
        <div className="Search">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Navbar test</Navbar.Brand>
          </Navbar>
        </div>
        <Rechercher query={query} />
      </header>

      <main>
        <Container fluid>
          <ResultatRecherche results={results} />
        </Container>
      </main>

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
