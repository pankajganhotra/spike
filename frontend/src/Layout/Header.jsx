import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { setAuth } from "../app/store/actions/authActions";
import { useSelector } from "react-redux";
import { api } from "../resources/api";
import { toggleTaskModal } from "../app/store/actions/modalActions";

const Header = () => {
  const { auth, user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await api.get("/auth/logout");
      setAuth({});
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand className="mx-auto">To-Do App</Navbar.Brand>
        {auth && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link>{user.email}</Nav.Link>
                <Nav.Link onClick={() => toggleTaskModal()}>Add Task</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
