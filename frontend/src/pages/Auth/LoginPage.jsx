import React from "react";
import { Col, Container, Button, Card } from "react-bootstrap";
import { GoogleButton } from "../../Components/buttons";

const LoginPage = () => {
  return (
    <Container>
      <Col className="mx-auto text-center" sm="6" xs="12">
        <Card>
          <Card.Title>Login</Card.Title>
          <Card.Body>
            <GoogleButton />
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default LoginPage;
