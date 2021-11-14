import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
//si le thmbnail existe alors oui sinon ne retourne rien
//pcq il n'y pas tous les resultats qui on un thumbnail
//only access alt_text if thumbnail exists
export function ResultatRecherche({ results }) {
    //S'il n'y a aucun resulats
    if (!results) {
        return null;
    }

    //
    if (results.length === 0) {
        return <p>No results.</p>
    }



    //Sinon on a un resultat
    return (

        < Row >
            {
                results.map((result) => (


                    < Col xs={12} md={6} lg={3} key={result.id} >
                        <p>{result.title}</p>

                        <Card>

                            <Card.Img variant="top" src={`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`} /*alt={result.thumbnail.alt_text}*/ />
                            <Card.Body>
                                <Card.Title>{result.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col >
                ))
            }
        </Row >
    );
}