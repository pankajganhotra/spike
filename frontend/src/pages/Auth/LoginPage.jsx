import React, { useEffect, useState } from "react";
import { Col, Container, Card } from "react-bootstrap";
import { GoogleButton } from "../../Components/buttons";

const LoginPage = () => {
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("retry")) {
      setRetry(true);
    }
  }, []);

  return (
    <Container>
      <Col className="mx-auto text-center" sm="6" xs="12">
        <Card className="p-4">
          <h2>Login</h2>
          <Card.Body>
            {retry && (
              <div className="mb-3">
                You can login with your Google account. Permission to access
                your tasks is required. Please accept the request. Try to login
                with your Google account.
              </div>
            )}
            <GoogleButton />
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default LoginPage;
