import './Footer.css';
import React from 'react';
import { getFooterCopy, getFullYear } from './utils';

function Footer() {
  return (
    <div className='App'>
      <footer className='App-footer'>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
