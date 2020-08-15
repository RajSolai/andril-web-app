//article.js
import React, { Component } from "react";
import Axios from "axios";
import "../theme/App.scss";
import loadingandril from "../assets/loadingandril.svg";
import marked from "marked";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isloading: true,
    };
  }
  componentWillMount() {
    document.body.style.background = "#ffffff";
    let articleid = this.props.match.params.id;
    //TODO: search for article data in DB and save in state
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
        /*
        document.getElementById("body-tamil").innerHTML = marked(
          res.data.postdata.bodytamil == null
            ? "- no data found"
            : res.data.postdata.bodytamil
        );
        */
        document.getElementById("body-tamil").innerHTML =
          res.data.postdata.bodytamil == null
            ? "- no data found"
            : res.data.postdata.bodytamil;
      }
    });
  }
  componentWillUnmount() {
    this.resetTheme();
  }
  themeToggle(reset) {
    console.log(document.body.style.backgroundColor);
    if (document.body.style.backgroundColor === "rgb(255, 255, 255)") {
      document.body.style.backgroundColor = "rgb(0, 0, 0)";
      document.body.style.color = "rgb(255, 255, 255)";
    } else {
      document.body.style.backgroundColor = "rgb(255, 255, 255)";
      document.body.style.color = "rgb(0, 0, 0)";
    }
  }
  resetTheme() {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    document.body.style.color = "rgb(0, 0, 0)";
  }
  changeView() {
    if (document.getElementById("body-tamil").style.display === "") {
      document.getElementById("body").style.display = "";
      document.getElementById("body-tamil").style.display = "none";
      document.getElementById("view-btn").innerHTML = "View in <br/> Tamil";
    } else {
      document.getElementById("body").style.display = "none";
      document.getElementById("body-tamil").style.display = "";
      document.getElementById("view-btn").innerHTML = "View in <br/> English";
    }
  }
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
                <button
                  className="view-btn"
                  id="view-btn"
                  onClick={this.changeView}
                >
                  View in <br /> Tamil
                </button>
              </div>
              <div className="darkmode-cont">
                <button
                  className="darkmode-btn"
                  id="drkbtn"
                  onClick={this.themeToggle}
                >
                  Switch <br /> DarkMode
                </button>
              </div>
            </div>
          </div>
          <div className=" nomargin app">
            <div className="safearea">
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
              <p
                id="body-tamil"
                className="article-body"
                style={{ display: "none" }}
              ></p>
            </div>
          </div>
        </>
      );
    }
  }
}
