//listitem.jsx
import React, { Component } from "react";
import "../theme/App.scss";
import "./listitem.scss"
import {Link} from "react-router-dom";

class ListItem extends Component{
	render() {
		return (
			<Link className="listitem" to={"/article/"+this.props.id}>
			<div className="listbox">
				<li><h3>{this.props.title}</h3></li>
				<li><p>{this.props.content}</p></li>
			</div>
			<div className="listimg">
				<img src={this.props.image} alt="" height="80px" width="80px"/>
			</div>
			</Link>
		);
	}
}

export default ListItem;
