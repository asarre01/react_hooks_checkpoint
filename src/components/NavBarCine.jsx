import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from 'react';

function NavBarCine({ onFilterChange }) {
	const [titleFilter, setTitleFilter] = useState('');
	const [ratingFilter, setRatingFilter] = useState('');

	const prevTitleFilter = useRef(titleFilter);
	const prevRatingFilter = useRef(ratingFilter);

	useEffect(() => {
		// Check if filters have changed before triggering onFilterChange
		if (
		prevTitleFilter.current !== titleFilter ||
		prevRatingFilter.current !== ratingFilter
		) {
		onFilterChange({
			title: titleFilter,
			rating: ratingFilter !== '' ? parseInt(ratingFilter) : 0,
		});

		// Update refs after onFilterChange is called
		prevTitleFilter.current = titleFilter;
		prevRatingFilter.current = ratingFilter;
		}
	}, [titleFilter, ratingFilter, onFilterChange]);

	return (
		<Navbar expand="lg" className="bg-danger">
		<Container fluid>
			<Navbar.Brand href="#">
			<h2>Cinéma</h2>
			</Navbar.Brand>
			<div className="float-end">
			<Navbar.Collapse id="navbarScroll">
				<Form className="d-flex">
				<Form.Group className="me-2">
					<Form.Label htmlFor="searchInput">Search</Form.Label>
					<Form.Control
					type="search"
					id="searchInput"
					placeholder="Title"
					value={titleFilter}
					onChange={(e) => setTitleFilter(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="me-2">
					<Form.Label htmlFor="ratingInput">Rating</Form.Label>
					<Form.Control
					type="number"
					id="ratingInput"
					placeholder="0"
					value={ratingFilter}
					onChange={(e) => setRatingFilter(e.target.value)}
					/>
				</Form.Group>
				</Form>
			</Navbar.Collapse>
			</div>
		</Container>
		</Navbar>
	);
}

export default NavBarCine;
