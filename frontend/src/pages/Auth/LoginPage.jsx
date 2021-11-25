import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container } from "react-bootstrap";

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };
  return (
    <Container>
      <Col>
        <h1>Login</h1>
        <Button onClick={handleLogin}>Sign in with Google</Button>
      </Col>
    </Container>
  );
};

export default LoginPage;
