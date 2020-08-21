import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./theme/App.scss";
import AddArticle from "./screens/addarticle";
import Home from "./screens/home";
import Info from "./screens/info";
import Login from "./screens/login";
import Search from "./screens/search";
import Register from "./screens/register";
import ArticleTamil from "./screens/article";
import ArticleEn from "./screens/articleen";
import User from "./screens/user";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
    };
  }
  componentDidMount() {
    this.setState({ uid: localStorage.getItem("uid") });
  }
  render() {
    if (this.state.uid != null) {
      return (
        <>
          <Router>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/addarticle" exact component={AddArticle}></Route>
              <Route path="/search" exact component={Search}></Route>
              <Route path="/usr" exact component={User}></Route>
              <Route path="/about" exact component={Info}></Route>
              <Route
                path="/article/ta/:id"
                exact
                component={ArticleTamil}
              ></Route>
              <Route
                path="/article/en/:id"
                exact
                component={ArticleEn}
              ></Route>
            </Switch>
          </Router>
        </>
      );
    } else {
      return (
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={Login}></Route>
              <Route path="/register" exact component={Register}></Route>
              <Route
                path="/article/ta/:id"
                exact
                component={ArticleTamil}
              ></Route>
              <Route
                path="/article/en/:id"
                exact
                component={ArticleEn}
              ></Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
