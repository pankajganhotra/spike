import React from "react";
import { ButtonGroup, Card, Col, Button } from "react-bootstrap";
import { Pen, Trash } from "react-bootstrap-icons";

const Task = ({ task }) => {
  return (
    <Col xs="12" sm="6" className="mx-auto">
      <Card className="my-1">
        <Card.Body className="d-flex align-items-center">
          {"task.title"}
          <ButtonGroup className="ms-auto">
            <Pen
              className="me-2"
              color="grey"
              onClick={() => console.log("jkj")}
            />
            <Trash color="red" />
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Task;
