import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./../layout/login.css";
import userFacade from "../facade/loginFacade";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };

		this.handleChangeUN = this.handleChangeUN.bind(this);
		this.handleChangePW = this.handleChangePW.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	validateForm() {
		return this.state.username.length > 0 && this.state.password.length > 0;
	}

	handleChangeUN(event) {
		this.setState({ username: event.target.value });
	}

	handleChangePW(event) {
		this.setState({ password: event.target.value });
	}

	handleSubmit = async event => {
		event.preventDefault();
		let username = this.state.username;
		let password = this.state.password;

		const user = { username: username, password: password };

		const data = await userFacade.login(user);
		if (data.token) {
			localStorage.setItem("currentUser", JSON.stringify(data));
			// console.log(this.props.setUser())
			// console.log("--------------------")
			// console.log(this.props.getUserName())
			this.props.setUser(data);
			this.props.setLoggedIn();
		}
	};

	render() {
		if (!this.props.isLoggedIn) {
			return (
				<div className="Login">
					<form onSubmit={this.handleSubmit}>
						<FormGroup controlId="text" bssize="large">
							<FormLabel>User name</FormLabel>
							<FormControl
								autoFocus
								type="text"
								value={this.state.username}
								onChange={this.handleChangeUN}
								name="username"
								placeholder="User name"
							/>
						</FormGroup>
						<FormGroup controlId="password" bssize="large">
							<FormLabel>Password</FormLabel>
							<FormControl
								type="password"
								value={this.state.password}
								onChange={this.handleChangePW}
								name="password"
								placeholder="Password"
							/>
						</FormGroup>
						<Button
							block
							bssize="large"
							disabled={!this.validateForm()}
							type="submit"
							// className="btn-secondary"
						>
							Login
						</Button>
					</form>
				</div>
			);
		} else {
			return (
				<div>
					<span>
						Hello {this.props.currentUser.username + "   "}
						<button onClick={this.props.setLoggedOut} className="btn-secondary">
							Log out
						</button>
					</span>
				</div>
			);
		}
	}
}

export default Login;
