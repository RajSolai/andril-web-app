//article.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../theme/App.scss";
import loadingandril from "../assets/loadingandril.svg";
import marked from "marked";

export default class ArticleEn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isloading: true,
      id: null,
    };
  }
  componentDidMount() {
    this.setState({ id: this.props.match.params.id });
    document.body.style.background = "#ffffff";
    let articleid = this.props.match.params.id;
    Axios.get(
      "https://blooming-shelf-29088.herokuapp.com/api/posts/search/id/" +
        articleid
    ).then((res) => {
      console.log(res);
      if (res.data.code === "PSTDTA") {
        this.setState({ data: res.data.postdata, isloading: false });
        document.getElementById("body").innerHTML = marked(
          res.data.postdata.body == null
            ? "- no data found"
            : res.data.postdata.body
        );
      }
    });
  }
  componentWillUnmount() {
    this.resetTheme();
  }
  themeToggle(reset) {
    console.log(document.body.style.backgroundColor);
    if (document.body.style.backgroundColor === "rgb(255, 255, 255)") {
      document.body.style.backgroundColor = "rgb(51, 51, 51)";
      document.body.style.color = "rgb(255, 255, 255)";
      document.getElementById("drkbtn").innerHTML =
        "<i class='fas fa-sun fa-lg sun'></i>";
    } else {
      document.body.style.backgroundColor = "rgb(255, 255, 255)";
      document.body.style.color = "rgb(51, 51, 51)";
      document.getElementById("drkbtn").innerHTML =
        "<i class='fas fa-moon fa-lg moon'></i>";
    }
  }
  resetTheme() {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    document.body.style.color = "rgb(51, 51, 51) ";
  }
  changeView() {}
  render() {
    if (this.state.isloading) {
      return (
        <div className="app">
          <div className="safearea center-layout">
            <img src={loadingandril} alt="Loading" />
            <div id="body"></div>
            <div id="body-tamil"></div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="reader-top-bar">
            <h3 className="reader-top-bar-title">
              {this.state.data.posttitle}
            </h3>
            <div className="ctrls">
              <div className="tamilview">
                <Link to={"../../article/ta/" + this.state.id}>
                  <button>
                    Tamil <br /> View
                  </button>
                </Link>
              </div>
              <div className="darkmode-cont">
                <button
                  className="darkmodebtn"
                  id="drkbtn"
                  onClick={this.themeToggle}
                >
                  <i class="fas fa-moon fa-lg moon"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="app">
            <div className="reader safearea">
              <div className="image-cont">
                <img
                  src={this.state.data.imagebin}
                  height="300px"
                  width="300px"
                  style={{ borderRadius: "8px" }}
                  alt=""
                />
              </div>
              <img src={this.state} alt="" />
              <p id="body" className="article-body"></p>
            </div>
          </div>
        </>
      );
    }
  }
}
