import React from "react";
import Events from "./Events";
import { LinkContainer } from "react-router-bootstrap";

const LeftSection = () => {
  return (
    <div className="left-section">
      <div className="container">
        <LinkContainer to="/">
          <div className="">
            <div className="logo"></div>
          </div>
        </LinkContainer>
        <h4 className="text-center my-2">Upcoming Matches</h4>
        <Events />
      </div>
    </div>
  );
};

export default LeftSection;
