import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Body />
        </div>
      </Router>
    );
  }
}

export default App;
