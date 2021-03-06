import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNav = () => {

  return(
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">tmoon</Navbar.Brand>
      <Nav className="me-right">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="https://discord.gg/AFkUgVbN">Discord</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
        
      </Nav>
    </Container>
  </Navbar>
  )
}

export default MyNav;