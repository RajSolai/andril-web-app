//bottombar.jsx
import React, { Component } from "react";
import "../theme/App.scss";
import { FaPen, FaUserAlt, FaInfoCircle, FaNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./bottombar.scss";

class BottomBar extends Component {
  render() {
    return (
      <div className="bottombar" id="bottombar">
        <Link className="link" to="">
          <button className="round-btn">
            <FaInfoCircle color="#ffffff" />
          </button>
        </Link>
        <Link className="link" to="addarticle">
          <button className="round-btn">
            <FaPen color="#ffffff" />
          </button>
        </Link>
        <Link className="link" to="search">
          <button className="round-btn">
            <FaNewspaper color="#ffffff" />
          </button>
        </Link>
        <Link className="link" to="usr">
          <button className="round-btn">
            <FaUserAlt color="#ffffff" />
          </button>
        </Link>
      </div>
    );
  }
}

export default BottomBar;
