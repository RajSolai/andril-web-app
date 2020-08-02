//search.js
// actually all articles
import React, { Component } from "react";
import "../theme/App.scss"
import styled from 'styled-components'
import {Fade} from "react-reveal";
import Card from "../components/card";


const CategoryButton = styled.button`
  background: #ff847c;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  font-size:.9rem;
  margin: 0.5em;
  padding: 1em;
`
const CardContainer = styled.div`
	display:flex;
	flex-wrap:wrap;
	flex-direction:row;
	justify-content:center;
`

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.handleCategoryChange = this.handleCategoryChange.bind();
	}
	componentDidMount() {
		document.getElementById("bottombar").style.display="none";
	}
	componentWillUnmount() {
   		this.changebottombarTogglevisible(); 
  	}
	handleCategoryChange(event){
		let category = event.target.id;
		console.log(category);
	}
	changebottombarTogglevisible(){
    if (document.documentElement.clientWidth <= 600) {
      document.getElementById("bottombar").style.display="flex";
    }
  }
	render() {
		return (
			<Fade>
			<div className="app">
				<div className="safe-area search-layout">
					<div className="search-categories">
						<CategoryButton primary onClick={this.handleCategoryChange} id="tamil">Tamil</CategoryButton>
						<CategoryButton primary onClick={this.handleCategoryChange} id="medicine">Medicine</CategoryButton>
						<CategoryButton primary onClick={this.handleCategoryChange} id="mystery">Mystery</CategoryButton>
						<CategoryButton primary onClick={this.handleCategoryChange} id="business">Business</CategoryButton>
						<CategoryButton primary onClick={this.handleCategoryChange} id="archaeology">Archaeology</CategoryButton>
						<CategoryButton primary onClick={this.handleCategoryChange} id="environment">Environment</CategoryButton>
						<CategoryButton primary onClick={this.handleCategoryChange} id="art">Art</CategoryButton>
						<CategoryButton primary onClick={this.handleCategoryChange} id="imagination">Imagination</CategoryButton>
						<CategoryButton primary onClick={this.handleCategoryChange} id="politics">Politics</CategoryButton>	
						<CategoryButton primary onClick={this.handleCategoryChange} id="tech">Tech</CategoryButton>
						<CategoryButton primary onClick={this.handleCategoryChange} id="crime_stories">Crime Stories</CategoryButton>
					</div>
					<CardContainer>
						{/* Display all the articles  */}
						<Card title="Sample Card 1" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
			            <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
			            <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
			            <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
			            <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
			            <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
					</CardContainer>
				</div>
			</div>
			</Fade>
		);
	}
}
