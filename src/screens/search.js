//search.js
// actually all articles
import React, { Component } from "react";
import "../theme/App.scss";
import styled from "styled-components";
import { Fade } from "react-reveal";
import ListItem from "../components/listitem";
import Axios from "axios";
import Nodata from "../components/nodata";
import Loading from "../components/loading";
import NavBar from "../components/navbar";

const defaultImage =
	"https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg";

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			isloading: true,
			categorynow: "tamil",
		};
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
	}
	componentDidMount() {
		this.getData("tamil");
	}
	handleCategoryChange(event) {
		this.setState({
			isloading: true,
			categorynow: event.target.id,
		});
		console.log("categorynow is" + this.state.categorynow);
		document.getElementById(this.state.categorynow).className = "category-btn";
		document.getElementById(event.target.id).className =
			"category-btn active-btn";
		console.log(event.target.id);
		this.getData(event.target.id);
	}
	async getData(category) {
		await Axios.get(
			"https://blooming-shelf-29088.herokuapp.com/api/posts/" + category
		)
			.then((res) => {
				this.setState({
					data: res.data.postdata,
					isloading: false,
				});
				console.log(res.data.postdata);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		return (
			<>
				<NavBar></NavBar>
				<Fade>
					<div className="app">
						<div className="safe-area search-layout">
							<div className="search-categories">
								<button
									className="category-btn active-btn"
									primary
									onClick={this.handleCategoryChange}
									id="tamil"
								>
									Tamil History
								</button>
								<button
									className="category-btn"
									primary
									onClick={this.handleCategoryChange}
									id="medicine"
								>
									Medicine
								</button>
								<button
									className="category-btn"
									primary
									onClick={this.handleCategoryChange}
									id="mystery"
								>
									Mystery
								</button>
								<button
									className="category-btn"
									primary
									onClick={this.handleCategoryChange}
									id="business"
								>
									Business
								</button>
								<button
									className="category-btn"
									primary
									onClick={this.handleCategoryChange}
									id="archaeology"
								>
									Archaeology
								</button>
								<button
									className="category-btn"
									primary
									onClick={this.handleCategoryChange}
									id="environment"
								>
									Environment
								</button>
								<button
									className="category-btn"
									primary
									onClick={this.handleCategoryChange}
									id="art"
								>
									Art
								</button>
								<button
									className="category-btn"
									primary
									onClick={this.handleCategoryChange}
									id="imagination"
								>
									Imagination
								</button>
								<button
									className="category-btn"
									primary
									onClick={this.handleCategoryChange}
									id="politics"
								>
									Politics
								</button>
								<button
									className="category-btn"
									primary
									onClick={this.handleCategoryChange}
									id="tech"
								>
									Tech
								</button>
								<button
									className="category-btn"
									primary
									onClick={this.handleCategoryChange}
									id="crime_stories"
								>
									Crime Stories
								</button>
							</div>
							<CardContainer>
								{this.state.isloading === true ? (
									<Loading></Loading>
								) : this.state.data.length === 0 ? (
									<Nodata></Nodata>
								) : (
									this.state.data.map((data) => (
										<ListItem
											id={data.postid}
											title={data.posttitle}
											content={data.postdesc}
											image={
												data.imagebin === null
													? defaultImage
													: data.imagebin
											}
										/>
									))
								)}
							</CardContainer>
						</div>
					</div>
				</Fade>
			</>
		);
	}
}
