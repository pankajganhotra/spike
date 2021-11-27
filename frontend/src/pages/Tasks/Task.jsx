import React, { useState } from "react";
import {
  ButtonGroup,
  Card,
  Col,
  Button,
  Collapse,
  FormText,
  Spinner,
} from "react-bootstrap";
import { Pen, Trash } from "react-bootstrap-icons";
import { toggleTaskModal } from "../../app/store/actions/modalActions";
import { deleteTask } from "../../app/store/actions/taskActions";

const Task = ({ task }) => {
  const [show, setShow] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    setDeleting(true);
    deleteTask(task._id, () => setDeleting(false));
  };

  return (
    <Col xs="12" sm="6" className="mx-auto">
      <Card className="my-1">
        <Card.Header className="d-flex align-items-center">
          <Card.Title>{task.content}</Card.Title>
          <ButtonGroup className="ms-auto">
            <Pen
              className="me-2 cursor-pointer"
              color="grey"
              onClick={() => toggleTaskModal(task)}
            />
            <Trash
              color="red"
              className="cursor-pointer"
              onClick={() => setShow((s) => !s)}
            />
          </ButtonGroup>
        </Card.Header>
        <Collapse in={show}>
          <Card.Body>
            <div className="d-flex flex-column text-center">
              <FormText>Are you sure you want to delete this task?</FormText>
              <div
                className="d-flex justify-content-center"
                // style={{ justifyContent: "space-evenly" }}
              >
                <Button
                  className="mx-2"
                  size="sm"
                  variant="secondary"
                  onClick={() => setShow(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="mx-2"
                  size="sm"
                  variant="danger"
                  onClick={handleDelete}
                >
                  {deleting ? <Spinner /> : "Delete"}
                </Button>
              </div>
            </div>
          </Card.Body>
        </Collapse>

        {/* <Card.Body>
          <Collapse.Toggle>
            <Button variant="link" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </Collapse.Toggle>
          <Collapse.Content>
          </Collapse.Content>
        </Card.Body> */}
      </Card>
    </Col>
  );
};

export default Task;
