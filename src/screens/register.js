import React, { Component } from "react";
import "../theme/App.scss";
// eslint-disable-next-line no-unused-vars
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

const MessageLabel = styled.span`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  font-size: 0.9rem;
  border-radius: 6px;
  border: solid 2px #e8505b;
  background: rgba(232, 80, 91, 0.3);
  display: none;
  color: ${(props) => props.color};
  font-weight: 500;
`;

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
    Axios.post(
      "https://blooming-shelf-29088.herokuapp.com/api/signin",
      data
    ).then((res) => {
      if (res.data.code === "USRCRT") {
        localStorage.setItem("uid", res.data.uid);
        window.location.reload();
      } else {
        if (res.data.code === "USRFND") {
          document.getElementById("usrfnddes").style.display = "block";
          document.getElementById("usrfnd").style.display = "block";
        }
      }
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
          <h2>Welcome to Andril</h2>
          <div className="form">
            <input
              type="text"
              onChange={this.handleInputChange}
              name="name"
              id="name"
              placeholder="Enter your Display Name"
              aria-label="Display Name"
            />
            <input
              type="email"
              onChange={this.handleInputChange}
              name="email"
              id="email"
              placeholder="Enter your Email ID"
              aria-label="Email Address"
            />
            <MessageLabel color="#e8505b" id="usrfnd">
              Email id already in Use
            </MessageLabel>{" "}
            <input
              type="password"
              onChange={this.handleInputChange}
              name="password"
              id="password"
              placeholder="Enter your Password"
            />
            <button onClick={this.signup}>Sign Up</button>
          </div>
          <div className="regislink mobileregis">
            <Link to="/" className="link">
              <span style={{ fontSize: "16px", fontStyle: "normal" }}>
                Have an Account? Login !
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
                <MessageLabel color="#e8505b" id="usrfnddes">
                  Email id already in Use
                </MessageLabel>{" "}
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
