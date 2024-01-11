import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Le composant `MovieCard` représente une carte pour afficher les détails d'un film, série ou émission.

export default function MovieCard({ id, title, description, posterURL, rating }) {
    return (
        <Card key={id} style={{ width: '20rem', minHeight: '47rem' }} className='m-4 shadow'>
            <Card.Header className='p-0'>
                {/* Utilisation de l'image du poster ou d'une image par défaut si l'URL est vide. */}
                <Card.Img
                    variant="top"
                    src={posterURL !== '' ? posterURL : "noImage.png"}
                    alt={`Poster for ${title}`} 
                />
            </Card.Header>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-center'>
                    {title}
                </Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className='bg-danger text-white'>
                <Card.Subtitle>
                    {/* Affichage de la note du film sur 10. */}
                    <span>{rating}/10</span> 
                </Card.Subtitle>
            </Card.Footer>
        </Card>
    );
}
