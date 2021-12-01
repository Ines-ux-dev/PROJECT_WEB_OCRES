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
        return (
            <Row>
                <Col xs={6} md={6} lg={6}>
                    <p>Oups. Aucun résultats pour votre recherche.</p>


                </Col>

            </Row>


        );
    }

    //<Card.Img variant="top" src={`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`} alt={" "} />

    //Sinon on a un resultat
    return (

        < Row >
            <p className="result">Results:</p>
            {
                results.map((result) => (
                    < Col xs={12} md={6} lg={3} key={result.id} >
                        <Card>
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