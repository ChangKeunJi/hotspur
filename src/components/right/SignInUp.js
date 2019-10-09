import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const SignInUp = () => {
  return (
    <div className="SignInUp">
      <LinkContainer to="/signin">
        <button type="button" className="btn btn-block btn-outline-primary">
          Sign In
        </button>
      </LinkContainer>
      <LinkContainer to="/signup">
        <button type="button" className="btn btn-block btn-outline-primary">
          Sign Up
        </button>
      </LinkContainer>
    </div>
  );
};

export default SignInUp;
