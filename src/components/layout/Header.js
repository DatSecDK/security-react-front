import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Header = props => {
	const { branding } = props;
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
			<div className="container">
				<a href="https://kimhotdk.github.io/exam-react/#/" className="navbar-brand">
					{branding}
				</a>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink to="/" exact activeClassName="active" className="nav-link">
								<i className="fas fa-home" /> Home
							</NavLink>
						</li>{" "}
						<li className="nav-item">
							<NavLink to="/test" exact activeClassName="active" className="nav-link">
								<i className="fas fa-car" /> Test
							</NavLink>
						</li>{" "}
						<li className="nav-item">
							<NavLink to="/login" exact activeClassName="active" className="nav-link">
								<i className="fas fa-key" /> login
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/about" exact activeClassName="active" className="nav-link">
								<i className="fas fa-question" /> About
							</NavLink>
						</li>{" "}
					</ul>
				</div>
			</div>
		</nav>
	);
};

Header.defaultProps = {
	branding: "3. Semester Exam"
};
//Validates Header.defaultProps input
Header.propTypes = {
	branding: PropTypes.string.isRequired
};

export default Header;
