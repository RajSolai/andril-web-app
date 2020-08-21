//listitem.jsx
import React, { Component } from "react";
import "../theme/App.scss";
import "./listitem.scss";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

class ListItem extends Component {
	render() {
		return (
			<Fade left>
				<Link className="listitem" to={"/article/en/" + this.props.id}>
					<div className="listbox">
						<li>
							<h3>{this.props.title}</h3>
						</li>
						<li>
							<p>{this.props.content}</p>
						</li>
					</div>
					<div className="listimg">
						<img
							src={this.props.image}
							alt={this.props.title}
							height="80px"
							width="80px"
						/>
					</div>
				</Link>
			</Fade>
		);
	}
}

export default ListItem;
