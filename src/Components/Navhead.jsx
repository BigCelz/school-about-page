import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import schoollogo from "../Assets/schoollogo.png";

const Navhead = () => {
  return (
    <Navbar expand="lg" className="bg-white px-md-3 py-md-3  fixed">
      <Container>
        <Navbar.Brand href="#home">
          <img src={schoollogo} alt="" className="nav-image" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 shadow-none"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="#home" className="nav-link active">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Find a School
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Find a Tutor
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Pricing
            </Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <div className="d-flex gap-4 ms-lg-5  ms-sm-0 ">
              <button className="login-btn">Login</button>
              <button className="signup-btn ">Sign Up</button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navhead;