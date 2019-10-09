import React, { Component } from "react";
import { createPost } from "../../store/actions/postActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

class CreatePost extends Component {
  state = {
    body: ""
  };

  handleChange = e => {
    this.setState({
      body: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="CreatePost">
        <form className="form-group" onSubmit={this.handleSubmit}>
          <h3 className="text-center mt-5">Create Post</h3>
          <div className="input-field">
            <textarea
              onChange={this.handleChange}
              type="text"
              id="body"
              className="form-control"
              autoComplete="off"
              placeholder="What do you want to say ??"
            ></textarea>
          </div>
          <div className="input-field text-center">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { createPost }
  )(CreatePost)
);
