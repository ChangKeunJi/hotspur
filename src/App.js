import React, { Component } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/center/SignIn";
import SignUp from "./components/center/SignUp";
import PostList from "./components/center/PostList";
import CreatePost from "./components/center/CreatePost";
import Profile from "./components/right/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/" component={PostList} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/user/:id" component={Profile} />
            <Route path="/create" component={CreatePost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
