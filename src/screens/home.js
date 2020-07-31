import React, { Component } from "react";
import Card from "../components/card";
import ListItem from "../components/listitem";
import "../theme/App.scss";
import styled from 'styled-components'
import { IoIosArrowBack } from "react-icons/io"

const SearchBox = styled.input`
    background:#ffffff;
    display:inline-block;
    border: solid .6px rgba(0,0,0,.6);
    border-radius:8px;
    width:80vw;
    height:40px;
    padding: 0.25em 1em;
    margin:.5em;
`
const FlexBox = styled.div`
    display:flex;
    justify-content:center;
    align-content:center;
    text-align:center;
`
const SearchContent = styled.div`
    display:none;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    text-align:center;
`
const iconButton = styled.a`
    justify-content:center;
    text-align:center;
    font-size:1rem;
`

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            mustread : [],
            mostpop : [],
            searchKey: null,
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount() {
        console.log("component loaded");
    }
    handleSearch(event){
        document.getElementById("searchcontent").style.display="flex";
        document.getElementById("homecontent").style.display="none";
        document.getElementById("bottombar").style.display="none";
        if (this.state.searchkey===null) {
            document.getElementById("homecontent").style.display="block";
        }
        this.setState({
            searchKey: event.target.value
        });
    }
    handleBackHome(){
        document.getElementById("searchcontent").style.display="none";
        document.getElementById("homecontent").style.display="block";
        if (document.documentElement.clientWidth <= 600) {
            document.getElementById("bottombar").style.display="flex";
        }
    }
  render() {
    return (
      <div className="app">
        <div className="safe-area">
        <FlexBox>
          <SearchBox placeholder="Search for the Article" onChange={this.handleSearch} value={this.state.searchKey}></SearchBox>          
        </FlexBox>
        <SearchContent id="searchcontent">
        <iconButton onClick={this.handleBackHome}> <IoIosArrowBack/> Get Back To Home</iconButton>
        <Card title="Sample Card 1" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>    
        </SearchContent>
        <div id="homecontent">
        <h3 style={{margin:"none"}}>Must Read</h3>
        {/*for testing*/}
        <div className="homecard-horizontal-view">
        <Card title="Sample Card 1" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        </div>
        <h3 style={{margin:"none"}}>Most Popular</h3>
        <div className="list-view">
        <ListItem title="ListItem1" content="Lorem ipusum"/>
        <ListItem title="ListItem1" content="Lorem ipusum"/>
        <ListItem title="ListItem1" content="Lorem ipusum"/>
        <ListItem title="ListItem1" content="Lorem ipusum"/>
        <ListItem title="ListItem1" content="Lorem ipusum"/>
        <ListItem title="ListItem1" content="Lorem ipusum"/>
        <ListItem title="ListItem1" content="Lorem ipusum"/>
        <ListItem title="ListItem1" content="Lorem ipusum"/>
        <ListItem title="ListItem1" content="Lorem ipusum"/>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;

