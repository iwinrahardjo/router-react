import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = styled.header`
  font-size: 1.5em;
  text-align: center;
`;

const Title = styled.h1`
  color: blue;
`;

var NavigationLinks = styled.ul`
  li {
    text-decoration: top-line;
    color: green;
    display: inline-block;
    margin-right: 10px;
  }
`;

class Header extends Component {
  render() {
    return (
      <NavigationBar>
        <Title>Title</Title>
        <NavigationLinks>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/body">Body</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </NavigationLinks>
      </NavigationBar>
    );
  }
}

export default Header;
