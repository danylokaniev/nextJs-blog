import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
.navbar {
    font-family: 'Montserrat', sans-serif;
    margin-top: 3em;
}

.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
    background-color: white;
    color: black;
}

.container-fluid {
    background-color: #fff;
    padding: 0 40px;
}

.navbar-toggle {
    border: none;
}

.icon-bar {
color: black;
}

.navbar-default .navbar-toggle:focus, 
.navbar-default .navbar-toggle:hover {
    background-color: #fff;
}

.navbar-default .navbar-toggle .icon-bar {
    background-color: black;
}

li:hover {
background-color: #AED6F1 ;
}
`;
export default function NavBar() {
  return (
    <Nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link href="/">
            <a className="navbar-brand">HOME</a>
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link href="/posts">
                <a>POSTS</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/new">
                <a>NEW POST</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}
