import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./theme/App.scss";
import AddArticle from "./screens/addarticle";
import Home from "./screens/home";
import Login from "./screens/login";
import Search from "./screens/search";
import BottomBar from "./components/bottombar";
import Register from "./screens/register";
import Article from "./screens/article";
import { FaPen, FaUserAlt, FaNewspaper, FaInfoCircle } from "react-icons/fa";

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
        <Router>
          <div className="nav-bar">
            <ul className="nav-list">
              <li className="nav-itemp">
                <Link to="/" className="link">
                  <p className="brand">
                    Andril<em>360</em>
                  </p>
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
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/addarticle" exact component={AddArticle}></Route>
              <Route path="/search" exact component={Search}></Route>  
              <Route path="/article/:id" exact component={Article}></Route>  
            </Switch>
          <BottomBar/>
        </Router>
      );
    } else {
      return (
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={Login}></Route>
              <Route path="/register" exact component={Register}></Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
