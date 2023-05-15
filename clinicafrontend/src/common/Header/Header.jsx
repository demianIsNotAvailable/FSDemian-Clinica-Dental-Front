import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navBar">
      <Container>
        <Navbar.Brand href="home" id="logo">Clínica Dental</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About us</Nav.Link>
          </Nav>
          <Nav>
             <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="login">Login</NavDropdown.Item>
              <NavDropdown.Item href="register">Register</NavDropdown.Item>
               <NavDropdown.Divider />
              <NavDropdown.Item href="admin">ADMIN</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}