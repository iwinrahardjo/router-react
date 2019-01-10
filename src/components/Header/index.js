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

const NavigationLinks = styled.ul`
  text-decoration: none;
  li {
    display: inline-block;
    margin-right: 10px;
  }
`;

class Header extends Component {
  render() {
    return (
      <NavigationBar>
        <Title>ini title</Title>
        <NavigationLinks>
          <li>
            <Link to="../App.js">Home</Link>
          </li>
          <li>
            <Link to="../Body">Body</Link>
          </li>
          <li>
            <Link to="../Footer">Footer</Link>
          </li>
        </NavigationLinks>
      </NavigationBar>
    );
  }
}

export default Header;
