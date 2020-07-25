import React, { Component } from "react";
import "../theme/App.scss";
// eslint-disable-next-line no-unused-vars
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";
import { FaHeart } from "react-icons/fa";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
    this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  _testlogin() {
    localStorage.setItem("uid", "sampleuidw83q498");
    window.location.reload();
  }
  login() {
    /* let data = {
      email: this.state.email,
      pass: this.state.password,
    };
    Axios.post("", data).then((res) => {
      console.log(res);
      window.location.reload();
    }); */
    this._testlogin();
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
            <button onClick={this.login}>Log in</button>
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
          <div className="left gradient2">
            <div className="left-area">
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
                <button onClick={this.login}>Log in</button>
              </div>
            </div>
            <div className="spacer1"></div>
            <div className="regislink">
              <Link to="/register" className="link">
                <span style={{ fontSize: "14px", fontStyle: "normal" }}>
                  New to Andril ? Create Account
                </span>
              </Link>
            </div>
          </div>
          <div className="right">
            <p className="credits">
              Thanks Unsplash for Awesome Photo{"  "}
              <span>
                <FaHeart color="pink" />{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
