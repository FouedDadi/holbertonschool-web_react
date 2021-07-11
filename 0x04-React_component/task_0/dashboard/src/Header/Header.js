import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpg';

function Header() {
  return (
    <div className='App'>
      <header
        className='header'
        style={{
          position: 'fixed',
          top: '20%',
          width: '100%',
          height: '25%',
        }}
      >
        <img src={logo} className='App-logo' alt='logo' />
        <h1>School dashboard</h1>
      </header>
    </div>
  );
}

export default Header;
