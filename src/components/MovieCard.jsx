import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MovieCard({ id, title, description, posterURL, rating }) {
    return (
        <Card key={id} style={{ width: '20rem', minHeight: '47rem' }} className='m-4 shadow'>
        <Card.Header className='p-0'>
            <Card.Img
            variant="top"
            src={posterURL !== '' ? posterURL : "noImage.png"}
            alt={`Poster for ${title}`} 
            />
            {console.log(posterURL)}
        </Card.Header>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-center'>
            {title}
            </Card.Title>
            <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className='bg-danger text-white'>
            <Card.Subtitle>
            <span>{rating}/10</span> 
            </Card.Subtitle>
        </Card.Footer>
        </Card>
    );
}
