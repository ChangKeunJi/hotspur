import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { FaTrashAlt } from "react-icons/fa";
import { deletePost } from "../../store/actions/postActions";

class Post extends Component {
  handleDelete = () => {
    const { post } = this.props;

    this.props.deletePost(post);
    console.log(post);
  };

  render() {
    const { post, auth } = this.props;

    const renderImage = () => {
      if (post.url) {
        return <img src={post.url} className="profile-image" alt="" />;
      } else {
        return <div className="avatar"></div>;
      }
    };

    const renderIcon = () => {
      if (post.userId === auth.uid) {
        return (
          <span className="">
            <button
              className="btn btn-outline-danger btn-sm mr-3"
              onClick={this.handleDelete}
            >
              <FaTrashAlt /> Delete{" "}
            </button>
          </span>
        );
      } else {
        return null;
      }
    };

    return (
      <div className="Post mt-4">
        <div className="card border-primary">
          <div className="row no-gutters">
            <div className="col-xs-4 col-md-4 col-lg-2">{renderImage()}</div>
            <div className="col-xs-8 col-md-8 col-lg-10">
              <div className="card-body bg-light">
                <div className="card-text">{post.body}</div>
              </div>
            </div>
          </div>
          <div className="card-footer  d-flex justify-content-between">
            <span className="font-weight-bold">{post.username}</span>

            <span className="text-right">
              {renderIcon()}
              {moment(post.createdAt.toDate()).calendar()}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.firebase.profile.url,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  { deletePost }
)(Post);
