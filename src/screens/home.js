import React, { Component } from "react";
import Card from "../components/card";
import ListItem from "../components/listitem";
import "../theme/App.scss";
import styled from 'styled-components'
import { IoIosArrowBack } from "react-icons/io"
import { FaSearch } from "react-icons/fa"
import {Fade} from 'react-reveal';

const SearchBox = styled.input`
    background:#f5f5f5;
    display:inline-block;
    border: none;
    border-radius:8px;
    width:80vw;
    height:40px;
    padding: 0.25em 1em;
    margin:.5em;
`
const SearchContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-content:center;
    justify-content:center;
    background: #f5f5f5;
    align-items: center;
    padding-left: 1em;
    border-radius:20px;
`

const SearchContent = styled.div`
    display:none;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    text-align:center;
`
const IconButton = styled.a`
    margin:.5em;
    justify-content:center;
    text-align:center;
    font-size:1rem;
    padding: .5em;
    display: block;
`

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            mustread : [],
            mostpop : [],
            searchKey: "",
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
        this.searchRecords(event.target.value);
    }
    handleBackHome(){
        document.getElementById("searchcontent").style.display="none";
        document.getElementById("homecontent").style.display="block";
        if (document.documentElement.clientWidth <= 600) {
            document.getElementById("bottombar").style.display="flex";
        }
    }
    async searchRecords(key){
        // search for the item based on article name
    }
    async getMustRead(){
        // get must read articles
    }
    async getRecent(){
        // get recent articles
    }
  render() {
    return (
      <div className="app">
        <div className="safe-area">
        <SearchContainer>
        <FaSearch></FaSearch>
        <SearchBox placeholder="Search for the Article" onChange={this.handleSearch} value={this.state.searchKey}></SearchBox>          
        </SearchContainer>
        <SearchContent id="searchcontent">
        <IconButton onClick={this.handleBackHome}>
         <span>
            <IoIosArrowBack/> Get Back To Home
        </span> 
        l</IconButton>
        <Fade left>
            <Card title="Sample Card 1" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
            <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
            <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
            <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>    
        </Fade>
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
        <h3 style={{margin:"none"}}>Recent Articles</h3>
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

