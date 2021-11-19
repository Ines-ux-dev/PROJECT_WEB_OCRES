import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
//si le thmbnail existe alors oui sinon ne retourne rien
//pcq il n'y pas tous les resultats qui on un thumbnail
//only access alt_text if thumbnail exists

// http://api.artic.edu/docs/#images
export const artworkImageUrl = (id, width = 843) =>
    `https://www.artic.edu/iiif/2/${id}/full/${width},/0/default.jpg`;

export function ResultatRecherche({ results }) {



    //S'il n'y a aucun resulats
    if (!results) {
        return null;
    }

    //
    if (results.length === 0) {
        return <p>No results.</p>

    }
    console.log(results);

    //Sinon on a un resultat
    return (
        < Row >
            {
                results.map((result) => (


                    < Col xs={12} md={6} lg={3} key={result.id} >
                        <p>{result.title}</p>

                        <p>{result.image_id}</p>

                        <Card>
                            <Card.Img variant="top" src={`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`} /*alt={result.thumbnail.alt_text}*/ />
                            <Card.Img
                                variant="top"
                                src={artworkImageUrl(result.image_id, 250)}
                            //alt={result.thumbnail?.alt_text}
                            />
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