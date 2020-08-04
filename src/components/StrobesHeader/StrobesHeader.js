import React from "react";
import logo from "../../assets/logo.PNG";
import { Link } from "react-router-dom";

const StrobesHeader = () => (
  <div className="header">
    <img src={logo} alt="strobes" className="logo" />
    <h1 className="landing-page__subheading">Register</h1>
    <p className="landing-page__p">
      Already have an account?
      <Link className="login_link" to="#" onClick={function noRefCheck() {}}>
        Login
      </Link>
    </p>
  </div>
);

export default StrobesHeader;
