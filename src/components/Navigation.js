import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//FIXME: Navbar is still awkwardly sized on mobile. However this is a small issue.
function Navigation() {
	return (
		<Navbar bg='dark' variant='dark' style={{ flex: '0 1 auto' }}>
			<Navbar.Brand href='/'>Atomic Events</Navbar.Brand>
			<Nav activeKey={window.location.pathname} className='mr-auto'>
				<Nav.Link href='/cards'>Cards</Nav.Link>
				<Nav.Link href='/feedback'>Feedback</Nav.Link>
				<Nav.Link href='/about'>About</Nav.Link>
			</Nav>
		</Navbar>
	);
}

export default Navigation;
