//article.js
import React, { Component } from "react";
import Axios from "axios";
import "../theme/App.scss";
import loadingandril from "../assets/loadingandril.svg"
import marked from 'marked';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isloading:true,
    };
  }
  componentWillMount() {
    let articleid = this.props.match.params.id;
    //TODO: search for article data in DB and save in state
    Axios.get("https://blooming-shelf-29088.herokuapp.com/api/posts/search/id/"+articleid).then((res) => {
      console.log(res);
      if (res.data.code==="PSTDTA") {
        this.setState({ data: res.data.postdata , isloading: false });
        document.getElementById("body").innerHTML=marked(res.data.postdata.body==null?"- no data found":res.data.postdata.body)
      }
    });
  }
  render() {
    if (this.state.isloading) {
      return (
        <div className="app">
          <div className="safearea center-layout">
            <img src={loadingandril} alt="Loading"/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="app">
          <div className="safearea article-layout">
            <h3>{this.state.data.posttitle}</h3>
            <div id="body" className="article-body">
            </div>
          </div>
        </div>
      );
    }
    
  }
}
