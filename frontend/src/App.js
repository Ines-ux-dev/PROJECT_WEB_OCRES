import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// load components
import { recherche } from './APIArtChicago';

import { Rechercher } from "./components/Rechercher";
import { ResultatRecherche } from "./components/ResultatRecherche.js";
import { CircleCHI } from "./components/CercleCHI.js";
import { Navbars } from './components/Navbars';
import { Caroutest } from './components/Caroutest';
import './houranddate.css'

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
  console.log(results)

  var d = new Date();

  var date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

  var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

  var fullDate = date + ' ' + hours;

  console.log(fullDate);
  return (



    < div className="App" >
      <header className="App-header">

        <div className="Search">
          <Navbars />

          <Navbar>
          </Navbar>

          <Rechercher query={query} onChange={(e) => setQuery(e.target.value)} />
          <Container fluid>
            <ResultatRecherche results={results} />
          </Container>
          <br></br>
        </div>


      </header>

      <main>

        <div>
          <CircleCHI />
        </div><br></br>
        <Caroutest />
      </main>
    </div >
  );
}

export default App;
