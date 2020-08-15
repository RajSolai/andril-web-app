import React, { Component } from "react";
import Card from "../components/card";
import NavBar from "../components/navbar";
import BottomBar from "../components/bottombar";
import ListItem from "../components/listitem";
import "../theme/App.scss";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";
import loadingandril from "../assets/loadingandril.svg";
import Nodata from "../assets/Nodata.svg";

//! change the default image
const defaultImage =
  "https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg";

const SearchBox = styled.input`
  background: #f5f5f5;
  display: inline-block;
  border: none;
  border-radius: 8px;
  width: 80vw;
  height: 40px;
  padding: 0.25em 1em;
  margin: 0.5em;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: grey;
    font-size: 1rem;
    font-weight: 500;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background: #f5f5f5;
  align-items: center;
  padding-left: 1em;
  border-radius: 20px;
`;

const SearchContent = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
`;
const IconButton = styled.a`
  margin: 0.5em;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  padding: 0.5em;
  display: block;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      mustread: [],
      mostpop: [],
      searchKey: null,
      searchres: null,
      mustreadloading: true,
      mustpoploading: true,
      searchresloading: true,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    console.log("component loaded");
    this.getMustRead();
    this.getRecent();
  }
  handleSearch(event) {
    document.getElementById("searchcontent").style.display = "flex";
    document.getElementById("homecontent").style.display = "none";
    document.getElementById("bottombar").style.display = "none";
    if (this.state.searchkey === null) {
      document.getElementById("homecontent").style.display = "block";
    }
    this.searchRecords(event.target.value);
  }
  handleBackHome() {
    document.getElementById("searchcontent").style.display = "none";
    document.getElementById("homecontent").style.display = "block";
    if (document.documentElement.clientWidth <= 600) {
      document.getElementById("bottombar").style.display = "flex";
    }
  }
  async searchRecords(key) {
    this.setState({ searchresloading: true });
    // search for the item based on article name
    Axios.get(
      "https://blooming-shelf-29088.herokuapp.com/api/posts/search/" + key
    )
      .then((res) => {
        this.setState({
          searchres: res.data.postdata,
          searchresloading: false,
        });
        console.dir(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async getMustRead() {
    // get must read articles
    await Axios.get(
      "https://blooming-shelf-29088.herokuapp.com/api/posts/mustread"
    )
      .then((res) => {
        console.log(res);
        this.setState({
          mustread: res.data.postdata,
          mustreadloading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async getRecent() {
    // get recent articles
    await Axios.get(
      "https://blooming-shelf-29088.herokuapp.com/api/posts/recents"
    )
      .then((res) => {
        console.log(res);
        this.setState({
          recent: res.data.postdata,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  openArticle(title, content) {
    localStorage.setItem("title", title);
    localStorage.setItem("content", content);
    this.props.history.push("/article");
  }
  render() {
    return (
      <>
        <NavBar></NavBar>
        <div className="app">
          <div className="safe-area homearea">
            <SearchContainer>
              <FaSearch color="grey"></FaSearch>
              <SearchBox
                placeholder="Search for the Article"
                onChange={this.handleSearch}
                value={this.state.searchKey}
              ></SearchBox>
            </SearchContainer>
            <SearchContent id="searchcontent">
              <IconButton onClick={this.handleBackHome}>
                <span style={{ fontWeight: "bold" }}>
                  {"< Get Back To Home"}
                </span>
              </IconButton>
              <div>
                {this.state.searchresloading === true ? (
                  <div className="center-layout">
                    <img src={loadingandril} alt="loading" />
                  </div>
                ) : this.state.searchres.length === 0 ? (
                  <div className="center-layout">
                    <img src={Nodata} alt="loading" />
                  </div>
                ) : (
                  this.state.searchres.map((data) => (
                    <ListItem
                      id={data.postid}
                      title={data.posttitle}
                      content={
                        data.postdesc === null
                          ? "No Description"
                          : data.postdesc
                      }
                      image={
                        data.imagebin === null ? defaultImage : data.imagebin
                      }
                    />
                  ))
                )}
              </div>
            </SearchContent>
            <div id="homecontent">
              <h3 style={{ margin: "none" }}>Must Read</h3>
              {/*for testing*/}
              <div className="homecard-horizontal-view">
                {this.state.mustreadloading === true ? (
                  <FlexBox>
                    <Card
                      title="Loading"
                      content="Content Loading"
                      variant="loading"
                    />
                    <Card
                      title="Loading"
                      content="Content Loading"
                      variant="loading"
                    />
                    <Card
                      title="Loading"
                      content="Content Loading"
                      variant="loading"
                    />
                  </FlexBox>
                ) : (
                  this.state.mustread.map((data) => (
                    <Card
                      id={data.postid}
                      title={data.posttitle}
                      content={
                        data.postdesc === null
                          ? "No Description"
                          : data.postdesc
                      }
                      image={
                        data.imagebin === null ? defaultImage : data.imagebin
                      }
                    />
                  ))
                )}
              </div>
              <h3 style={{ margin: "none" }}>Recent Articles</h3>
              <div className="list-view">
                {this.state.recent.map((data) => (
                  <ListItem
                    id={data.postid}
                    title={data.posttitle}
                    content={data.postdesc}
                    image={data.imagebin}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <BottomBar />
      </>
    );
  }
}

export default Home;
