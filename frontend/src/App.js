import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// load components
import { recherche } from './APIArtChicago';
import { NextDates } from './components/NextDates';
import { Rechercher } from "./components/Rechercher";
import { ResultatRecherche } from "./components/ResultatRecherche.js";

function Button() {
  return <button>Click Me!</button>
}


function App() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  useEffect(() => {

    // Deux cas où on ne renvoie rien

    // First : si le input est nul
    if (!(query || query.length)) {
      setResults(null);
      return;
    }

    //Second : si moins de 3 caractères sont tapés dans la barre de recherche

    if (query.length < 3) {
      return;
    }

    recherche(query).then(results => {
      if (results && results.data) {
        setResults(results.data)
      }

    }).catch(err => console.log(err));

  }, [query]);

  return (

    <div className="App">
      <header className="App-header">
        <div className="Search">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Navbar test</Navbar.Brand>
          </Navbar>
        </div>
        <Rechercher query={query} onChange={(e) => setQuery(e.target.value)} />
      </header>

      <main>
        <Container fluid>
          <ResultatRecherche results={results} />
        </Container>
      </main>

      <h1>Les prochaines dates</h1>
      <NextDates />
      <Button />
      <img src={`https://www.artic.edu/iiif/2/${10550}/full/843,/0/default.jpg`} alt="Grapefruit slice atop a pile of other slices" />


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
