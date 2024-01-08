import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Movies from '../Movies';

const LayoutAddMovie = () => {
    const newId = Movies.length > 0 ? Movies[Movies.length - 1].id + 1 : 1;
    const [id, setId] = useState(newId);
    const [title, setTitle] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Création d'un objet contenant les données du formulaire
        const formData = {
        id,
        title,
        posterUrl,
        description,
        rating,
    };

        // Ajout du nouveau film au tableau Movies
        Movies.push(formData);
        console.log(formData);
        // Réinitialisation des valeurs des champs après la soumission
        setId(id + 1); // Incrémentation de l'ID pour le prochain film
        setTitle('');
        setPosterUrl('');
        setDescription('');
        setRating('');
    };

    return (
        <div className='container-fluid p-4 bg-danger'>
        <Container className='text-white'>
            <h1>Ajouter un Film, une série ou une émission</h1>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupTitle">
                <Form.Label>Titre</Form.Label>
                <Form.Control
                type="text"
                placeholder="Entrer Le titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPosterUrl">
                <Form.Label>Url Du Poster</Form.Label>
                <Form.Control
                type="text"
                placeholder="Entrer L'url"
                value={posterUrl}
                onChange={(e) => setPosterUrl(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Desc.ControlTextarea">
                <Form.Label>Description</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupRating">
                <Form.Label>Note</Form.Label>
                <Form.Control
                type="text"
                placeholder="0"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                />
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
            </Form>
        </Container>
        </div>
    );
};

export default LayoutAddMovie;
