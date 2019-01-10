import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
