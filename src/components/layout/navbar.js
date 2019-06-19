import React from "react";
import Login from "./../pages/Login";
import "./../layout/login.css";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light ">
      <Login className="Login"
        setUser={props.setUser}
        setLoggedIn={props.setLoggedIn}
        setLoggedOut={props.setLoggedOut}
        isLoggedIn={props.isLoggedIn}
        currentUser={props.currentUser}
      />
    </nav>
  );
};

export default NavBar;
