import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getTasks } from "../../app/store/actions/taskActions";
import Fallback from "../../Util/Fallback";
import Task from "./Task";

const Tasklist = () => {
  const { items, count, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    getTasks();
  }, []);

  if (loading) {
    return <Fallback />;
  }

  if (!count) {
    return <h1>No Tasks Exist </h1>;
  }

  return (
    <Container>
      <Col>
        {items.map((item) => (
          <Task key={item._id} task={item} />
        ))}
      </Col>
    </Container>
  );
};

export default Tasklist;
