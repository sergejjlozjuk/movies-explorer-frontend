import './Header.css';
import logo from './../../images/logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header({ headerClassName }) {
  return (
    <header className={`header ${headerClassName}`}>
      <Link to='/' className='header__logo'>
        <img src={logo} alt='logo' />
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
