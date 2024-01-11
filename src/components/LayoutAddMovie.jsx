import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LayoutAddMovie = ({ movies, setMovies }) => {
    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
    const [id, setId] = useState(newId);
    const [title, setTitle] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);

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

        // Ajout du nouveau film au tableau Movies (create a new array)
        const newListMovies = [...movies, formData];
        setMovies(newListMovies);

        // Réinitialisation des valeurs des champs après la soumission
        setId(id + 1); // Incrémentation de l'ID pour le prochain film
        setTitle('');
        setPosterUrl('');
        setDescription('');
        setRating(0); // Initialize with a number, not an empty string
    };

    return (
        <div className='container-fluid p-4 bg-danger'>
        <Container className='text-white'>
            <h1>Ajouter un Film, une série ou une émission</h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
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
                type="number"
                max={10}
                min={0}
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
