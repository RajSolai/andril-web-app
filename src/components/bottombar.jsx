//bottombar.jsx
import React, { Component } from "react";
import "../theme/App.scss";
import { FaPen , FaSearch , FaUserAlt , FaInfoCircle } from "react-icons/fa";
import {Link} from "react-router-dom";
import "./bottombar.scss";

class BottomBar extends Component{
	render() {
		return (
			<div className="bottombar" id="bottombar">
			<Link className="link">
			<button className="round-btn">				
				<FaInfoCircle/>
			</button>	
			</Link>
			<Link className="link" to="addarticle">
				<button className="round-btn">				
				<FaPen/>
			</button>
			</Link>
			<Link className="link">
			<button className="round-btn">				
				<FaSearch/>
			</button>
			</Link>
			<Link className="link">
			<button className="round-btn">				
				<FaUserAlt/>
			</button>
			</Link>
	
			
			
			</div>
		);
	}
}

export default BottomBar;