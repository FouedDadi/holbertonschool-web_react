import './Header.css';
import React from 'react';

function Header() {
  return (
    <div className='App'>
      <header
        className='App-header'
        style={{
          position: 'fixed',
          top: '15%',
          width: '100%',
          height: '30%',
        }}
      >
        <h1>School dashboard</h1>
      </header>
    </div>
  );
}

export default Header;
