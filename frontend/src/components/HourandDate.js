import React, { Component } from 'react';
import '../houranddate.css'

var heureDiv = document.querySelector('heures');
var dateDiv = document.querySelector('date');
var affichageHeure;



export class HourandDate extends Component {

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

        heureDiv.textContent = heures + ":" + minutes + ":" + secondes;
        dateDiv.textContent = jourNom + ", " + jourNumero + " " + mois + " " + annee;

        //toutes les secondes
        setTimeout(affichageHeure, 1000);

    }





    render() {

        return (


            <div class="horloge">
                <div class="heures">
                    <p>Heures:</p>

                </div>
                <div class="date">
                    <p>Date:</p>
                </div>
            </div>
        )
    }


}


