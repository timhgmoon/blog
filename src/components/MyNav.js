import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const MyNav = () => {
  return(
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-right">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">Features</Nav.Link>
        <Nav.Link href="/">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default MyNav;