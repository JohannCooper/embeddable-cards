import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>Atomic Events</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#cards'>Cards</Nav.Link>
        <Nav.Link href='#chains'>Chains</Nav.Link>
        <Nav.Link href='#feedback'>Feedback</Nav.Link>
        <Nav.Link href='#about'>About</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
