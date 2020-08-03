//article.js
import React, { Component } from "react";
import Axios from "axios";
import "../theme/App.scss";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    let articleid = this.props.match.params.id;
    //TODO: search for article data in DB and save in state
    Axios.get("https://blooming-shelf-29088.herokuapp.com/api/posts/search/id/"+articleid).then((res) => {
      console.log(res);
      if (res.data.code==="PSTDTA") {
        this.setState({ data: res.data.postdata });
      }
    });
  }
  render() {
    return (
      <div className="app">
        <div className="safearea article-layout">
          <h3>{this.state.data.posttitle}</h3>
          <article>{this.state.data.body}</article>
        </div>
      </div>
    );
  }
}
