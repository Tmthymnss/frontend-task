import { Navbar, Container, Nav} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import UserContext from '../UserContext.js';
import {useContext} from 'react';

export default function AppNavbar() {
	

	return (
		<Navbar bg="light" expand="lg">
			<Container fluid> 
		    	<Navbar.Brand as={Link} to='/'> MSM </Navbar.Brand>

		    	<Navbar.Toggle aria-controls="basic-navbar-nav"/>
		    	<Navbar.Collapse>
		    		<Nav className="ms-auto">

		    			<Nav.Link as={NavLink} to='/'> Home</Nav.Link>
                        
			    		<Nav.Link as={NavLink} to='/stores'> Stores </Nav.Link>

		    		
		    		</Nav>
		    	</Navbar.Collapse>
		    </Container>
	  </Navbar>
	)
}