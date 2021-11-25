import React from "react";
import { Col, Container } from "react-bootstrap";
import Task from "./Task";

const Tasklist = () => {
  return (
    <Container>
      <Col>
        <Task />
        <Task />
        <Task />
        <Task />
      </Col>
    </Container>
  );
};

export default Tasklist;
