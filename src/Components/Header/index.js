import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className={"Root"}>
    <h1 className={"Logo"}>BILLIN CODE CHALLENGE</h1>
    <nav className="navbar">
      <Link to="/" className="header-Link"><i className="fa fa-home fa-2x icon"></i></Link>
      <Link to="/article/new" className="header-Link"><i className="fa fa-plus fa-2x icon"></i></Link>
    </nav>

  </header>
)

export default Header;