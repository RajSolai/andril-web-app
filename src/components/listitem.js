//listitem.jsx
import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../theme/App.scss";
import "./listitem.scss"

class ListItem extends Component{
	render() {
		return (
			<Link className="listitem" to="">
			<div className="listbox">
				<li><h3>{this.props.title}</h3></li>
				<li><p>{this.props.content}</p></li>
			</div>
			</Link>
		);
	}
}

export default ListItem;
