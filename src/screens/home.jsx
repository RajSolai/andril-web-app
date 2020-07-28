import React, { Component } from "react";
import Card from "../components/card";
import "../theme/App.scss";

class Home extends Component {
  render() {
    return (
      <div className="app">
        <div className="safe-area">
        {/*for testing*/}
        <div className="homecard-horizontal-view">
        <Card title="Sample Card 1" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        <Card title="Sample Card 2" content="lorem ipusum" image="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg"/>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;

