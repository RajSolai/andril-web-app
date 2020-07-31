//search.js
import React, { Component } from "react";
import "../theme/App.scss"
import { FaSearch } from "react-icons/fa";
import styled from 'styled-components'

const CategoryButton = styled.button`
  background: #df5e88;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  font-size:.9rem;
  margin: 0.5em;
  padding: 0.25em 1em;
`
const SearchBox = styled.input`
	background:#ffffff;
	display:inline-block;
	border:none;
	border-radius:8px;
	padding: 0.25em 1em;
	margin:.5em;
`

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.handleCategoryChange = this.handleCategoryChange.bind();
	}
	handleCategoryChange(event){
		let category = event.target.id;
		console.log(category);
	}
	render() {
		return (
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
					<div className="search-box">
						<SearchBox></SearchBox>
						<button><FaSearch></FaSearch></button>
					</div>
				</div>
			</div>
		);
	}
}
