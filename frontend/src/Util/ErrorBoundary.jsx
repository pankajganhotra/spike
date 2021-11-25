import React, { Component } from "react";
import { Container, Col } from "react-bootstrap";

//Error Boundary not possible in functional component
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("logErrorToMyService", error, errorInfo);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <Container>
        <Col xs="6" sm="12" className="mx-auto">
          <h1>Something went wrong</h1>
        </Col>
      </Container>
    );
  }
}
