import React, { Component } from "react";
import "../theme/App.scss";
import "./card.scss";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

class Card extends Component {
  render() {
    if (this.props.variant === "loading") {
      return (
        <Fade>
          <Link className="card loading">
            <div className="card-image dummy" />
            <div className="card-area">
              <p className="card-title">{this.props.title}</p>
              <div className="card-text">{this.props.content}</div>
            </div>
          </Link>
        </Fade>
      );
    } else {
      return (
        <Fade>
          <Link className="card" to={"/article/en/" + this.props.id}>
            <img src={this.props.image} className="card-image" alt={this.props.title} />
            <div className="card-area">
              <p className="card-title">{this.props.title}</p>
              <div className="card-text">{this.props.content}</div>
            </div>
          </Link>
        </Fade>
      );
    }
  }
}

export default Card;
