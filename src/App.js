import React, { Component } from "react";
import "./App.css";

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
