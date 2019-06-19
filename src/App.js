import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
// import NavBar from "./components/layout/navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			currentUser: JSON.parse(localStorage.getItem("currentUser"))
		};
	}

	//Functions for login - "./components/pages/Login"
	setUser = user => {
		this.setState({ currentUser: user });
	};

	getUsername() {
		return this.state.currentUser.username;
	}

	setLoggedIn = () => {
		this.setState({ isLoggedIn: true });
	};
	setLoggedOut = () => {
		this.setState({ isLoggedIn: false });
		localStorage.clear();
	};

	render() {
		return (
			<Router>
				<Header />
				{/* <NavBar
					setUser={this.setUser}
					setLoggedIn={this.setLoggedIn}
					setLoggedOut={this.setLoggedOut}
					isLoggedIn={this.state.isLoggedIn}
					currentUser={this.state.currentUser}
				/> */}
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
							render={() => (
								<Login
									setUser={this.setUser}
									setLoggedIn={this.setLoggedIn}
									setLoggedOut={this.setLoggedOut}
									isLoggedIn={this.state.isLoggedIn}
									currentUser={this.state.currentUser}
									{...this.props}
								/>
							)}
						/>
						<Route exact path="/test" render={props => <Test {...props} />} />
						<Route exact path="/about" component={About} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = { msg: "Hejsa Kim" };
	}

	clicked = () => {
		this.setState({ msg: "Hejsa Dan!" });
	};

	render() {
		return (
			<div>
				<p>{this.state.msg} </p>
				<button onClick={this.clicked}> click me</button>
			</div>
		);
	}
}

export default App;
