import React from "react";
import { Button } from "react-bootstrap";

export const GoogleButton = (props) => {
  const handleLogin = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };

  return (
    <Button
      onClick={handleLogin}
      className="d-inline-flex align-items-center bg-light text-dark"
    >
      <img
        width="20px"
        height="20px"
        alt="Google sign-in"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
      />
      &nbsp;&nbsp;&nbsp; Login with Google
    </Button>
  );
};
