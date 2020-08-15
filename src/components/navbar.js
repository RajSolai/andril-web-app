//navbar.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../theme/App.scss";
import AddArticle from "../screens/addarticle";
import Home from "../screens/home";
import Info from "../screens/info";
import Login from "../screens/login";
import Search from "../screens/search";
import BottomBar from "../components/bottombar";
import Register from "../screens/register";
import Article from "../screens/article";
import andrillogo from "../assets/andrillogo.svg";
import User from "../screens/user";
import { FaPen, FaUserAlt, FaNewspaper, FaInfoCircle } from "react-icons/fa";

export default class NavBar extends React.Component {
	render() {
		return (
			<>
				<div className="nav-bar" id="nav-bar">
					<ul className="nav-list">
						<li className="nav-itemp">
							<Link to="/" className="link">
								<span className="brand">
									<img
										src={andrillogo}
										alt="logo"
										className="brand-logo"
										height="28"
										width="28"
									/>
									Andril<em>360</em>
								</span>
							</Link>
						</li>
						<li className="nav-linkcoll">
							<ul className="nav-list2">
								<Link to="/addarticle" className="link">
									<li className="nav-item">
										<span className="nav-link">
											<FaPen /> Write Article
										</span>
									</li>
								</Link>
								<Link to="/usr" className="link">
									<li className="nav-item">
										<span className="nav-link">
											<FaUserAlt /> My Account
										</span>
									</li>
								</Link>
								<Link to="/search" className="link">
									<li className="nav-item">
										<span className="nav-link">
											<FaNewspaper /> Articles
										</span>
									</li>
								</Link>
								<Link to="/about" className="link">
									<li className="nav-item">
										<span className="nav-link">
											<FaInfoCircle /> About
										</span>
									</li>
								</Link>
							</ul>
						</li>
					</ul>
				</div>
			</>
		);
	}
}
