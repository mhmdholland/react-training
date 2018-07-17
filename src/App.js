import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"; //this is for routing
//components
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Posts from "./components/Posts";
import Profiles from "./components/Profiles";
import PlayGround from "./components/playGround";
import PlayGround2 from "./components/playGround2";
import PlayGround3 from "./components/playGround3";
import HOC from "./components/HOC";

class App extends Component {
  state = {
    title: "Posts"
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <header>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/contacts"}>Contacts</Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
                <li>
                  <Link to="/profiles">Profiles</Link>
                </li>
                <li>
                  <Link to="/playground">Play-Ground</Link>
                </li>
                <li>
                  <Link to="/playground2">Play-Ground2</Link>
                </li>
                <li>
                  <Link to="/playground3">Play-Ground3</Link>
                </li>
                <li>
                  <Link to="/HOC">HOC</Link>
                </li>
              </ul>
            </header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/posts" component={Posts} />
              <Route path="/playground" component={PlayGround} />
              <Route path="/playground2" component={PlayGround2} />
              <Route path="/playground3" component={PlayGround3} />
              <Route path="/Profiles" component={Profiles} />
              <Route exact path="/HOC" component={HOC} />
              {/* <Route path='/Profiles/:_id' component={Singlepost} /> */}
              <Route
                render={function() {
                  return (
                    <p>
                      {" "}
                      Not Found
                      <br />
                      <Link className="btn nav-link btn-success" to="/">
                        Back to log and Reg
                      </Link>
                    </p>
                  );
                }}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
