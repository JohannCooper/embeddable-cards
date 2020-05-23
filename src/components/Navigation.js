import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
	return (
		<Navbar expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand href='/'>Atomic Events</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav activeKey={window.location.pathname} className='mr-auto'>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/cards'>Cards</Nav.Link>
					<Nav.Link href='/chains'>Chains</Nav.Link>
					<Nav.Link href='/feedback'>Feedback</Nav.Link>
					<Nav.Link href='/about'>About</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
