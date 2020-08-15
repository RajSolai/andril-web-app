//user.js
import React, { Component } from "react";
import { ColorBox } from "../components/components";
import "../theme/App.scss";
import userpageimg1 from "../assets/userpageimg1.svg";
import userpageimg2 from "../assets/userpageimg2.svg";
import Axios from "axios";
import { Fade } from "react-reveal";
import NavBar from "../components/navbar";
import BottomBar from "../components/bottombar";



export default class User extends Component {
	constructor(props) {
		super(props);
		this.signOut = this.signOut.bind(this);
		this.state = {
			userdata: [],
		};
	}
	componentDidMount() {
		this.getUser();
	}
	signOut() {
		localStorage.removeItem("uid");
		this.props.history.push("/");
		window.location.reload();
	}
	getUser() {
		Axios.get(
			"https://blooming-shelf-29088.herokuapp.com/api/users/" +
				localStorage.getItem("uid")
		).then((res) => {
			console.log(res);
			this.setState({ userdata: res.data.userdata });
		});
	}
	render() {
		return (
			<>
			<NavBar></NavBar>
				<Fade>
					<div className="app">
						<div className="safearea">
							<div className="user-account">
								<h3>
									Welcome{" "}
									<span style={{ color: "#ff847c" }}>
										{this.state.userdata=== undefined
											? "loading"
											: this.state.userdata.displayname}
									</span>{" "}
								</h3>
								<p>
									<strong>Email :</strong>{" "}
									{this.state.userdata === undefined
										? "loading"
										: this.state.userdata.emailid}
								</p>
								<div className="box-cont">
									<ColorBox
										color={"#d54062"}
										image={userpageimg1}
										alt="Usage Data"
									></ColorBox>
									<ColorBox
										color={"#f9d56e"}
										image={userpageimg2}
										alt="Share Andril"
									></ColorBox>
								</div>
								<button onClick={this.signOut}>Sign Out</button>
							</div>
						</div>
					</div>
				</Fade>
				<BottomBar></BottomBar>
			</>
		);
	}
}
