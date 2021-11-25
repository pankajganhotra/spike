import React from "react";
import { Spinner } from "react-bootstrap";

const Fallback = () => {
  return (
    <div className="text-center my-5">
      <Spinner animation="border" role="status" size="lg" />
    </div>
  );
};

export default Fallback;
