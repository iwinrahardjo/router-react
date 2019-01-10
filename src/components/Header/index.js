import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = styled.header`
  font-size: 1.5em;
  text-align: center;
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
        <NavigationLinks>
          <li>
            <Link to="../App.js">Home</Link>
          </li>
          <li>
            <Link to="Components/Body">Body</Link>
          </li>
          <li>
            <Link to="Components/Footer">Footer</Link>
          </li>
        </NavigationLinks>
      </NavigationBar>
    );
  }
}

export default Header;
