import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, userData } from "../../pages/userSlice";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";


export const Header = () => {

  const dispatch = useDispatch();
  const datosUserRedux = useSelector(userData);
  const navigate = useNavigate()

  const logMeOut = () => {
    dispatch(logout({ credentials: {}}));
  }


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navBar">
      <Container>
        <Navbar.Brand href="home" id="logo">
          FULL SMILE DEVELOPERS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About us</Nav.Link>
          </Nav>
          <Nav>
            {!datosUserRedux.credentials.token 
            ? (
              <>
                <NavDropdown title="Account" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="register">Register</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </>
            ) : (
              <>
                {datosUserRedux.credentials.role === "ADMIN" 
                ? (
                  <NavDropdown title="Admin" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="ADMIN">ADMIN</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="logout" onClick={()=>logMeOut()}>Logout</NavDropdown.Item>
                  </NavDropdown>
                ) :                 
               <NavDropdown title={datosUserRedux.credentials.email} id="collasible-nav-dropdown">
                <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="appointments">Appointments</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="logout" onClick={()=>logMeOut()}>Logout</NavDropdown.Item>
              </NavDropdown>
              }
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
