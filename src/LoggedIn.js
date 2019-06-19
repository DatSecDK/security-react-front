import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import NavBar from "./components/layout/navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

export default class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: JSON.parse(localStorage.getItem("currentUser"))
    };
  }

  render() {
    return (
      <Router>
        <Header />
        <NavBar
          setUser={this.setUser}
          setLoggedIn={this.setLoggedIn}
          setLoggedOut={this.setLoggedOut}
          isLoggedIn={this.state.isLoggedIn}
          currentUser={this.state.currentUser}
        />
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={props => <Home {...props} isLoggedIn={this.state.isLoggedIn} />}
            />
            <Route
              exact
              path="/login"
              setUser={this.setUser}
              setLoggedIn={this.setLoggedIn}
              setLoggedOut={this.setLoggedOut}
              isLoggedIn={this.state.isLoggedIn}
              currentUser={this.state.currentUser}
              component={Login}
            />
            {/* <Route exact path="/test" render={props => <Test {...props} />} /> */}
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
