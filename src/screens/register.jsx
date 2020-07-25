import React, { Component } from "react";
import "../theme/App.scss";
// eslint-disable-next-line no-unused-vars
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";
import { FaHeart } from "react-icons/fa";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
    };
    this.signup = this.signup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  signup() {
    let data = {
      name: this.state.name,
      email: this.state.email,
      pass: this.state.password,
    };
    Axios.post("", data).then((res) => {
      console.log(res);
      this.props.history.push("/home");
    });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div className="login-area">
        <div className="normal-greet">
          {/* for mobile view */}
          <h2>Login</h2>
          <div className="form">
            <input
              type="email"
              onChange={this.handleInputChange}
              name="email"
              id="email"
              placeholder="Enter your Email ID"
              aria-label="Email Address"
            />
            <input
              type="password"
              onChange={this.handleInputChange}
              name="password"
              id="password"
              placeholder="Enter your Password"
            />
            <button onClick={this.signup}>Log in</button>
          </div>
          <div className="regislink">
            <Link to="/register" className="link">
              <span style={{ fontSize: "16px", fontStyle: "normal" }}>
                New to Andril ? Create Account
              </span>
            </Link>
          </div>
        </div>
        <div className="split-greet">
          <div className="left gradient1">
            <div className="left-area">
              <h2>Create Andril Account</h2>
              <div className="form">
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  name="name"
                  id="name"
                  placeholder="Enter your Name"
                  aria-label="Name"
                />
                <input
                  type="email"
                  onChange={this.handleInputChange}
                  name="email"
                  id="email"
                  placeholder="Enter your Email ID"
                  aria-label="Email Address"
                />
                <input
                  type="password"
                  onChange={this.handleInputChange}
                  name="password"
                  id="password"
                  placeholder="Set your Password"
                />
                <button onClick={this.signup}>Sign Up</button>
              </div>
            </div>
            <div className="spacer1"></div>
            <div className="regislink">
              <Link to="/" className="link">
                <span style={{ fontSize: "14px", fontStyle: "normal" }}>
                  Already Have an Account ? Login in !
                </span>
              </Link>
            </div>
          </div>
          <div className="right register">
            <p className="credits" style={{ color: "black" }}>
              Thanks Unsplash for Awesome Photo{"  "}
              <span>
                <FaHeart color="red" />{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
