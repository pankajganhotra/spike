import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { setAuth } from "../app/store/actions/authActions";
import { api } from "../resources/api";

const Header = () => {
  const handleLogout = async () => {
    try {
      await api.get("/auth/logout");
      setAuth({});
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="mx-auto">To - Do App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <Nav.Link onClick={handleLogout} className="ms-auto">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
