import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/body" exact component={Body} />
          <Route path="/footer" exact component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
