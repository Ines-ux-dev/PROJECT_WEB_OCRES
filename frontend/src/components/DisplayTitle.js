import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
//si le thmbnail existe alors oui sinon ne retourne rien
//pcq il n'y pas tous les resultats qui on un thumbnail
//only access alt_text if thumbnail exists
export function DisplayTitle({ resultat }) {
    //S'il n'y a aucun resulats
    if (!resultat) {
        return null;
    }

    //
    if (resultat.length === 0) {
        return <p>No results.</p>
    }

    //Sinon on a un resultat
    return (

        < Row >
            {
                resultat.map((resultats) => (
                    < Col xs={12} md={6} lg={3} key={resultats.id} >
                        <p>{resultats.title}</p>
                    </Col >

                ))
            }
        </Row >
    );
}