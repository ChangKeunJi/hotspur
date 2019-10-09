import React, { Component } from "react";
import SignInUp from "./SignInUp";
import Notification from "./Notification";
import Profile from "./Profile";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class RightSection extends Component {
  render() {
    const { auth, profileInfo, notifications } = this.props;

    const link = auth.uid ? (
      <Profile profileInfo={profileInfo} />
    ) : (
      <SignInUp />
    );
    return (
      <div className="right-section container">
        {link}
        <Notification notifications={notifications} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profileInfo: state.firebase.profile,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "notifications", limit: 6, orderBy: ["time", "desc"] }
  ])
)(RightSection);
