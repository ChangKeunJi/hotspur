import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const Profile = props => {
  const renderImage = () => {
    if (props.profileInfo.url) {
      return (
        <img
          src={props.profileInfo.url}
          className="profile-image-profile mb-3 border border-primary"
        />
      );
    } else {
      return <div className="avatar-profile mb-3"></div>;
    }
  };

  return (
    <div className="Profile text-center mb-3 border border-primary mt-2 rounded">
      {renderImage()}
      <h4>{props.profileInfo.username}</h4>
      <div className="buttons d-flex flex-column">
        <LinkContainer to="/">
          <button onClick={props.signOut} className="btn btn-primary mt-3">
            Log Out
          </button>
        </LinkContainer>
        <LinkContainer to="/create">
          <button className="btn btn-primary mt-3">Create Post</button>
        </LinkContainer>
      </div>
    </div>
  );
};

export default connect(
  null,
  { signOut }
)(Profile);
