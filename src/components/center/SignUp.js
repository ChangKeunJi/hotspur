import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
import { storage } from "../../config/fbConfig";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    image: null,
    url: "",
    progress: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  handleImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({ image: image });
    }
  };

  handleUpload = e => {
    e.preventDefault();

    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",

      snapshot => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({ progress });
      },

      error => {
        console.log(error);
      },

      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => this.setState({ url: url }));
      }
    );
  };

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to="/" />;

    const fileName = this.state.image ? this.state.image.name : "Choose File";

    const renderProgressbar = () => {
      if (this.state.progress >= 1) {
        return <progress value={this.state.progress} max="100" />;
      }
    };

    return (
      <div className="SignUp">
        <form className="form-group" onSubmit={this.handleSubmit}>
          <h3 className="text-center">Sign Up</h3>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              className="form-control"
              onChange={this.handleChange}
              autoComplete="off"
            />
          </div>

          <div>
            <label>Profile Image (Optional)</label>
          </div>
          <div className="input-group">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="image"
                onChange={this.handleImage}
              />
              <label className="custom-file-label" htmlFor="image">
                {fileName}
              </label>
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                onClick={this.handleUpload}
              >
                Upload
              </button>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center text-center bg-light">
            <div>{renderProgressbar()}</div>
            <div>
              <img
                src={this.state.url}
                className="img-fluid mt-2 mb-2 text-center border border-primary"
                height="300"
                width="200"
                alt=""
              />
            </div>
          </div>

          <div className="input-field text-center">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <div className="text-danger center mt-4">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);
