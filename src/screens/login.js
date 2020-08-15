import React, { Component } from "react";
import "../theme/App.scss";
// eslint-disable-next-line no-unused-vars
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";
import andrillogo from "../assets/andrillogo.svg";
import { Fade } from "react-reveal";
import Swal from "sweetalert2";
import womansittinglaptop from "../assets/womansittinglaptop.svg";

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
  loginAnon() {
    localStorage.setItem("uid", "sampleuidw83q498");
    window.location.reload();
  }
  async login() {
    Swal.fire({
      html:
        '<img src="' +
        womansittinglaptop +
        '" alt="uploading" height="100px" width="100px" /> <br/> Logining in , Please Wait',
      showConfirmButton: false,
    });
    let data = {
      email: this.state.email,
      pass: this.state.password,
    };
    await Axios.post(
      "https://blooming-shelf-29088.herokuapp.com/api/login",
      data
    ).then((res) => {
      if (res.data.code === "USRLGD") {
        Swal.close();
        localStorage.setItem("uid", res.data.userdata.uid);
        window.location.reload();
      } else {
        if (res.data.code === "PWDERR") {
          Swal.close();
          document.getElementById("passerr").style.display = "block";
        } else if (res.data.code === "USRERR") {
          Swal.close();
          document.getElementById("nousr").style.display = "block";
        } else {
          Swal.close();
          console.log(res);
        }
      }
    });
    //!this._testlogin();
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
      <>
        <Fade top>
          <div className="login-area">
            <div className="normal-greet">
              {/* for mobile view */}
              <img src={andrillogo} alt="" />
              <h2>Login</h2>
              <div className="form">
                <label htmlFor="email">Email ID :</label>
                <input
                  type="email"
                  onChange={this.handleInputChange}
                  name="email"
                  id="email"
                  placeholder="Enter your Email ID"
                  aria-label="Email Address"
                />
                <label htmlFor="email">Password :</label>
                <input
                  type="password"
                  onChange={this.handleInputChange}
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                />
                <button onClick={this.login}>Log in</button>
                <button className="outline" onClick={this.loginAnon}>Use without Login</button>
                <MessageLabel color="#e8505b" id="passerr">
                  Password incorrect
                </MessageLabel>
                <MessageLabel color="#e8505b" id="nousr">
                  No User Found for given Email
                </MessageLabel>
              </div>
              <div className="regislink mobileregis">
                <Link to="/register" className="link">
                  <span style={{ fontSize: "16px", fontStyle: "normal" }}>
                    New to Andril ? Create Account
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </>
    );
  }
}

export default Login;
