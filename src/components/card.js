import React, { Component } from "react";
import "../theme/App.scss";
import "./card.scss"

class Card extends Component {
  render() {
    return (
      <div className="card">
      	<img src={this.props.image} className="card-image" alt="Article"/>
      <div className="card-area">
      <p className="card-title">{this.props.title}</p>
      	<div className="card-text">
      	{this.props.content}     	
      	</div>
      </div>
      </div>
    );
  }
}

export default Card;