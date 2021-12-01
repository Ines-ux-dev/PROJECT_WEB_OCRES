import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// load components
import { recherche } from './APIArtChicago';

import { Rechercher } from "./components/Rechercher";
import { ResultatRecherche } from "./components/ResultatRecherche.js";
import { Circle } from "./components/Cercle.js";
import { Navbars } from './components/Navbars';
import { Caroutest } from './components/Caroutest';



import './houranddate.css'

/*var heureDiv = document.getElementById("h");
var dateDiv = document.getElementById("d");
var affichageHeure;

affichageHeure = function () {
  var today, annee, listeMois,
    mois, listeJours, jourNumero, jourNom,
    heures, minutes, secondes, deuxChiffres;

  today = new Date();
  annee = today.getFullYear();
  listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
  mois = listeMois[today.getMonth()];
  jourNumero = today.getDate();
  //semaine commence par dimanche
  listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  jourNom = listeJours[today.getDay()];
  deuxChiffres = function (element) {
    if (element < 10) {
      return element = "0" + element;

    }
    else {
      return element;
    }
  }

  heures = deuxChiffres(today.getHours());
  minutes = deuxChiffres(today.getMinutes());
  secondes = deuxChiffres(today.getSeconds());

  heureDiv.innerHTML += heures + ":" + minutes + ":" + secondes;
  dateDiv.innerHTML += jourNom + ", " + jourNumero + " " + mois + " " + annee;

  //toutes les secondes
  setTimeout(affichageHeure, 1000);

}

affichageHeure();


<div class="horloge">
        <div class="heures" id="h">
          blabla<p>Heures:</p>

        </div>
        <div class="date" id="d">
          balbla<p>Date:</p>
        </div>
      </div>*/


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
          <Circle />
          <Circle />
          <Circle />

        </div>
        <p>TEST CAROUSSEL</p>
        <Caroutest />

      </main>



    </div >
  );
}

export default App;
