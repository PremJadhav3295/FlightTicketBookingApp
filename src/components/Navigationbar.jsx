
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer} from "react-router-bootstrap";

export function Navigationbar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark"className="aero">
      <Container>
        <Navbar.Brand href="#home">AeroEase</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <LinkContainer to="/">
             <Nav.Link>Home</Nav.Link>
             </LinkContainer>

             <LinkContainer to="/About">
             <Nav.Link>About Us</Nav.Link>
             </LinkContainer>

             <LinkContainer to="/Login">
             <Nav.Link>Login</Nav.Link>
             </LinkContainer>

             <LinkContainer to="/Registration">
             <Nav.Link>Register</Nav.Link>
             </LinkContainer>
             
             <LinkContainer to="/Passengerlist">
             <Nav.Link>Passenger List</Nav.Link>
             </LinkContainer>

          </Nav>
        </Navbar.Collapse>
       </Container>
    </Navbar>
  );
}

    