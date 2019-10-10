import React, { Component } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { withRouter } from "react-router-dom";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class CenterSection extends Component {
  render() {
    const { posts, profileInfo } = this.props;

    const path = () => {
      if (window.location.pathname === "/signin") {
        return <SignIn />;
      } else if (window.location.pathname === "/signup") {
        return <SignUp />;
      } else if (window.location.pathname === "/create") {
        return <CreatePost />;
      } else if (window.location.pathname === "/") {
        return <PostList posts={posts} profileInfo={profileInfo} />;
      }
    };

    return <div className="center-section">{path()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    profileInfo: state.firebase.profile
  };
};

export default withRouter(
  compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "posts", orderBy: ["createdAt", "desc"] }])
  )(CenterSection)
);
