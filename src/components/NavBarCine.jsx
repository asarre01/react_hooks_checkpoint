import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBarCine() {
	return (
		<Navbar expand="lg" className="bg-danger">
			<Container fluid>
				<Navbar.Brand href="#"><h2>Cinéma</h2></Navbar.Brand>
				<div className='float-end'>
					<Navbar.Collapse id="navbarScroll" >
						<Form className="d-flex">
							<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
							/>
							<Form.Control
							type="number"
							placeholder="0"
							className="me-2"
							aria-label="0"
							/>
						</Form>
					</Navbar.Collapse>
					</div>
			</Container>
		</Navbar>
	);
}

export default NavBarCine;